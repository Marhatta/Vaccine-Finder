import {ActionSheet, TabHeading, Spinner, Item, Input} from 'native-base';
import {connect} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {createStructuredSelector} from 'reselect';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useTheme} from 'styled-components/native';
import {showToast} from '../../components/utils/toast';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {Button} from '../../components/common/Button/Button.component';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import {
  getVaccinationCentersByPincode,
  getVaccinationCentersByDistrict,
  getVaccinationStates,
  getVaccinationDistricts,
} from '../../redux/vaccination/vaccination.actions';
import {
  selectStates,
  selectVaccinationCenters,
  selectDistricts,
} from '../../redux/vaccination/vaccination.selectors';
import {VaccinationCenterPincodeCard} from './components/VaccinationCenterPincodeCard/VaccinationCenterPincodeCard.component';
import {VaccinationCenterDistrictCard} from './components/VaccinationCenterDistrictCard/VaccinationCenterDistrictCard.component';
import {UnderlinedInput} from '../../components/common/Input/Input.component';
import {Filter} from './components/Filter/Filter.component';
import {Fallback} from '../../components/common/Fallback/Fallback.component';
import {
  Container,
  HeaderWrapper,
  TabsWrapper,
  CustomTab,
  ActionSheetText,
  ButtonContainer,
  Selector,
} from './Vaccination.styles';
import {toggleFilter, applyDistrictFilters} from './utils/filter';

const AVAILABLE_FILTERS = [
  {id: 1, filterBy: 'vaccineName', filterName: 'Covaxin'},
  {id: 2, filterBy: 'vaccineName', filterName: 'Covishield'},
  {id: 3, filterBy: 'vaccineName', filterName: 'Sputnik-V'},
  {id: 4, filterBy: 'age', filterName: '45+'},
  {id: 5, filterBy: 'age', filterName: '18+'},
  {id: 6, filterBy: 'price', filterName: 'Paid'},
  {id: 7, filterBy: 'price', filterName: 'Free'},
];

const Vaccination = ({
  navigation,
  getVaccinationCentersByPincode,
  getVaccinationCentersByDistrict,
  getVaccinationStates,
  getVaccinationDistricts,
  states,
  districts,
  vaccinationCenters,
}) => {
  useEffect(() => {
    getVaccinationStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const theme = useTheme();
  const [pincode, setPincode] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('pincode');
  const [selectedState, setSelectedState] = useState({
    state_id: 0,
    state_name: 'Select State',
  });
  const [selectedDistrict, setSelectedDistrict] = useState({
    district_id: 0,
    district_name: 'Select District',
  });
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredCenterList, setFilteredCenterList] = useState([]);
  const onChangePickerValue = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowPicker(false);
  };

  //apply the filters as soon as filters array changes
  useEffect(() => {
    if (vaccinationCenters.loadingSuccess) {
      setFilteredCenterList(
        applyDistrictFilters(activeFilters, vaccinationCenters.centerList),
      );
    }
  }, [
    activeFilters,
    vaccinationCenters.loadingSuccess,
    vaccinationCenters.centerList,
  ]);

  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <HeaderWrapper>
          <TabsWrapper
            tabBarUnderlineStyle={{
              backgroundColor: theme.colors.ui.primary,
            }}
            onChangeTab={g => {
              g.i === 1 ? setActiveTab('district') : setActiveTab('pincode');
            }}>
            <CustomTab
              heading={
                <TabHeading
                  style={{
                    backgroundColor: theme.colors.bg.primary,
                  }}>
                  <Text>Search by Pincode</Text>
                </TabHeading>
              }>
              <UnderlinedInput
                style={{backgroundColor: theme.colors.bg.primary}}
                placeholder="Enter your pincode"
                keyboardType="numeric"
                minLength={6}
                maxLength={6}
                onChangeText={value => setPincode(value)}
              />
            </CustomTab>

            <CustomTab
              heading={
                <TabHeading style={{backgroundColor: theme.colors.bg.primary}}>
                  <Text>Search by District</Text>
                </TabHeading>
              }>
              <Selector>
                <ActionSheetText
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: states.stateList.map(
                          state => state.state_name,
                        ),
                        cancelButtonIndex: states.stateList.length - 1,
                        title: 'Select State',
                      },
                      buttonIndex => {
                        //If cancel button or user pressed the state which is already selected, return
                        if (buttonIndex === states.stateList.length - 1) {
                          return;
                        }
                        let state = states.stateList[buttonIndex];
                        setSelectedState(state);
                        getVaccinationDistricts(state.state_id);
                        setSelectedDistrict({
                          district_id: 0,
                          district_name: 'Select District',
                        });
                      },
                    )
                  }>
                  {selectedState.state_name}
                </ActionSheetText>
              </Selector>
              <Selector>
                <ActionSheetText
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: districts.districtList.map(
                          district => district.district_name,
                        ),
                        cancelButtonIndex: districts.districtList.length - 1,
                        title: 'Select District',
                      },
                      buttonIndex => {
                        //If cancel button or user pressed the state which is already selected, return
                        if (buttonIndex === districts.districtList.length - 1) {
                          return;
                        }
                        let district = districts.districtList[buttonIndex];
                        setSelectedDistrict(district);
                      },
                    )
                  }>
                  {selectedDistrict.district_name}
                </ActionSheetText>
              </Selector>
            </CustomTab>
          </TabsWrapper>
          <Item>
            <NativeBaseIcon
              name="calendar"
              type="AntDesign"
              color={theme.colors.text.secondary}
              onPress={() => setShowPicker(prevState => !prevState)}
            />
            <Input placeholder={date.toDateString()} editable={false} />
          </Item>

          {/* Search button */}
          <ButtonContainer>
            <Button
              title="Search"
              full
              onPress={() => {
                if (activeTab === 'pincode') {
                  if (!pincode || pincode.length !== 6) {
                    showToast('Please enter a valid pincode');
                    return;
                  }
                  getVaccinationCentersByPincode(
                    pincode,
                    `${date.getDate()}-${
                      date.getMonth() + 1
                    }-${date.getFullYear()}`,
                  );
                }
                if (activeTab === 'district') {
                  getVaccinationCentersByDistrict(
                    selectedDistrict.district_id,
                    `${date.getDate()}-${
                      date.getMonth() + 1
                    }-${date.getFullYear()}`,
                  );
                }
              }}
            />
          </ButtonContainer>
        </HeaderWrapper>

        {/* Render fallback UI */}
        {!vaccinationCenters.loading &&
          vaccinationCenters.centerList.length === 0 && (
            <Fallback message="No Centers" />
          )}

        {/* Vaccination cards by pincode search */}
        {vaccinationCenters.searchBy.includes('pincode') &&
        vaccinationCenters.loading ? (
          <Spinner />
        ) : (
          vaccinationCenters.searchBy.includes('pincode') &&
          vaccinationCenters.centerList.length > 0 &&
          filteredCenterList.map((vaccinationCenter, index) => {
            return (
              <VaccinationCenterPincodeCard
                key={vaccinationCenter.center_id + '-' + index}
                vacinationCenter={vaccinationCenter}
              />
            );
          })
        )}

        {/* Vaccination cards by district search */}
        {vaccinationCenters.searchBy.includes('district') &&
        vaccinationCenters.loading ? (
          <Spinner />
        ) : (
          vaccinationCenters.searchBy.includes('district') &&
          vaccinationCenters.centerList.length > 0 && (
            <>
              {/* Available Filters */}

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {AVAILABLE_FILTERS.map(filter => {
                  return (
                    <Filter
                      key={filter.id}
                      filter={filter}
                      activeFilters={activeFilters}
                      onPress={() => {
                        setActiveFilters(toggleFilter(filter, activeFilters));
                      }}
                    />
                  );
                })}
              </ScrollView>

              {filteredCenterList.map((vaccinationCenter, index) => {
                return (
                  <VaccinationCenterDistrictCard
                    key={vaccinationCenter.center_id + '-' + index}
                    vaccinationCenter={vaccinationCenter}
                  />
                );
              })}
            </>
          )
        )}
      </Container>

      {showPicker && (
        <DateTimePicker value={date} onChange={onChangePickerValue} />
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStates,
  districts: selectDistricts,
  vaccinationCenters: selectVaccinationCenters,
});

export default connect(mapStateToProps, {
  getVaccinationCentersByPincode,
  getVaccinationCentersByDistrict,
  getVaccinationStates,
  getVaccinationDistricts,
})(Vaccination);

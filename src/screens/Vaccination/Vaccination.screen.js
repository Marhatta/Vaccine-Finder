import {ActionSheet, TabHeading, Spinner} from 'native-base';
import {connect} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {createStructuredSelector} from 'reselect';
import {useTheme} from 'styled-components/native';
import {showToast} from '../../components/utils/toast';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {Button} from '../../components/common/Button/Button.component';
import {Input} from '../../components/common/Input/Input.component';

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

import {
  Container,
  HeaderWrapper,
  TabsWrapper,
  CustomTab,
  ActionSheetText,
  ButtonContainer,
  Selector,
} from './Vaccination.styles';

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
  }, []);

  const theme = useTheme();
  const [pincode, setPincode] = useState();
  const [activeTab, setActiveTab] = useState('pincode');
  const [selectedState, setSelectedState] = useState({
    state_id: 0,
    state_name: 'Select State',
  });
  const [selectedDistrict, setSelectedDistrict] = useState({
    district_id: 0,
    district_name: 'Select District',
  });

  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <HeaderWrapper>
          <TabsWrapper
            tabBarUnderlineStyle={{
              backgroundColor: theme.colors.ui.primary,
            }}
            onChangeTab={g => {
              console.log(g);
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
              <Input
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

          <ButtonContainer>
            <Button
              title="Search"
              full
              onPress={() => {
                if (!pincode || pincode.length !== 6) {
                  showToast('Please enter a valid pincode');
                  return;
                }
                if (activeTab === 'pincode') {
                  getVaccinationCentersByPincode(pincode, '23-05-2021');
                }
                if (activeTab === 'district') {
                  getVaccinationCentersByDistrict(
                    selectedDistrict.district_id,
                    '23-05-2021',
                  );
                }
              }}
            />
          </ButtonContainer>
        </HeaderWrapper>

        {/* Vaccination cards by pincode search */}
        {vaccinationCenters.searchBy.includes('pincode') &&
        vaccinationCenters.loading ? (
          <Spinner />
        ) : (
          vaccinationCenters.searchBy.includes('pincode') &&
          vaccinationCenters.centerList.length > 0 &&
          vaccinationCenters.centerList.map(vaccinationCenter => {
            return (
              <VaccinationCenterPincodeCard
                key={vaccinationCenter.center_id}
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
          vaccinationCenters.centerList.length > 0 &&
          vaccinationCenters.centerList.map(vaccinationCenter => {
            return (
              <VaccinationCenterDistrictCard
                key={vaccinationCenter.center_id}
                vaccinationCenter={vaccinationCenter}
              />
            );
          })
        )}
      </Container>
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

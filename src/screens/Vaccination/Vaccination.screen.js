import React, {useEffect, useState} from 'react';
import {ActionSheet, TabHeading} from 'native-base';
import {createStructuredSelector} from 'reselect';
import {useTheme} from 'styled-components/native';
import {TouchableOpacity, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Text} from '../../components/common/Typography/Text.component';
import {Button} from '../../components/common/Button/Button.component';
import {CovidInfoInput} from '../../components/common/Input/Input.component';
import {connect} from 'react-redux';
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

import {
  Container,
  HeaderWrapper,
  TabsWrapper,
  CustomTab,
  ListWrapper,
  ListRow,
  Listcolumn,
  ListItemDateText,
  ListItemCard,
  HospitalNameText,
  ListItemText,
  AddressText,
  CapacityWrapper,
  CapacityIcon,
  InputView,
  ActionSheetText,
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
      <Container>
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
              style={{backgroundColor: theme.colors.bg.secondary}}
              heading={
                <TabHeading
                  style={{
                    backgroundColor: theme.colors.bg.secondary,
                    color: theme.colors.text.primary,
                  }}>
                  <Text>Pincode</Text>
                </TabHeading>
              }>
              <CovidInfoInput
                placeholder="Enter your pincode"
                keyboardType="numeric"
                minLength={6}
                maxLength={6}
                onChangeText={value => setPincode(value)}
              />
            </CustomTab>
            <CustomTab
              style={{backgroundColor: theme.colors.bg.secondary}}
              heading={
                <TabHeading
                  style={{backgroundColor: theme.colors.bg.secondary}}>
                  <Text>District</Text>
                </TabHeading>
              }>
              <TouchableOpacity>
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
              </TouchableOpacity>
              <TouchableOpacity>
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
              </TouchableOpacity>
            </CustomTab>
          </TabsWrapper>
          <InputView>
            <Button
              title="Search"
              full
              onPress={() => {
                if (activeTab === 'pincode') {
                  getVaccinationCentersByPincode(pincode, '20-05-2021');
                }
                if (activeTab === 'district') {
                  getVaccinationCentersByDistrict(
                    selectedDistrict.district_id,
                    '20-05-2021',
                  );
                }
              }}
            />
          </InputView>
        </HeaderWrapper>
        {vaccinationCenters.vaccinationCenters &&
        vaccinationCenters.vaccinationCenters.length > 0 ? (
          vaccinationCenters.vaccinationCenters.map((item, index) => {
            return (
              <ListWrapper key={index}>
                <ListItemDateText>{item.date}</ListItemDateText>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={300}
                  pagingEnabled
                  decelerationRate="fast">
                  {item.sessions.length > 0 ? (
                    item.sessions.map((session, index) => {
                      return (
                        <ListItemCard key={session.center_id}>
                          <ListRow>
                            {session.fee_type === 'Paid' ? (
                              <Icon
                                width={`${wp('5%')}px`}
                                height={`${hp('2.5%')}px`}
                                source={require('../../assets/icons/paid.png')}
                              />
                            ) : (
                              <Icon
                                width={`${wp('5%')}px`}
                                height={`${hp('2.5%')}px`}
                                source={require('../../assets/icons/free.png')}
                              />
                            )}

                            <HospitalNameText
                              variant="caption"
                              fontSize="12px"
                              color={theme.colors.text.secondary}>
                              {session.name}
                            </HospitalNameText>
                          </ListRow>

                          <AddressText
                            variant="label"
                            fontSize="11px"
                            color={theme.colors.text.secondary}>
                            {session.address},{session.district_name},
                            {session.state_name}
                          </AddressText>
                          <Listcolumn width="40%">
                            <ListItemText
                              variant="label"
                              fontSize="10px"
                              color={theme.colors.text.secondary}>
                              {session.vaccine}
                            </ListItemText>
                            <CapacityWrapper>
                              <CapacityIcon
                                width={`${wp('4%')}px`}
                                height={`${wp('4%')}px`}
                                source={require('../../assets/icons/syringe_5.png')}
                              />
                              <Text
                                variant="label"
                                fontSize="10px"
                                color={theme.colors.text.secondary}>
                                {''} {session.available_capacity_dose1}
                              </Text>
                              <CapacityIcon
                                marginLeft={`${wp('3%')}px`}
                                width={`${wp('4%')}px`}
                                height={`${wp('4%')}px`}
                                source={require('../../assets/icons/syringe_5.png')}
                              />
                              <CapacityIcon
                                width={`${wp('4%')}px`}
                                height={`${wp('4%')}px`}
                                source={require('../../assets/icons/syringe_5.png')}
                              />
                              <Text
                                variant="label"
                                fontSize="10px"
                                color={theme.colors.text.secondary}>
                                {''} {session.available_capacity_dose2}
                              </Text>
                            </CapacityWrapper>
                          </Listcolumn>
                        </ListItemCard>
                      );
                    })
                  ) : (
                    <Text>No Data Found, Please try again</Text>
                  )}
                </ScrollView>
              </ListWrapper>
            );
          })
        ) : (
          <Text />
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

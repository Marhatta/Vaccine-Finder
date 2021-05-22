import React from 'react';
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
import {getVaccinationCentersByPincode} from '../../redux/vaccination/vaccination.actions';
import {
  selectStates,
  selectVaccinationCenters,
} from '../../redux/vaccination/vaccination.selectors';
import inputDistricts from './district';

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
  states,
  vaccinationCenters,
}) => {
  const theme = useTheme();
  const [pincode, setPincode] = React.useState();
  const [selectedState, setSelectedState] = React.useState('Select State');
  const [selectedDistrict, setSelectedDistrict] =
    React.useState('Select District');
  // TODO: Replace by API
  let newStates = [];
  states.stateList.forEach(state => {
    newStates.push(state.state_name);
  });
  let districts = [];
  inputDistricts.forEach(district => {
    districts.push(district.district_name);
  });

  // const getWeekFromStartDay = (start, noOfDay) => {
  //   var weekDays = [];
  //   var curr;
  //   for (let i = start + 1; i <= start + noOfDay; i++) {
  //     curr = new Date(); // get current date
  //     let first = curr.getDate() - curr.getDay() + i;
  //     let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
  //     weekDays.push({
  //       label: new Date(day)
  //         .toLocaleDateString('en-IN', {
  //           day: 'numeric',
  //           month: 'short',
  //         })
  //         .split(' ')
  //         .join('-'),
  //       date: day,
  //     });
  //   }
  //   return weekDays;
  // };

  // let data = getWeekFromStartDay(3, 7);
  // console.log(data);

  return (
    <Layout navigation={navigation}>
      <Container>
        <HeaderWrapper>
          <TabsWrapper
            tabBarUnderlineStyle={{
              backgroundColor: theme.colors.ui.primary,
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
                        options: newStates,
                        title: 'Select State',
                      },
                      buttonIndex => {
                        setSelectedState(newStates[buttonIndex]);
                      },
                    )
                  }>
                  {selectedState}
                </ActionSheetText>
              </TouchableOpacity>
              <TouchableOpacity>
                <ActionSheetText
                  onPress={() =>
                    ActionSheet.show(
                      {
                        options: districts,
                        title: 'Select District',
                      },
                      buttonIndex => {
                        setSelectedDistrict(districts[buttonIndex]);
                      },
                    )
                  }>
                  {selectedDistrict}
                </ActionSheetText>
              </TouchableOpacity>
            </CustomTab>
          </TabsWrapper>
          <InputView>
            <Button
              title="Search"
              full
              onPress={() =>
                getVaccinationCentersByPincode(pincode, '20-05-2021')
              }
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
  vaccinationCenters: selectVaccinationCenters,
});

export default connect(mapStateToProps, {getVaccinationCentersByPincode})(
  Vaccination,
);

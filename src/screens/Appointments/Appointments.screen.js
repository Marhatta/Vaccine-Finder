import React from 'react';
import {useTheme} from 'styled-components/native';
import {ActionSheet} from 'native-base';
import {TouchableOpacity, ScrollView} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {
  Text,
  ActionSheetText,
} from '../../components/common/Typography/Text.component';
import {Button} from '../../components/common/Button/Button.component';
import {CovidInfoInput} from '../../components/common/Input/Input.component';
import {connect} from 'react-redux';
import {getVaccinationCentersByPincode} from '../../redux/vaccination/vaccination.actions';
import {TabHeading} from 'native-base';
import inputStates from './states';
import inputDistricts from './district';
import inputSessions from './sessions';

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
} from './Appointments.styles';

const Appointments = ({navigation, getVaccinationCentersByPincode}) => {
  const theme = useTheme();
  const [selectedState, setSelectedState] = React.useState('Select State');
  const [selectedDistrict, setSelectedDistrict] =
    React.useState('Select District');

  // TODO: Replace by API
  let states = [];
  inputStates.forEach(state => {
    states.push(state.state_name);
  });
  let districts = [];
  inputDistricts.forEach(district => {
    districts.push(district.district_name);
  });

  const getWeekFromStartDay = (start, noOfDay) => {
    var weekDays = [];
    var curr;
    for (let i = start + 1; i <= start + noOfDay; i++) {
      curr = new Date(); // get current date
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
      weekDays.push({
        label: new Date(day)
          .toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
          })
          .split(' ')
          .join('-'),
        date: day,
      });
    }
    return weekDays;
  };

  let data = getWeekFromStartDay(3, 7);
  console.log(data);

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
                        options: states,
                        title: 'Select State',
                      },
                      buttonIndex => {
                        setSelectedState(states[buttonIndex]);
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
              onPress={() => getVaccinationCentersByPincode()}
            />
          </InputView>
        </HeaderWrapper>
        <ListWrapper>
          <ListRow>
            <Listcolumn width="25%">
              <Text>Date</Text>
            </Listcolumn>
            <Listcolumn width="85%">
              <Text>Hospitals</Text>
            </Listcolumn>
          </ListRow>
          {inputSessions.length > 0 ? (
            inputSessions.map((item, index) => {
              return (
                <ListRow key={index}>
                  <Listcolumn width="25%">
                    <ListItemDateText key={index}>{item.date}</ListItemDateText>
                  </Listcolumn>
                  <Listcolumn width="85%">
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      scrollEventThrottle={300}
                      pagingEnabled
                      decelerationRate="fast">
                      {item.sessions.length > 0 ? (
                        item.sessions.map((session, index) => {
                          return (
                            <ListItemCard key={session.id}>
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
                  </Listcolumn>
                </ListRow>
              );
            })
          ) : (
            <Text />
          )}
        </ListWrapper>
      </Container>
    </Layout>
  );
};

export default connect(null, {getVaccinationCentersByPincode})(Appointments);

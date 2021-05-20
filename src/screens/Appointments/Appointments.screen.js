import React from 'react';
import {useTheme} from 'styled-components/native';
import {ActionSheet} from 'native-base';
import {TouchableOpacity, ScrollView} from 'react-native';
import {Layout} from '../../components/core/Layout/Layout.component';
import {
  Text,
  ActionSheetText,
} from '../../components/common/Typography/Text.component';
import {Button} from '../../components/common/Button/Button.component';
import {CovidInfoInput} from '../../components/common/Input/Input.component';
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
} from './Appointments.styles';

const Appointments = ({navigation}) => {
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
          <Button
            text="searh"
            color={theme.colors.text.primary}
            textTransform="capitalize"
          />
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
          <ListRow>
            <Listcolumn width="25%">
              {data.length > 0 ? (
                data.map((item, index) => {
                  return (
                    <ListRow>
                      <ListItemDateText key={index}>
                        {item.label}
                      </ListItemDateText>
                    </ListRow>
                  );
                })
              ) : (
                <Text />
              )}
            </Listcolumn>
            <Listcolumn width="85%">
              {inputSessions.length > 0 ? (
                inputSessions.map((item, index) => {
                  return (
                    <ListRow>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        pagingEnabled
                        decelerationRate="fast">
                        {inputSessions.length > 0 ? (
                          inputSessions.map((item, index) => {
                            return (
                              <ListItemCard key={index}>
                                <Text>{item.name}</Text>
                              </ListItemCard>
                            );
                          })
                        ) : (
                          <Text>No Data</Text>
                        )}
                      </ScrollView>
                    </ListRow>
                  );
                })
              ) : (
                <Text />
              )}
            </Listcolumn>
          </ListRow>
        </ListWrapper>
      </Container>
    </Layout>
  );
};

export default Appointments;

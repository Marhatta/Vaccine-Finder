import React from 'react';
import {useTheme} from 'styled-components/native';
import {ActionSheet} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Layout} from '../../components/core/Layout/Layout.component';
import {
  Text,
  ActionSheetText,
} from '../../components/common/Typography/Text.component';
import {CovidInfoInput} from '../../components/common/Input/Input.component';
import {TabHeading} from 'native-base';

import {Container, CustomTabs, CustomTab} from './Appointments.styles';

const Appointments = ({navigation}) => {
  var BUTTONS = [
    'All State',
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
  ];
  var DESTRUCTIVE_INDEX = 3;
  var CANCEL_INDEX = 4;
  const theme = useTheme();
  const [selectedState, setSelectedState] = React.useState('Select State');
  const [selectedDistrict, setSelectedDistrict] =
    React.useState('Select District');
  return (
    <Layout navigation={navigation}>
      <Container>
        <CustomTabs
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
              <TabHeading style={{backgroundColor: theme.colors.bg.secondary}}>
                <Text>District</Text>
              </TabHeading>
            }>
            <TouchableOpacity>
              <ActionSheetText
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: 'Select State',
                    },
                    buttonIndex => {
                      setSelectedState(BUTTONS[buttonIndex]);
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
                      options: BUTTONS,
                      cancelButtonIndex: CANCEL_INDEX,
                      destructiveButtonIndex: DESTRUCTIVE_INDEX,
                      title: 'Select District',
                    },
                    buttonIndex => {
                      setSelectedDistrict(BUTTONS[buttonIndex]);
                    },
                  )
                }>
                {selectedDistrict}
              </ActionSheetText>
            </TouchableOpacity>
          </CustomTab>
        </CustomTabs>
      </Container>
    </Layout>
  );
};

export default Appointments;

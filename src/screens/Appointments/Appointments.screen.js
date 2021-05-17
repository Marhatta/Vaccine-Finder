import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {CustomInput} from '../../components//common/Input/Input.component';
import {TabHeading} from 'native-base';
import {Container, CustomTabs, CustomTab} from './Appointments.styles';

const Appointments = ({navigation}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      <Container>
        <CustomTabs
          tabBarUnderlineStyle={{
            backgroundColor: theme.colors.ui.primary,
          }}>
          <CustomTab
            heading={
              <TabHeading style={{backgroundColor: theme.colors.ui.secondary}}>
                <Text>Pincode</Text>
              </TabHeading>
            }>
            <CustomInput
              placeholder="Enter your pincode"
              keyboardType="numeric"
              minLength={6}
              maxLength={6}
            />
          </CustomTab>
          <CustomTab
            heading={
              <TabHeading style={{backgroundColor: theme.colors.ui.secondary}}>
                <Text>District</Text>
              </TabHeading>
            }>
            <Text>District</Text>
          </CustomTab>
        </CustomTabs>
      </Container>
    </Layout>
  );
};

export default Appointments;

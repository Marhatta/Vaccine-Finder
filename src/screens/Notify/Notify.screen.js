import React from 'react';
import {Item, Input, Body} from 'native-base';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import {Button} from '../../components/common/Button/Button.component';
import {Container, ConsentContainer, ConsentCheckBox} from './Notify.styles';
import {useTheme} from 'styled-components/native';

const Notify = ({navigation, route}) => {
  const theme = useTheme();
  console.log(route.params);
  return (
    <Layout>
      <Container>
        <Text>
          Enter your email here, we will notify you once the slots are available
        </Text>
        <Item>
          <NativeBaseIcon
            name="email"
            type="Fontisto"
            color={theme.colors.text.secondary}
          />
          <Input
            placeholder="Enter your email"
            keyboardType="email-address"
            style={{color: theme.colors.text.secondary}}
          />
        </Item>
        <ConsentContainer>
          <ConsentCheckBox checked={true} />
          <Body>
            <Text variant="faded">
              Yes, I would like to receive notifications on the given email
              address
            </Text>
          </Body>
        </ConsentContainer>
        <Button title="Notify Me" full />
      </Container>
    </Layout>
  );
};

export default Notify;

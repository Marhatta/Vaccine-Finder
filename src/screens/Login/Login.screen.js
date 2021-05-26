import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  HeaderView,
  HeaderTitle,
  HeaderDescription,
  ContentContainer,
  FormContainer,
  CustomLabel,
  CustomInput,
} from './Login.styles';
import {
  Container,
  Header,
  View,
  Form,
  Item,
  Input,
  Label,
  Body,
  Title,
  Text,
} from 'native-base';
import {Button} from '../../components/common/Button/Button.component';
import {useTheme} from 'styled-components/native';
import {create} from 'eslint/lib/rules/*';

const Login = ({navigation}) => {
  const [shouldHide, setShouldHide] = useState(true);
  const theme = useTheme();
  return (
    <Container>
      <Header transparent>
        <Body>
          <Title>{'App Title'}</Title>
        </Body>
      </Header>
      <ContentContainer>
        <HeaderView>
          <HeaderTitle>{'Welcome!'}</HeaderTitle>
          <HeaderDescription>{'Vaccinator & Verifier'}</HeaderDescription>
        </HeaderView>
        <FormContainer>
          <Form>
            <Item floatingLabel>
              <Label style={styles.white}>Mobile Number</Label>
              <Input style={styles.white} />
            </Item>
            {shouldHide ? (
              <Item floatingLabel>
                <Label style={styles.white}>Password</Label>
                <Input style={styles.white} />
              </Item>
            ) : null}
          </Form>
          <Button
            title={'LOGIN'}
            full
            onPress={() => navigation.navigate('Home')}
          />
          <View style={styles.view}>
            <Text style={styles.white}>OR</Text>
          </View>
          <Button
            title={'LOGIN USING OTP'}
            full
            onPress={() => setShouldHide(!shouldHide)}
          />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  white: {
    color: 'white',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;

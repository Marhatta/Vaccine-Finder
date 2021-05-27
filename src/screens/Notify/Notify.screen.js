import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Item, Input, Body, Spinner, Radio} from 'native-base';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Layout} from '../../components/core/Layout/Layout.component';
import {Text} from '../../components/common/Typography/Text.component';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import {Button} from '../../components/common/Button/Button.component';
import {Spacer} from '../../components/common/Spacer/Spacer.component';
import {
  Container,
  ConsentContainer,
  ConsentCheckBox,
  ResponseMessage,
  ResponseMessageContainer,
  DoseContainer,
  Dose,
} from './Notify.styles';
import {useTheme} from 'styled-components/native';
import {
  clearResponseMessage,
  notifyMe,
} from '../../redux/vaccination/vaccination.actions';
import {showToast} from '../../components/utils/toast';
import {selectNotify} from '../../redux/vaccination/vaccination.selectors';

const Notify = ({
  navigation,
  route,
  notifyMe,
  notifyState,
  clearResponseMessage,
}) => {
  const [consentGiven, setConsentGiven] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedDose, setselectedDose] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    if (dose === '0') {
      setselectedDose(0);
    } else if (dose === '1') {
      setselectedDose(1);
    }
    // returned function will be called on component unmount
    return () => {
      clearResponseMessage();
    };
  }, []);

  const {center_id, pincode, age, dose} = route.params;

  const validateEmail = emailAddress => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailAddress).toLowerCase());
  };

  const notify = data => {
    const isEmailValid = validateEmail(data.email);
    //check if the email entered is a valid email
    if (!isEmailValid) {
      showToast('Please enter a valid email address');
      return;
    }
    //check if the consent for the email notification is given
    if (!consentGiven) {
      showToast('Please accept the email notification consent');
      return;
    }
    //if the dose is selected
    if (!selectedDose) {
      showToast('Please select a dose');
      return;
    }
    //If email is valid, consent is given and the dose is selected
    notifyMe(data);
  };
  return (
    <Layout>
      <Container>
        <Text variant="caption">
          Enter your email address below, we will notify you once the slots are
          available
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
            value={email}
            onChangeText={newValue => setEmail(newValue)}
          />
        </Item>
        {/* if both the doses are available */}
        {dose === '00' && (
          <>
            <Spacer size="large" />
            <DoseContainer>
              <Text variant="faded">Notify me for </Text>
              <Dose>
                <Radio
                  selected={selectedDose === 1}
                  onPress={() => setselectedDose(1)}
                  color={theme.colors.ui.primary}
                  selectedColor={theme.colors.ui.primary}
                />
                <Text variant="faded">Dose 1</Text>
              </Dose>
              <Dose>
                <Radio
                  selected={selectedDose === 2}
                  onPress={() => setselectedDose(2)}
                  color={theme.colors.ui.primary}
                  selectedColor={theme.colors.ui.primary}
                />
                <Text variant="faded">Dose 2</Text>
              </Dose>
            </DoseContainer>
          </>
        )}
        <ConsentContainer>
          <ConsentCheckBox
            checked={consentGiven}
            color={theme.colors.ui.primary}
            onPress={() => setConsentGiven(!consentGiven)}
          />
          <Body>
            <Text variant="faded">
              Yes, I would like to receive notifications on the given email
              address
            </Text>
          </Body>
        </ConsentContainer>
        <Button
          title="Notify Me"
          full
          onPress={() =>
            notify({
              email,
              center_id,
              pincode,
              age,
              dose: selectedDose,
            })
          }
          disabled={notifyState.loading}
        />

        {notifyState.loading ? (
          <Spinner />
        ) : (
          notifyState?.notifyMeResponse?.message && (
            <ResponseMessageContainer>
              <NativeBaseIcon
                name="checkcircleo"
                type="AntDesign"
                color={theme.colors.ui.primary}
                fontSize={wp('20%')}
              />
              <ResponseMessage>
                {notifyState?.notifyMeResponse?.message}
              </ResponseMessage>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>
                <Text variant="caption" color={theme.colors.ui.primary}>
                  Continue
                </Text>
              </TouchableOpacity>
            </ResponseMessageContainer>
          )
        )}
      </Container>
      <Text variant="faded">
        Please note: If you get a notification from us about the slot
        availablity, please check the Cowin App to book the slots instantly, as
        the slot availability on Cowin changes rapidly.
      </Text>
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  notifyState: selectNotify,
});
export default connect(mapStateToProps, {notifyMe, clearResponseMessage})(
  Notify,
);

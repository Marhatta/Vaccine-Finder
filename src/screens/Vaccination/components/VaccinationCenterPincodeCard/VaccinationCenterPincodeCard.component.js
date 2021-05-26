import React, {useState} from 'react';
import {ScrollView, View, LayoutAnimation, Linking} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from '../../../../components/common/Typography/Text.component';
import {Spacer} from '../../../../components/common/Spacer/Spacer.component';
import {BorderedButton} from '../../../../components/common/Button/Button.component';
import {useTheme} from 'styled-components/native';
import {
  VaccineCard,
  DateContainer,
  CapacityContainer,
  Booked,
  NotifyMe,
  Available,
} from './VaccinationCenterPincodeCard.styles';

export const VaccinationCenterPincodeCard = ({
  vaccinationCenter,
  onPressNotifyMe,
}) => {
  const theme = useTheme();
  const [activeSession, setActiveSession] = useState(
    vaccinationCenter.sessions[0],
  );
  const isBooked =
    activeSession.available_capacity_dose1 === 0 &&
    activeSession.available_capacity_dose2 === 0;
  return (
    <VaccineCard>
      <Text variant="label">{vaccinationCenter.name}</Text>
      <Text variant="faded">{vaccinationCenter.address}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {vaccinationCenter.sessions &&
          vaccinationCenter.sessions.map(session => {
            const active = activeSession.session_id === session.session_id;
            return (
              <DateContainer
                activeOpacity={0.7}
                active={active}
                key={session.session_id}
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setActiveSession(session);
                }}>
                <Text
                  color={active ? 'white' : theme.colors.text.primary}
                  fontSize={active ? `${hp('2%')}px` : `${hp('1.8%')}px`}>
                  {session.date}
                </Text>
              </DateContainer>
            );
          })}
      </ScrollView>
      <View>
        <CapacityContainer>
          <Text>Capacity</Text>
          <Spacer position="left" size="medium" />
          {isBooked ? (
            <Booked>
              <Text color={'white'} fontSize={`${hp('1.3%')}px`}>
                Booked
              </Text>
            </Booked>
          ) : (
            <Available>
              <Text color={'white'} fontSize={`${hp('1.3%')}px`}>
                Available
              </Text>
            </Available>
          )}
        </CapacityContainer>
        <CapacityContainer>
          <Text variant="faded">
            Dose1: {activeSession.available_capacity_dose1}
          </Text>
          <Spacer position="left" size="medium" />
          <Text variant="faded">
            Dose2: {activeSession.available_capacity_dose2}
          </Text>
        </CapacityContainer>
        <Text>Age: {activeSession.min_age_limit}+</Text>
        <Text>Vaccine: {activeSession.vaccine}</Text>
      </View>
      {isBooked ? (
        <NotifyMe
          activeOpacity={0.7}
          onPress={() =>
            onPressNotifyMe(
              vaccinationCenter.center_id,
              vaccinationCenter.pincode,
              activeSession.min_age_limit,
            )
          }>
          <Text variant="faded" color={'white'}>
            Notify me once the slots are available
          </Text>
        </NotifyMe>
      ) : (
        <BorderedButton
          title="Book on cowin"
          full
          onPress={() =>
            Linking.openURL('https://selfregistration.cowin.gov.in/')
          }
        />
      )}
    </VaccineCard>
  );
};

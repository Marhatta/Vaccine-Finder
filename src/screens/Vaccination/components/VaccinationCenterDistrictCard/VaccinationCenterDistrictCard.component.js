import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from '../../../../components/common/Typography/Text.component';
import {Spacer} from '../../../../components/common/Spacer/Spacer.component';
import {BorderedButton} from '../../../../components/common/Button/Button.component';
import {
  VaccineCard,
  CapacityContainer,
  Booked,
  NotifyMe,
  Available,
} from './VaccinationCenterDistrictCard.styles';
import {Linking} from 'react-native';

export const VaccinationCenterDistrictCard = ({
  vaccinationCenter,
  onPressNotifyMe,
}) => {
  const isBooked =
    vaccinationCenter.available_capacity_dose1 === 0 &&
    vaccinationCenter.available_capacity_dose2 === 0;
  return (
    <VaccineCard>
      <Text variant="label">{vaccinationCenter.name}</Text>
      <Text variant="faded">{vaccinationCenter.address}</Text>

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
          Dose1: {vaccinationCenter.available_capacity_dose1}
        </Text>
        <Spacer position="left" size="medium" />
        <Text variant="faded">
          Dose2: {vaccinationCenter.available_capacity_dose2}
        </Text>
      </CapacityContainer>
      <Text>Age: {vaccinationCenter.min_age_limit}+</Text>
      <Text>Vaccine: {vaccinationCenter.vaccine}</Text>

      {isBooked ? (
        <NotifyMe
          activeOpacity={0.7}
          onPress={() =>
            onPressNotifyMe(
              vaccinationCenter.center_id,
              vaccinationCenter.pincode,
              vaccinationCenter.min_age_limit,
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

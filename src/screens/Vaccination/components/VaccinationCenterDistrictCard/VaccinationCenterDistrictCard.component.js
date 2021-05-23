import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from '../../../../components/common/Typography/Text.component';
import {Spacer} from '../../../../components/common/Spacer/Spacer.component';
import {
  VaccineCard,
  CapacityContainer,
  Booked,
  NotifyMe,
} from './VaccinationCenterDistrictCard.styles';

export const VaccinationCenterDistrictCard = ({vaccinationCenter}) => {
  const isBooked =
    vaccinationCenter.available_capacity_dose1 === 0 &&
    vaccinationCenter.available_capacity_dose2 === 0;
  return (
    <VaccineCard>
      <Text variant="label">{vaccinationCenter.name}</Text>
      <Text variant="faded">{vaccinationCenter.address}</Text>

      <Text fontSize={`${hp('2%')}px`}>{vaccinationCenter.date}</Text>

      <CapacityContainer>
        <Text>Capacity</Text>
        <Spacer position="left" size="medium" />
        {isBooked && (
          <Booked>
            <Text color={'white'} fontSize={`${hp('1.3%')}px`}>
              Booked
            </Text>
          </Booked>
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

      {isBooked && (
        <NotifyMe activeOpacity={0.7}>
          <Text variant="faded" color={'white'}>
            Notify me once the slots are available
          </Text>
        </NotifyMe>
      )}
    </VaccineCard>
  );
};

import React, {useState} from 'react';
import {TouchableOpacity, ScrollView, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'native-base';
import {Text} from '../../../components/common/Typography/Text.component';
import {useTheme} from 'styled-components/native';
import {VaccineCard} from './VaccinationCenterCard.styles';

export const VaccinationCenterCard = ({vacinationCenter}) => {
  const theme = useTheme();
  const [activeSession, setActiveSession] = useState(
    vacinationCenter.sessions[0],
  );
  return (
    <VaccineCard>
      <Text variant="label">{vacinationCenter.name}</Text>
      <Text fontSize={`${hp('1.8%')}px`} color={theme.colors.text.secondary}>
        {vacinationCenter.address}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {vacinationCenter.sessions.map(session => {
          return (
            <TouchableOpacity
              key={session.session_id}
              onPress={() => setActiveSession(session)}>
              <Text>{session.date}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View>
        <Text>Capacity</Text>
        <View>
          <Text>Dose 1: {activeSession.available_capacity_dose1}</Text>
          <Text>Dose 2: {activeSession.available_capacity_dose2}</Text>
          <Text>Min Age Limit: {activeSession.min_age_limit}</Text>
          <Text>Vaccine: {activeSession.vaccine}</Text>
        </View>
      </View>
    </VaccineCard>
  );
};

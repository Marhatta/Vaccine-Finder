import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Text} from '../Typography/Text.component';
import {FallbackContainer} from './Fallback.styles';
import {NativeBaseIcon} from '../Icon/Icon.component';
import {useTheme} from 'styled-components/native';

export const Fallback = ({message}) => {
  const theme = useTheme();
  return (
    <FallbackContainer>
      <NativeBaseIcon
        name="location-outline"
        type="Ionicons"
        color={theme.colors.text.secondary}
        fontSize={hp('22%')}
      />
      <Text color={theme.colors.text.secondary}>{message}</Text>
    </FallbackContainer>
  );
};

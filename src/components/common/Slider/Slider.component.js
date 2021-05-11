import React, {useEffect} from 'react';
import {useTheme} from 'styled-components/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MarkerContainer, MaxValue, MinValue} from './Slider.styles';
import {Icon} from '../Icon/Icon.component';
import {Text} from '../../common/Typography/Text.component';
import {strings} from '../../../infrastructure/lang';

export const MultiMarkerSlider = ({
  sliderMinValue,
  sliderMaxValue,
  setSliderMinValue,
  setSliderMaxValue,
  min,
  max,
  ...props
}) => {
  const theme = useTheme();

  const CustomMarker = ({value, setValue, unit}) => {
    useEffect(() => {
      setValue(value);
    }, [value, setValue]);

    return (
      <MarkerContainer>
        <Icon
          source={require('../../../assets/icons/switch.png')}
          height={`${hp('3.4%')}px`}
          width={`${hp('3.4%')}px`}
        />
        <Text color={theme.colors.text.secondary} fontSize={`${hp('1.5%')}px`}>
          {unit}
          {value}
        </Text>
      </MarkerContainer>
    );
  };
  return (
    <>
      <MultiSlider
        step={100}
        showSteps={true}
        selectedStyle={{
          height: hp('.7%'),
          backgroundColor: theme.colors.ui.primary,
        }}
        unselectedStyle={{
          height: hp('.7%'),
        }}
        min={min || 100}
        max={max || 5000}
        values={[1000, 2300]}
        isMarkersSeparated={true}
        customMarkerLeft={e => {
          return (
            <CustomMarker
              value={e.currentValue}
              setValue={value => setSliderMinValue(value)}
              unit={strings.currency}
            />
          );
        }}
        customMarkerRight={e => {
          return (
            <CustomMarker
              value={e.currentValue}
              setValue={value => setSliderMaxValue(value)}
              unit={strings.currency}
            />
          );
        }}
        {...props}
      />

      {sliderMinValue > 700 && (
        <MinValue>
          <Text fontSize={`${hp('1.5%')}px`} color={theme.colors.text.disabled}>
            {strings.currency}
            {min}
          </Text>
        </MinValue>
      )}
      {sliderMaxValue < 4200 && (
        <MaxValue>
          <Text fontSize={`${hp('1.5%')}px`} color={theme.colors.text.disabled}>
            {strings.currency}
            {max}
          </Text>
        </MaxValue>
      )}
    </>
  );
};

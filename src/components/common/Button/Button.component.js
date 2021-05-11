import React from 'react';
import {
  PinpoinxButton,
  PinpoinxBorderedButton,
  PinpoinxIconButton,
  ButtonText,
  Row,
} from './Button.styles';
import {Icon} from '../Icon/Icon.component';
import {Spacer} from '../Spacer/Spacer.component';

// These buttons can take all the props of a native-base button
export const Button = ({title, textTransform, color, ...props}) => {
  return (
    <PinpoinxButton color={color} {...props} title={title}>
      <ButtonText
        color="#FFFFFF"
        variant="caption"
        textTransform={textTransform}>
        {title}
      </ButtonText>
    </PinpoinxButton>
  );
};

export const BorderedButton = ({title, textTransform, color, ...props}) => {
  return (
    <PinpoinxBorderedButton color={color} bordered {...props}>
      <ButtonText color={color} variant="caption" textTransform={textTransform}>
        {title}
      </ButtonText>
    </PinpoinxBorderedButton>
  );
};

export const IconButton = ({
  title,
  textTransform,
  color,
  leftIconSource,
  rightIconSource,
  ...props
}) => {
  return (
    <PinpoinxIconButton transparent color={color} {...props}>
      <Row>
        <Icon source={leftIconSource} />
        <Spacer position="left" size="medium">
          <ButtonText
            color={color}
            variant="caption"
            textTransform={textTransform}>
            {title}
          </ButtonText>
        </Spacer>
      </Row>
      <Icon source={rightIconSource} />
    </PinpoinxIconButton>
  );
};

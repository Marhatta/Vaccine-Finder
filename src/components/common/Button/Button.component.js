import React from 'react';
import {
  CustomButton,
  CustomBorderedButton,
  CustomIconButton,
  ButtonText,
  Row,
  LinkButtonContainer,
} from './Button.styles';
import {Icon} from '../Icon/Icon.component';
import {Spacer} from '../Spacer/Spacer.component';
import {TouchableOpacity} from 'react-native';

// These buttons can take all the props of a native-base button
export const Button = ({title, textTransform, color, ...props}) => {
  return (
    <CustomButton color={color} {...props} title={title}>
      <ButtonText
        color="#FFFFFF"
        variant="caption"
        textTransform={textTransform ? textTransform : 'capitalize'}>
        {title}
      </ButtonText>
    </CustomButton>
  );
};

export const BorderedButton = ({title, textTransform, color, ...props}) => {
  return (
    <CustomBorderedButton color={color} bordered {...props}>
      <ButtonText
        color={color}
        variant="caption"
        textTransform={textTransform ? textTransform : 'capitalize'}>
        {title}
      </ButtonText>
    </CustomBorderedButton>
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
    <CustomIconButton transparent color={color} {...props}>
      <Row>
        <Icon source={leftIconSource} />
        <Spacer position="left" size="medium">
          <ButtonText
            color={color}
            variant="caption"
            textTransform={textTransform ? textTransform : 'capitalize'}>
            {title}
          </ButtonText>
        </Spacer>
      </Row>
      <Icon source={rightIconSource} />
    </CustomIconButton>
  );
};

export const LinkButton = ({title, textTransform, color, ...props}) => {
  return (
    <LinkButtonContainer activeOpacity={0.7} {...props}>
      <ButtonText
        color={color}
        variant="caption"
        textTransform={textTransform ? textTransform : 'capitalize'}>
        {title}
      </ButtonText>
    </LinkButtonContainer>
  );
};

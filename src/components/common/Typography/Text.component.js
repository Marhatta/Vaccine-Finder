import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const defaultTextStyles = theme => `
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
`;

const caption = theme => `
    font-size: ${theme.fontSizes.caption};
    font-family: ${theme.fonts.bold};
`;

const label = theme => `
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.title};
`;

const variants = {
  body,
  label,
  caption,
};

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
  font-size:${({fontSize, theme}) =>
    fontSize ? fontSize : theme.fontSizes.body}
  color:${({color, theme}) => (color ? color : theme.colors.text.primary)}
`;

Text.defaultProps = {
  variant: 'body',
};

export const ActionSheetText = styled.Text`
  color:${({color, theme}) => (color ? color : theme.colors.text.primary)}
  padding: 10px;
  margin: 5px;
  border-bottom-width: 2px;
  border-bottom-color: ${props =>
    props.color ? props.color : props.theme.colors.ui.primary};
  width: ${wp('43%')}px;
`;

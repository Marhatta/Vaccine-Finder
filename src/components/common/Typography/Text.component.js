import styled from 'styled-components/native';

const defaultTextStyles = theme => `
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = theme => `
    font-size: ${theme.fontSizes.body};
    color: ${theme.colors.text.primary};
`;

const caption = theme => `
    font-size: ${theme.fontSizes.caption};
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.primary};
`;

const label = theme => `
    font-family: ${theme.fonts.medium};
    font-size: ${theme.fontSizes.title};
    color: ${theme.colors.text.primary};
`;

const faded = theme => `
    font-family: ${theme.fonts.regular};
    font-size: ${theme.fontSizes.faded};
    color: ${theme.colors.text.secondary};
`;

const variants = {
  body,
  label,
  caption,
  faded,
};

export const Text = styled.Text`
  ${({theme}) => defaultTextStyles(theme)}
  ${({variant, theme}) => variants[variant](theme)}
  ${({fontSize}) => fontSize && `font-size:${fontSize}`}
  ${({color}) => color && `color:${color}`}
`;

Text.defaultProps = {
  variant: 'body',
};

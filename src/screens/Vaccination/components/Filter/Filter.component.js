import React from 'react';
import {useTheme} from 'styled-components/native';
import {Text} from '../../../../components/common/Typography/Text.component';
import {TouchableFilter} from './Filter.style';

export const Filter = ({filter, activeFilters, ...props}) => {
  const theme = useTheme();
  let filterIndex = activeFilters.findIndex(
    currentFilter => currentFilter.id === filter.id,
  );
  const isActive = filterIndex > -1 ? true : false;
  return (
    <TouchableFilter activeOpacity={0.7} isActive={isActive} {...props}>
      <Text color={isActive ? 'white' : theme.colors.text.primary}>
        {filter.filterName}
      </Text>
    </TouchableFilter>
  );
};

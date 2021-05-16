import React from 'react';
import * as _ from 'lodash';
import {
  CustomFlatList,
  FlatListRow,
  FirstColumnText,
  OtherColumnText,
  FlatListTableHeader,
  ColumnHeaderTouchableOpacity,
  FlatListHeader,
  DirectionIcon,
} from './FlatList.styles';

export const FlatList = ({columns, data}) => {
  let direction = 'asc';
  let selectedColumn = '';
  const sortTable = column => {
    const newDirection = direction === 'desc' ? 'asc' : 'desc';
    const sortedData = _.orderBy(data, [column], [newDirection]);
    direction = newDirection;
    selectedColumn = column;
    // setPets(sortedData);
  };

  const tableHeader = () => (
    <FlatListTableHeader>
      {columns.map((column, index) => {
        return (
          <ColumnHeaderTouchableOpacity
            key={index}
            onPress={() => sortTable(column)}>
            <FlatListHeader>
              {column + ' '}
              {selectedColumn === column && (
                <DirectionIcon
                  name={direction === 'desc' ? 'arrow-down' : 'arrow-up'}
                />
              )}
            </FlatListHeader>
          </ColumnHeaderTouchableOpacity>
        );
      })}
    </FlatListTableHeader>
  );

  return (
    <CustomFlatList
      data={data}
      keyExtractor={(item, index) => index + ''}
      ListHeaderComponent={tableHeader}
      stickyHeaderIndices={[0]}
      renderItem={({item, index}) => {
        return (
          <FlatListRow>
            <FirstColumnText>{item.Name}</FirstColumnText>
            <OtherColumnText>{item.Gender}</OtherColumnText>
            <OtherColumnText>{item.Breed}</OtherColumnText>
            <OtherColumnText>{item.Weight}</OtherColumnText>
            <OtherColumnText>{item.Age}</OtherColumnText>
          </FlatListRow>
        );
      }}
    />
  );
};

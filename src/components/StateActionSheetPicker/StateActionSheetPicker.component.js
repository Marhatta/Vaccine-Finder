import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ActionSheet} from 'native-base';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {Text} from '../../components/common/Typography/Text.component';
import {StateContainer} from './StateActionSheetPicker.styles';
import {selectStates} from '../../redux/stats/stats.selectors';
import {
  getCowinPublicReport,
  setSelectedState,
} from '../../redux/stats/stats.actions';
import {NativeBaseIcon} from '../common/Icon/Icon.component';
import {useTheme} from 'styled-components/native';

const StateActionSheetPicker = ({
  states,
  getCowinPublicReport,
  setSelectedState,
}) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        ActionSheet.show(
          {
            options: states.stateList.map(state => state.state_name),
            cancelButtonIndex: states.stateList.length - 1,
            title: 'Select State',
          },
          buttonIndex => {
            let pressedStateName = states.stateList[buttonIndex].state_name;
            //If cancel button or user pressed the state which is already selected, return
            if (
              buttonIndex === states.stateList.length - 1 ||
              pressedStateName === states.selectedState
            ) {
              return;
            }
            getCowinPublicReport(states.stateList[buttonIndex].state_id);
            setSelectedState(pressedStateName);
          },
        )
      }>
      <StateContainer>
        <Text
          color={theme.colors.text.secondary}
          fontSize={`${hp('1.8%')}px`}
          variant="caption">
          {states.selectedState ? states.selectedState : 'Choose State'}
        </Text>
        <NativeBaseIcon
          style={{fontSize: hp('2.8%')}}
          name="chevron-down"
          type="Ionicons"
          color={theme.colors.text.secondary}
        />
      </StateContainer>
    </TouchableOpacity>
  );
};

const mapStateToProps = createStructuredSelector({
  states: selectStates,
});

export default connect(mapStateToProps, {
  getCowinPublicReport,
  setSelectedState,
})(StateActionSheetPicker);

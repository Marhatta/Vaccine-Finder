import React from 'react';
import {Alert} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {
  LineChart,
  PieChart,
} from '../../components/common/Chart/Chart.component';
import StateActionSheetPicker from '../../components/StateActionSheetPicker/StateActionSheetPicker.component';
import {
  StatsCard,
  Container,
  CardCustomColumn,
  ChartContainer,
  VaccinationByCityUTWrapper,
  VaccinationByCityUTContainer,
  VaccinationByCityUTContainerStats,
  AlertInfo,
  AlertInfoRow,
} from './Stats.styles';
import {
  selectCovid19IndiaReport,
  selectCowinReport,
  selectStates,
} from '../../redux/stats/stats.selectors';
import {getCowinPublicReport} from '../../redux/stats/stats.actions';

const Stats = ({navigation, states, cowinReport, covid19IndiaReport}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      {cowinReport.loading || covid19IndiaReport.loading ? (
        <Spinner />
      ) : (
        <Container showsVerticalScrollIndicator={false}>
          <StateActionSheetPicker />
          <StatsCard>
            <CardCustomColumn width="15%">
              <NativeBaseIcon
                style={{fontSize: hp('5%')}}
                name="injection-syringe"
                type="Fontisto"
                color={theme.colors.text.secondary}
              />
            </CardCustomColumn>
            <CardCustomColumn width="40%">
              <Text
                fontSize={`${hp('2%')}px`}
                color={theme.colors.text.secondary}>
                Total Vaccination Doses
              </Text>
              <Text variant="caption">
                {cowinReport.report?.topBlock.vaccination.total_doses.toLocaleString()}
              </Text>
            </CardCustomColumn>
            <CardCustomColumn width="35%">
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Dose 1
              </Text>
              <Text variant="caption">
                {cowinReport.report.topBlock.vaccination.tot_dose_1.toLocaleString()}
              </Text>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Dose 2
              </Text>
              <Text variant="caption">
                {cowinReport.report.topBlock.vaccination.tot_dose_2.toLocaleString()}
              </Text>
            </CardCustomColumn>
          </StatsCard>

          <ChartContainer>
            <AlertInfoRow>
              <Text
                fontSize={`${hp('2%')}px`}
                color={theme.colors.text.secondary}>
                AEFI Reported (last 7 days)
              </Text>
              <AlertInfo
                onPress={() => {
                  Alert.alert('', 'Adverse Event Following Immunization', [
                    {text: 'OK'},
                  ]);
                }}>
                <NativeBaseIcon
                  style={{fontSize: hp('2.2%')}}
                  name="infocirlceo"
                  type="AntDesign"
                  color={theme.colors.text.secondary}
                />
              </AlertInfo>
            </AlertInfoRow>
            <Text
              fontSize={`${hp('1.8%')}px`}
              color={theme.colors.text.secondary}>
              Overall: {cowinReport.report.aefiPercentage}%
            </Text>
            <LineChart
              height={hp('35%')}
              yAxisSuffix=""
              data={{
                labels: cowinReport.report.last30DaysAefi
                  .slice(23)
                  .map(aefi => {
                    let formattedDate = new Date(
                      aefi.vaccine_date,
                    ).toDateString();
                    let splittedDate = formattedDate.split(' ');
                    return `${splittedDate[1]} ${splittedDate[2]}`;
                  }),
                datasets: [
                  {
                    data: cowinReport.report.last30DaysAefi
                      .slice(23)
                      .map(aefi => aefi.aefi),
                  },
                ],
              }}
            />
          </ChartContainer>

          <ChartContainer>
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Vaccination by Age
            </Text>
            <PieChart
              data={[
                {
                  name: ', Above 60',
                  population: cowinReport.report.vaccinationByAge.above_60,
                  color: '#e84545',
                  legendFontColor: theme.colors.text.secondary,
                  legendFontSize: wp('3%'),
                  legendFontFamily: 'Poppins-Regular',
                },
                {
                  name: ', 18-45',
                  population: cowinReport.report.vaccinationByAge.vac_18_45,
                  color: '#233e8b',
                  legendFontColor: theme.colors.text.secondary,
                  legendFontSize: wp('3%'),
                  legendFontFamily: 'Poppins-Regular',
                },
                {
                  name: ', 45-60',
                  population: cowinReport.report.vaccinationByAge.vac_45_60,
                  color: '#94d0cc',
                  legendFontColor: theme.colors.text.secondary,
                  legendFontSize: wp('3%'),
                  legendFontFamily: 'Poppins-Regular',
                },
              ]}
            />
          </ChartContainer>

          <Text fontSize={`${hp('2%')}px`} color={theme.colors.text.secondary}>
            Vaccination by{' '}
            {states.selectedState.toLowerCase() === 'india'
              ? 'State/UT'
              : 'District'}
          </Text>
          <VaccinationByCityUTWrapper>
            <VaccinationByCityUTContainer>
              <Text variant="label">
                {states.selectedState.toLowerCase() === 'india'
                  ? 'State/UT'
                  : 'District'}
              </Text>
              <VaccinationByCityUTContainerStats>
                <Text variant="label">Today</Text>
                <Text variant="label">Total</Text>
              </VaccinationByCityUTContainerStats>
            </VaccinationByCityUTContainer>
            {cowinReport.report.getBeneficiariesGroupBy.map(beneficiary => {
              return (
                <VaccinationByCityUTContainer key={beneficiary.id}>
                  <Text
                    fontSize={`${hp('1.8%')}px`}
                    color={theme.colors.text.secondary}>
                    {beneficiary.title}
                  </Text>
                  <VaccinationByCityUTContainerStats>
                    <Text
                      fontSize={`${hp('1.8%')}px`}
                      color={theme.colors.text.secondary}>
                      {beneficiary.today.toLocaleString()}
                    </Text>
                    <Text
                      fontSize={`${hp('1.8%')}px`}
                      color={theme.colors.text.secondary}>
                      {beneficiary.total.toLocaleString()}
                    </Text>
                  </VaccinationByCityUTContainerStats>
                </VaccinationByCityUTContainer>
              );
            })}
          </VaccinationByCityUTWrapper>
        </Container>
      )}
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  cowinReport: selectCowinReport,
  covid19IndiaReport: selectCovid19IndiaReport,
  states: selectStates,
});

export default connect(mapStateToProps, {getCowinPublicReport})(Stats);

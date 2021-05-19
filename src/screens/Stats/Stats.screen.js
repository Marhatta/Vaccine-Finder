import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {
  LineChart,
  PieChart,
} from '../../components/common/Chart/Chart.component';
import {
  StatsCard,
  Container,
  CardCustomColumn,
  ChartContainer,
  VaccinationByCityUTWrapper,
  VaccinationByCityUTContainer,
  VaccinationByCityUTContainerStats,
} from './Stats.styles';
import {selectCowinReport} from '../../redux/stats/stats.selectors';

const Stats = ({navigation, cowinReport}) => {
  const theme = useTheme();
  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <StatsCard>
          <CardCustomColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/syringe.png')}
              color={theme.colors.ui.primary}
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
          <Text fontSize={`${hp('2%')}px`} color={theme.colors.text.secondary}>
            AEFI Reported (last 7 days)
          </Text>
          <Text
            fontSize={`${hp('1.8%')}px`}
            color={theme.colors.text.secondary}>
            Overall: {cowinReport.report.aefiPercentage}%
          </Text>
          <LineChart
            height={hp('35%')}
            yAxisSuffix=""
            data={{
              labels: cowinReport.report.last30DaysAefi.slice(23).map(aefi => {
                let formattedDate = new Date(aefi.vaccine_date).toDateString();
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
          <Text fontSize={`${hp('2%')}px`} color={theme.colors.text.secondary}>
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
                name: ', 18-30',
                population: cowinReport.report.vaccinationByAge.vac_18_30,
                color: '#b6c9f0',
                legendFontColor: theme.colors.text.secondary,
                legendFontSize: wp('3%'),
                legendFontFamily: 'Poppins-Regular',
              },
              {
                name: ', 30-45',
                population: cowinReport.report.vaccinationByAge.vac_30_45,
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
          Vaccination by State/UT
        </Text>
        <VaccinationByCityUTWrapper>
          <VaccinationByCityUTContainer>
            <Text variant="label">State/UT</Text>
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
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  cowinReport: selectCowinReport,
});

export default connect(mapStateToProps, null)(Stats);

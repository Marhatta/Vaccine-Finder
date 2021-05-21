import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {NativeBaseIcon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {LineChart} from '../../components/common/Chart/Chart.component';
import {
  StatLineSkeleton,
  ChartSkeleton,
} from '../../components/common/Skeleton/Skeleton.component';
import StateActionSheetPicker from '../../components/StateActionSheetPicker/StateActionSheetPicker.component';
import {
  StatsCard,
  Container,
  StatsCardColumn,
  ChartContainer,
  ColorBox,
  ColorBoxContainer,
  CardCustomColumn,
  LastUpdated,
  Legend,
} from './Home.styles';
import {formatNumber} from '../../utils/numberFormatter';
import {
  getCowinPublicReport,
  getCovid19IndiaReport,
} from '../../redux/stats/stats.actions';
import {
  selectCovid19IndiaReport,
  selectCowinReport,
  selectStates,
} from '../../redux/stats/stats.selectors';

const Home = ({
  navigation,
  cowinReport,
  covid19IndiaReport,
  getCowinPublicReport,
  getCovid19IndiaReport,
  states,
}) => {
  useEffect(() => {
    getCowinPublicReport();
    getCovid19IndiaReport();
  }, []);

  const theme = useTheme();

  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <StatsCard>
          <StatsCardColumn>
            {covid19IndiaReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {covid19IndiaReport.report?.statewise[0].confirmed.toLocaleString()}
              </Text>
            )}
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Confirmed Cases
              </Text>
              <ColorBox color={'rgb(134, 65, 244)'} />
            </ColorBoxContainer>
          </StatsCardColumn>
          <StatsCardColumn>
            {covid19IndiaReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {covid19IndiaReport.report?.statewise[0].deaths.toLocaleString()}
              </Text>
            )}
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Deaths
              </Text>
              <ColorBox color={'#fada5e'} />
            </ColorBoxContainer>
          </StatsCardColumn>
          <StatsCardColumn>
            {covid19IndiaReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {' '}
                {covid19IndiaReport.report?.statewise[0].recovered.toLocaleString()}
              </Text>
            )}
            <ColorBoxContainer>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Recovered
              </Text>
              <ColorBox color={theme.colors.ui.primary} />
            </ColorBoxContainer>
          </StatsCardColumn>
        </StatsCard>

        {covid19IndiaReport.loading ? (
          <ChartSkeleton />
        ) : (
          <ChartContainer>
            <Legend>
              <Text
                fontSize={`${hp('2%')}px`}
                color={theme.colors.text.secondary}>
                Last 7 days trends
              </Text>
            </Legend>
            <LineChart
              height={hp('35%')}
              yAxisSuffix=""
              fromZero
              yLabelsOffset={3}
              formatYLabel={yValue => formatNumber(yValue)}
              data={{
                labels: covid19IndiaReport.casesTimeSeries
                  .slice(covid19IndiaReport.casesTimeSeries.length - 7)
                  .map(cases => {
                    let formattedDate = new Date(cases.date).toDateString();
                    let splittedDate = formattedDate.split(' ');
                    return `${splittedDate[1]} ${splittedDate[2]}`;
                  }),

                datasets: [
                  {
                    data: covid19IndiaReport.casesTimeSeries
                      .slice(covid19IndiaReport.casesTimeSeries.length - 7)
                      .map(cases => cases.dailyconfirmed),
                    strokeWidth: 3,
                    color: () => 'rgba(134, 65, 244)', // optional
                  },
                  {
                    data: covid19IndiaReport.casesTimeSeries
                      .slice(covid19IndiaReport.casesTimeSeries.length - 7)
                      .map(cases => cases.dailydeceased),
                    strokeWidth: 3,
                    color: () => '#fada5e', // optional
                  },
                  {
                    data: covid19IndiaReport.casesTimeSeries
                      .slice(covid19IndiaReport.casesTimeSeries.length - 7)
                      .map(cases => cases.dailyrecovered),
                    strokeWidth: 3,
                    color: () => theme.colors.ui.primary, // optional
                  },
                ],
              }}
            />
          </ChartContainer>
        )}

        <StateActionSheetPicker />
        <StatsCard>
          <CardCustomColumn width="15%">
            <NativeBaseIcon
              style={{fontSize: hp('5%')}}
              name="hospital-o"
              type="FontAwesome"
              color={theme.colors.text.secondary}
            />
          </CardCustomColumn>
          <CardCustomColumn width="40%">
            <Text
              fontSize={`${hp('2%')}px`}
              color={theme.colors.text.secondary}>
              Sites Conducting Vaccination
            </Text>
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {cowinReport.report?.topBlock.sites.total.toLocaleString()}
              </Text>
            )}
          </CardCustomColumn>
          <CardCustomColumn width="35%">
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Government
            </Text>
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {' '}
                {cowinReport.report?.topBlock.sites.govt.toLocaleString()}
              </Text>
            )}
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Private
            </Text>
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {' '}
                {cowinReport.report?.topBlock.sites.pvt.toLocaleString()}
              </Text>
            )}
          </CardCustomColumn>
        </StatsCard>

        {states.selectedState.toLowerCase() === 'india' && (
          <StatsCard>
            <CardCustomColumn width="15%">
              <NativeBaseIcon
                style={{fontSize: hp('5%')}}
                name="sticky-note-o"
                type="FontAwesome"
                color={theme.colors.text.secondary}
              />
            </CardCustomColumn>
            <CardCustomColumn width="40%">
              <Text
                fontSize={`${hp('2%')}px`}
                color={theme.colors.text.secondary}>
                Total Registration
              </Text>
              {cowinReport.loading ? (
                <StatLineSkeleton />
              ) : (
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.total?.toLocaleString()}
                </Text>
              )}
            </CardCustomColumn>
            <CardCustomColumn width="35%">
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Age 18-44
              </Text>
              {cowinReport.loading ? (
                <StatLineSkeleton />
              ) : (
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.cit_18_45?.toLocaleString()}
                </Text>
              )}
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Age 45+
              </Text>
              {cowinReport.loading ? (
                <StatLineSkeleton />
              ) : (
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.cit_45_above?.toLocaleString()}
                </Text>
              )}
            </CardCustomColumn>
          </StatsCard>
        )}

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
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {' '}
                {cowinReport.report?.topBlock.vaccination.total_doses.toLocaleString()}
              </Text>
            )}
          </CardCustomColumn>
          <CardCustomColumn width="35%">
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Covishield
            </Text>
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {cowinReport.report?.topBlock.vaccination.covishield.toLocaleString()}
              </Text>
            )}
            <Text
              fontSize={`${hp('1.5%')}px`}
              color={theme.colors.text.secondary}>
              Covaxin
            </Text>
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {cowinReport.report?.topBlock.vaccination.covaxin.toLocaleString()}
              </Text>
            )}
          </CardCustomColumn>
        </StatsCard>

        <LastUpdated>
          {cowinReport.loading ? (
            <StatLineSkeleton />
          ) : (
            <>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                Last Updated:{' '}
              </Text>
              <Text
                fontSize={`${hp('1.5%')}px`}
                color={theme.colors.text.secondary}>
                {new Date(
                  cowinReport.report?.timestamp.split(' ')[0],
                ).toLocaleString()}
              </Text>
            </>
          )}
        </LastUpdated>
      </Container>
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  cowinReport: selectCowinReport,
  covid19IndiaReport: selectCovid19IndiaReport,
  states: selectStates,
});

export default connect(mapStateToProps, {
  getCowinPublicReport,
  getCovid19IndiaReport,
})(Home);

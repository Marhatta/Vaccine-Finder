import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useTheme} from 'styled-components/native';
import {Text} from '../../components/common/Typography/Text.component';
import {Icon} from '../../components/common/Icon/Icon.component';
import {Layout} from '../../components/core/Layout/Layout.component';
import {LineChart} from '../../components/common/Chart/Chart.component';
import {
  StatLineSkeleton,
  ChartSkeleton,
} from '../../components/common/Skeleton/Skeleton.component';
import {
  StatsCard,
  Container,
  StatsCardColumn,
  ChartContainer,
  ColorBox,
  ColorBoxContainer,
  CardCustomColumn,
  LastUpdated,
} from './Home.styles';
import {formatNumber} from '../../utils/numberFormatter';
import {
  getCowinPublicReport,
  getCovid19IndiaReport,
} from '../../redux/stats/stats.actions';
import {
  selectCovid19IndiaReport,
  selectCowinReport,
} from '../../redux/stats/stats.selectors';

const Home = ({
  navigation,
  cowinReport,
  covid19IndiaReport,
  getCowinPublicReport,
  getCovid19IndiaReport,
}) => {
  useEffect(() => {
    getCowinPublicReport();
    getCovid19IndiaReport();
  }, []);

  const theme = useTheme();
  console.log(covid19IndiaReport.loading);

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
                {' '}
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
            <LineChart
              height={hp('35%')}
              yAxisSuffix=""
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
                    strokeWidth: 5,
                    color: (opacity = 1) => `rgba(134, 65, 244,${opacity})`, // optional
                  },
                ],
              }}
            />
          </ChartContainer>
        )}
        <StatsCard>
          <CardCustomColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/hospital.png')}
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

        <StatsCard>
          <CardCustomColumn width="15%">
            <Icon
              width={`${hp('8%')}px`}
              height={`${hp('8%')}px`}
              source={require('../../assets/icons/group.png')}
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
                {cowinReport.report?.topBlock.registration.total.toLocaleString()}
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
                {cowinReport.report?.topBlock.registration.cit_18_45.toLocaleString()}
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
                {cowinReport.report?.topBlock.registration.cit_45_above.toLocaleString()}
              </Text>
            )}
          </CardCustomColumn>
        </StatsCard>

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
            {cowinReport.loading ? (
              <StatLineSkeleton />
            ) : (
              <Text variant="caption">
                {' '}
                {cowinReport.report?.topBlock.vaccination.total.toLocaleString()}
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
          <Text
            fontSize={`${hp('1.5%')}px`}
            color={theme.colors.text.secondary}>
            Last Updated:{' '}
          </Text>
          <Text
            fontSize={`${hp('1.5%')}px`}
            color={theme.colors.text.secondary}>
            {new Date(cowinReport.report?.timestamp).toLocaleString()}
          </Text>
        </LastUpdated>
      </Container>
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  cowinReport: selectCowinReport,
  covid19IndiaReport: selectCovid19IndiaReport,
});

export default connect(mapStateToProps, {
  getCowinPublicReport,
  getCovid19IndiaReport,
})(Home);

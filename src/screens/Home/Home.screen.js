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
  StatsCard,
  Container,
  StatsCardColumn,
  ChartContainer,
  ColorBox,
  ColorBoxContainer,
  CardCustomColumn,
  LastUpdated,
} from './Home.styles';
import {strings} from '../../infrastructure/lang';
import {getCowinPublicReport} from '../../redux/stats/stats.actions';
import {
  selectCovid19IndiaReport,
  selectCowinReport,
} from '../../redux/stats/stats.selectors';

const Home = ({
  navigation,
  cowinReport,
  covid19IndiaReport,
  getCowinPublicReport,
}) => {
  useEffect(() => {
    getCowinPublicReport();
  }, []);
  const theme = useTheme();

  return (
    <Layout navigation={navigation}>
      <Container showsVerticalScrollIndicator={false}>
        <StatsCard>
          <StatsCardColumn>
            <Text variant="caption">45078000</Text>
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
            <Text variant="caption">24700 0</Text>
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
            <Text variant="caption">2500000</Text>
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

        <ChartContainer>
          <LineChart
            height={hp('30%')}
            data={{
              labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sept',
                'Oct',
                'Nov',
                'Dec',
              ],
              datasets: [
                {
                  data: [1, 7, 6, 4, 2, 5, 1, 7, 6, 4, 2, 5],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(134, 65, 244,${opacity})`, // optional
                },
                {
                  data: [2, 4, 6, 8, 8, 2, 2, 4, 6, 8, 8, 2],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(255,255,0, ${opacity})`, // optional
                },
                {
                  data: [9, 4, 7, 8, 2, 4, 9, 4, 7, 8, 2, 4],
                  strokeWidth: 2,
                  color: (opacity = 1) => `rgba(0,255,0, ${opacity})`, // optional
                },
              ],
            }}
          />
        </ChartContainer>

        {cowinReport.loading ? (
          <Text>loading....</Text>
        ) : (
          <>
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
                <Text variant="caption">
                  {cowinReport.report?.topBlock.sites.total.toLocaleString()}
                </Text>
              </CardCustomColumn>
              <CardCustomColumn width="35%">
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Government
                </Text>
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.sites.govt.toLocaleString()}
                </Text>
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Private
                </Text>
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.sites.pvt.toLocaleString()}
                </Text>
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
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.total.toLocaleString()}
                </Text>
              </CardCustomColumn>
              <CardCustomColumn width="35%">
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Age 18-44
                </Text>
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.cit_18_45.toLocaleString()}
                </Text>
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Age 45+
                </Text>
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.registration.cit_45_above.toLocaleString()}
                </Text>
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
                <Text variant="caption">
                  {' '}
                  {cowinReport.report?.topBlock.vaccination.total.toLocaleString()}
                </Text>
              </CardCustomColumn>
              <CardCustomColumn width="35%">
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Covishield
                </Text>
                <Text variant="caption">
                  {cowinReport.report?.topBlock.vaccination.covishield.toLocaleString()}
                </Text>
                <Text
                  fontSize={`${hp('1.5%')}px`}
                  color={theme.colors.text.secondary}>
                  Covaxin
                </Text>
                <Text variant="caption">
                  {cowinReport.report?.topBlock.vaccination.covaxin.toLocaleString()}
                </Text>
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
          </>
        )}
      </Container>
    </Layout>
  );
};
const mapStateToProps = createStructuredSelector({
  cowinReport: selectCowinReport,
  covid19IndiaReport: selectCovid19IndiaReport,
});

export default connect(mapStateToProps, {getCowinPublicReport})(Home);

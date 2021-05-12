import React from 'react';
import {Text} from '../../components/common/Typography/Text.component';
import {Layout} from '../../components/core/Layout/Layout.component';

const Home = ({navigation}) => {
  return (
    <Layout navigation={navigation}>
      <Text>Welcome</Text>
    </Layout>
  );
};

export default Home;

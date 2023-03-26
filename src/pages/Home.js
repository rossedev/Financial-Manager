import React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';
import AddRegister from '../components/AddRegister';
import useHome from '../components/useHome';
import {formatCurrency} from '../utils/formatCurrency';

const Home = () => {
  const {summaryAccount} = useHome();

  return (
    <Card style={{margin: 10}}>
      <Card.Title
        title="Welcome Rose"
        subtitle="This is your summary"
        left={props => <Avatar.Icon {...props} icon="wallet-outline" />}
        titleVariant="titleLarge"
      />
      <Card.Content style={{marginVertical: 20}}>
        <Text variant="titleLarge">
          Total: {formatCurrency(summaryAccount.total)}
        </Text>
        <Text variant="bodyMedium">
          Income: {formatCurrency(summaryAccount.income)}
        </Text>
        <Text variant="bodyMedium">
          Outcome: -{formatCurrency(summaryAccount.outcome)}
        </Text>
      </Card.Content>
      <AddRegister />
    </Card>
  );
};

export default Home;

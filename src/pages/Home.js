import React from 'react';
import {Text, Box} from 'native-base';
import {formatCurrency} from '../utils/formatCurrency';
import useHome from '../components/useHome';
import AddRegister from '../components/AddRegister';

const Home = () => {
  const {summaryAccount} = useHome();

  return (
    <Box>
      <Box
        p={4}
        m={2}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        shadow={2}
        borderWidth={0}
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}>
        <Text fontSize="3xl" bold>
          Welcome Rose
        </Text>
        <Text fontSize="lg">This is your summary</Text>
        <Text mt={6} mb={2} fontSize="3xl">
          <Text bold>{formatCurrency(summaryAccount.total)}</Text>
        </Text>
        <Text mb={2} fontSize="lg">
          <Text bold color="green.500">
            Income:
          </Text>{' '}
          {formatCurrency(summaryAccount.income)}
        </Text>
        <Text mb={5} fontSize="lg">
          <Text bold color="red.500">
            Outcome:
          </Text>{' '}
          -{formatCurrency(summaryAccount.outcome)}
        </Text>
      </Box>

      <AddRegister />
    </Box>
  );
};

export default Home;

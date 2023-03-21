import React from 'react';
import {HStack, VStack, Text, Alert} from 'native-base';

const AlertBase = ({text, status}) => {
  return (
    <Alert
      maxWidth="100%"
      alignSelf="center"
      flexDirection="row"
      status={status || 'success'}
      variant="left-accent">
      <VStack space={2} flexShrink={1} w="80%">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Text
            fontSize="md"
            fontWeight="medium"
            flexShrink={1}
            color="lightText">
            {text}
          </Text>
        </HStack>
      </VStack>
    </Alert>
  );
};

export default AlertBase;

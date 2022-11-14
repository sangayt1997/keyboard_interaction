import React from 'react';
import {Box, Input, VStack} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function KeyboardInteraction() {
  return (
    <KeyboardAwareScrollView>
      <Box flex={1}>
        <VStack space="24px">
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
          <Input placeholder="Input" />
        </VStack>
      </Box>
    </KeyboardAwareScrollView>
  );
}

export default KeyboardInteraction;

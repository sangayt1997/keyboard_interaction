import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, Text, theme} from 'native-base';

const App = () => {
  return (
    <SafeAreaProvider>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled"
        alwaysBounceVertical={false}>
        <NativeBaseProvider theme={theme}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Text>Keyboard interaction</Text>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;

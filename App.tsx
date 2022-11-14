import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider, theme} from 'native-base';
import Landing from './src/screen/landing/landing';

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
          <Landing />
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default App;

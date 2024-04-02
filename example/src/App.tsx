import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-common-components-test';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title={'버튼'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

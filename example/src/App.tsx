import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-common-components-test';
import { useState } from 'react';

export default function App() {
  const [num, setNum] = useState(0);

  const onPressUpButton = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const onPressDownButton = () => {
    setNum((prevNum) => prevNum - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          wide
          type={'outline'}
          title={'업'}
          size={'medium'}
          onPress={onPressUpButton}
        />
        <Button
          wide
          title={'다운'}
          size={'medium'}
          onPress={onPressDownButton}
        />
      </View>
      <Text style={styles.number}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 16,
    gap: 6,
  },
  number: {
    marginTop: 30,
  },
});

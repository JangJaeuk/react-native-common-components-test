import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-common-components-test';
import { useState } from 'react';

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
    marginTop: 20,
    gap: 6,
  },
  buttonBox: {
    flex: 1,
  },
  text: {
    marginTop: 30,
  },
});

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [num, setNum] = useState(0);

  const onPressUpButton = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const onPressDownButton = () => {
    setNum((prevNum) => prevNum - 1);
  };

  const onPressToggleButton = () => {
    setToggle((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonBox}>
          <Button wide size={'small'} title={'업'} onPress={onPressUpButton} />
        </View>
        <View style={styles.buttonBox}>
          <Button
            wide
            type={'secondary'}
            title={'다운'}
            onPress={onPressDownButton}
          />
        </View>
      </View>
      <Text style={styles.text}>{num}</Text>
      <View style={styles.buttonContainer}>
        <Button
          type={'outline'}
          title={'토글'}
          size={'large'}
          onPress={onPressToggleButton}
        />
      </View>
      <Text style={styles.text}>{toggle ? '켜짐' : '꺼짐'}</Text>
    </View>
  );
}

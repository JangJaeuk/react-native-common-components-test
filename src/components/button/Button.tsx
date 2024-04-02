import React, { type FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
});

type Size = 'large' | 'small';

type Props = Omit<
  React.ComponentProps<typeof Pressable>,
  'style' | 'children'
> & {
  title: string;
  size?: Size;
};

export const Button: FC<Props> = (props) => {
  const { title, size = 'small', disabled } = props;

  return (
    <Pressable
      style={{
        ...styles.container,
        width: size === 'large' ? '100%' : 'auto',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

import React, { type FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#eee',
  },
});

type Size = 'large' | 'medium' | 'small';

type Props = Omit<
  React.ComponentProps<typeof Pressable>,
  'style' | 'children'
> & {
  title: string;
  size?: Size;
  block?: boolean;
};

export const Button: FC<Props> = (props) => {
  const {
    title,
    size = 'medium',
    block = false,
    disabled,
    ...restProps
  } = props;

  return (
    <Pressable
      {...restProps}
      style={{
        ...styles.container,
        flex: block ? 1 : undefined,
        paddingHorizontal: size === 'large' ? 36 : size === 'medium' ? 24 : 16,
        paddingVertical: size === 'large' ? 14 : size === 'medium' ? 10 : 8,
        backgroundColor: disabled ? '#f3f4f9' : '#6e57fa',
      }}
    >
      <Text
        style={{
          fontSize: size === 'large' ? 16 : size === 'medium' ? 14 : 12,
          lineHeight: size === 'large' ? 20 : size === 'medium' ? 18 : 15,
          fontWeight: size === 'large' ? '700' : '500',
          color: disabled ? '#aeb1ba' : '#fff',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

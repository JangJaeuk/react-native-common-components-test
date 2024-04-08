import React, { type FC, useMemo } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#eee',
  },
});

type Props = Omit<
  React.ComponentProps<typeof Pressable>,
  'style' | 'children'
> & {
  title: string;
  type?: 'primary' | 'secondary' | 'outline';
  size?: 'large' | 'medium' | 'small';
  wide?: boolean;
};

export const Button: FC<Props> = (props) => {
  const {
    title,
    type = 'primary',
    size = 'medium',
    wide = false,
    disabled,
    ...restProps
  } = props;

  const backgroundColor = useMemo(() => {
    if (disabled) {
      switch (type) {
        case 'outline':
          return '#fff';
        default:
          return '#f3f4f9';
      }
    } else {
      switch (type) {
        case 'primary':
          return '#6e57fa';
        case 'secondary':
          return '#ef4343';
        case 'outline':
          return 'transparent';
        default:
          return '#6e57fa';
      }
    }
  }, [disabled, type]);

  return (
    <Pressable
      {...restProps}
      style={{
        ...styles.container,
        flex: wide ? 1 : undefined,
        paddingHorizontal: size === 'large' ? 36 : size === 'medium' ? 24 : 16,
        paddingVertical: size === 'large' ? 14 : size === 'medium' ? 10 : 8,
        backgroundColor: backgroundColor,
        borderColor: disabled ? '#bdc2cb' : '#6e57fa',
        borderWidth: type === 'outline' ? 1 : 0,
      }}
    >
      <Text
        style={{
          fontSize: size === 'large' ? 16 : size === 'medium' ? 14 : 12,
          lineHeight: size === 'large' ? 20 : size === 'medium' ? 18 : 15,
          fontWeight: size === 'large' ? '700' : '500',
          color: disabled ? '#aeb1ba' : type === 'outline' ? '#6e57fa' : '#fff',
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

import styles from './Button.style';
import React, { type FC } from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

type Props = Omit<PressableProps, 'style' | 'children'> & {
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

  return (
    <Pressable
      {...restProps}
      style={[
        styles.button,
        styles[`button_${size}`],
        styles[`button_background_${type}`],
        disabled &&
          (type === 'outline'
            ? styles.button_outline_disabled
            : styles.button_general_disabled),
        wide && styles.button_wide,
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`test_${size}`],
          type === 'outline'
            ? styles.text_outline_color
            : styles.text_general_color,
          disabled && styles.text_disabled,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

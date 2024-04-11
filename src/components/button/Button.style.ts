import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  button_large: {
    paddingHorizontal: 36,
    paddingVertical: 14,
  },
  button_medium: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  button_small: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button_background_primary: {
    backgroundColor: '#6e57fa',
  },
  button_background_secondary: {
    backgroundColor: '#ef4343',
  },
  button_background_outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#6e57fa',
  },
  button_general_disabled: {
    backgroundColor: '#f3f4f9',
  },
  button_outline_disabled: {
    backgroundColor: '#fff',
    borderColor: '#bdc2cb',
  },
  button_wide: {
    width: '100%',
  },
  text: {
    fontWeight: '500',
  },
  text_large: {
    fontSize: 16,
    lineHeight: 20,
  },
  text_medium: {
    fontSize: 14,
    lineHeight: 18,
  },
  text_small: {
    fontSize: 12,
    lineHeight: 15,
  },
  text_general_color: {
    color: '#fff',
  },
  text_outline_color: {
    color: '#6e57fa',
  },
  text_disabled: {
    color: '#aeb1ba',
  },
});

export default styles;

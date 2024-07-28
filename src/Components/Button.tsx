import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ label = '', type = 'primary', onPress=()=>null }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.button, styles[type], isHovered && styles[type + 'Hover']]}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
      onPress={onPress}
    >
      <Text style={type === 'primary' ? styles.buttonTextPrimary : type === 'secondary' ? styles.buttonTextSecondary : styles.buttonTextDanger}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  primary: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    backgroundColor: '#10CA84',
  },
  secondary: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: '#292D39',
  },
  danger: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    backgroundColor: '#FF4C4C',
  },
  primaryHover: {
    backgroundColor: '#0B805F',
  },
  secondaryHover: {
    backgroundColor: '#f0f0f0',
  },
  dangerHover: {
    backgroundColor: '#CC3C3C',
  },
  buttonTextPrimary: {
    fontFamily: 'Supreme Variable',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: 'center',
    color: 'white',
  },
  buttonTextSecondary: {
    fontFamily: 'Supreme Variable',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: 'center',
    color: '#838B98',
  },
  buttonTextDanger: {
    fontFamily: 'Supreme Variable',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.4,
    textAlign: 'center',
    color: 'white',
  },
});

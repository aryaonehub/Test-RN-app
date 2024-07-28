import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const InputText = ({ type = 'text', label = '', value = null, onChange = () => null }) => {
  const [isFocused, setIsFocused] = useState(false);
  const keyboardType = type === 'number' ? 'numeric' : 'default';

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder="-----"
        placeholderTextColor="#838B98"
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    paddingHorizontal: 16,
    borderRadius: 2,
    backgroundColor: '#19202C',
    width : "100%"
  },
  focusedContainer: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  labelText: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: -0.4,
    textAlign: 'left',
    color: '#838B98',
  },
  textInput: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 15,
    letterSpacing: -0.4,
    textAlign: 'right',
    color: '#FFFFFF',
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginLeft: 'auto',
    justifyContent:'flex-end',
    flex: 1, 
  }
});

export default InputText;

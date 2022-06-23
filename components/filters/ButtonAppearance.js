import { useState, useCallback } from 'react';
import { Button, StyleSheet, View } from 'react-native';

export const ButtonAppearance = ({ title = '', onPress }) => {
  const [active, setActive] = useState();

  const handlePressButton = useCallback(() => {
    const nextState = !active
    setActive(nextState)
    onPress && onPress(nextState)
  }, [active, onPress])

  return (
    <View style={[styles.buttonWrapper, active && styles.active]}>
      <Button style={styles.button} title={title} onPress={handlePressButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 7,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: '#a3c8fd',
  },
})

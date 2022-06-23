import { useCallback } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Avatar } from '../common';

export const Character = ({ data, onPressItem: handlePressItem }) => {
  const handlePress = useCallback(
    () => handlePressItem && handlePressItem(data),
    [data, handlePressItem]
  )

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.wrapper}>
        <Avatar uri={data?.image} />
        <Text style={styles.text}>{data?.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: 24
  }
})

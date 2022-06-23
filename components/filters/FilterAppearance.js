import { useCallback, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ButtonAppearance } from './ButtonAppearance';

export const FilterAppearance = ({ onChange }) => {
  const [appearances, setAppearances] = useState([])
  const toggleAppearances = useCallback((number) => {
    let newAppearances = [...appearances]
    if (newAppearances.includes(number)) {
      newAppearances = newAppearances.filter(num => num !== number)
    } else {
      newAppearances.push(number)
    }

    setAppearances(newAppearances)
    onChange(newAppearances)
  }, [appearances, onChange])

  return (
    <View style={styles.wrapper}>
      <Text>Appearance:</Text>

      <ButtonAppearance title="1" onPress={() => toggleAppearances(1)} />
      <ButtonAppearance title="2" onPress={() => toggleAppearances(2)} />
      <ButtonAppearance title="3" onPress={() => toggleAppearances(3)} />
      <ButtonAppearance title="4" onPress={() => toggleAppearances(4)} />
      <ButtonAppearance title="5" onPress={() => toggleAppearances(5)} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#a3c8fd',
    width: 40,
    height: 40,
    borderRadius: 7,
    marginLeft: 20,
  },
})

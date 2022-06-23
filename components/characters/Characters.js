import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Character } from './Character';
import { Loading } from '../common';

export const Characters = ({ onPressItem: handlePressItem, characters, loading, error }) => {
  const renderCharacter = useCallback(
    item => <Character key={item.id} data={item} onPressItem={handlePressItem} />,
    []
  )

  if (error) {
    return <Text>Some Error</Text>
  }

  if (loading && !characters) {
    return <Loading />
  }

  if (!characters) {
    return <Text>No data</Text>
  }

  return (
    <View style={styles.wrapper}>
      {characters.map(renderCharacter)}
      {loading && <Loading />}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  list: {
    paddingVertical: 20,
  },
})

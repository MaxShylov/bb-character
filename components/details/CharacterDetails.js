import { useCallback, useMemo } from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import { Avatar } from '../common';
import { DetailsListItem } from './DetailsListItem';
import { arrayToString } from '../../utils/arrayToString';

export const CharacterDetails = ({ data }) => {
  const {
    image,
    name,
    occupation,
    status,
    nickname,
    seasonAppearance,
  } = data || {}
  const listData = useMemo(() => ([
    { title: 'Name', value: name },
    { title: 'Occupation', value: arrayToString(occupation) },
    { title: 'Status', value: status },
    { title: 'Nickname', value: nickname },
    { title: 'Season appearance', value: arrayToString(seasonAppearance) },
  ]), [])

  const renderItem = useCallback(
    ({ item }) => <DetailsListItem data={item} />,
    [],
  )

  return (
    <View style={{flex: 1}}>
      <View style={styles.image}>
        <Avatar uri={image} large />
      </View>

      <View style={styles.list}>
        <FlatList
          data={listData}
          keyExtractor={item => item.title}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  list: {
    alignItems: 'flex-start',
  }
});

import { useCallback, useMemo, useRef, useState } from 'react';
import { Button, StyleSheet, View, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global-styles';
import { useCharacters } from '../hooks/useCharachers';
import { routes } from '../navigation/routes';
import { Characters, Search, FilterAppearance } from '../components';
import { hasAtLeastOneElementInArray } from '../utils/hasSameElementsInArray';

export const Home = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const [selectedAppearance, setSelectedAppearance] = useState([])
  const [characters, { loading, error, fetchMore }] = useCharacters()

  const handlePressCharacter = useCallback(
    character => navigation?.navigate(routes.details, character),
    [navigation],
  )

  const handlePressButtonMore = useCallback(() => {
    scrollViewRef.current.scrollToEnd({ animated: true })
    fetchMore()
  }, [fetchMore])

  const handleSearch = useCallback((searchValue) => fetchMore(searchValue), [])

  const filteredCharacters = useMemo(() => {
    if (!selectedAppearance?.length) {
      return characters
    }

    return characters.filter(
      character => hasAtLeastOneElementInArray(selectedAppearance, character.seasonAppearance),
    )
  }, [characters, selectedAppearance])

  return (
    <View style={globalStyles.container}>
      <Search onSearch={handleSearch} />
      <FilterAppearance onChange={setSelectedAppearance} />
      <ScrollView ref={scrollViewRef}>
        <Characters
          onPressItem={handlePressCharacter}
          characters={filteredCharacters}
          loading={loading}
          error={error}
        />
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button title="Load more" onPress={handlePressButtonMore} disabled={loading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    padding: 20,
  },
});

import { useCallback, useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export const Search = ({ onSearch }) => {
  const [search, setSearch] = useState();
  const handleSearch = useCallback(() => onSearch(search), [search])

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search by name"
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 10,
  },
  input: {
    height: 50,
    flexGrow: 1,
    fontSize: 16,
  },
});

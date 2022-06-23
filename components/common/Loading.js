import { StyleSheet, Text, View } from 'react-native';

export const Loading = () => {
  return <View style={styles.loading}><Text>Loading...</Text></View>
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    height: 100,
    alignItems: 'center',
  }
});

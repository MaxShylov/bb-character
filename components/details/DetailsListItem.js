import { StyleSheet, Text, View } from 'react-native';

export const DetailsListItem = ({ data: { title, value } = {} }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    width: '30%',
    minWidth: 100,
    marginRight: 20,
    fontSize: 14,
  },
  value: {
    width: '60%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

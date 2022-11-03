import { StyleSheet, Text, View } from 'react-native';

function RecentScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text>Recent Screen</Text>
    </View>
  );
}

export default RecentScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: 'center',
    backgroundColor: '#546522',
  },
});

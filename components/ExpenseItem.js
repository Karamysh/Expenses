import { StyleSheet, View, Text, Pressable } from 'react-native';

function ExpenseItem(props) {
  return (
    <View style={styles.expenseItem}>
      <Text>sSSSS</Text>
      {/* <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.expenseText}>{props.text}</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  expenseText: {
    color: 'white',
    padding: 8,
  },
});

export default ExpenseItem;

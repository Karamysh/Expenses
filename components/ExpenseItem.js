import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { getFormatedDate } from '../util/date';

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function expensePressHandler() {
    navigation.navigate('ManageExpenses', {
      expenseId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.expenseItem}
        onPress={expensePressHandler}
        android_ripple={{
          color: '#210644',
          borderless: true,
          radius: 1000,
        }}
      >
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormatedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },

  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});

export default ExpenseItem;

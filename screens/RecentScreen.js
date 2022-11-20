import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from 'react-native';
import { useState } from 'react';
import { ExpenseItem } from '../components/ExpenseItem';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';

function RecentScreen() {
  // const [enteredExpense, setEnteredExpense] = useState('');
  // const [expenses, setExpenses] = useState([]);

  // function expenseInputHandler(enteredExp) {
  //   setEnteredExpense(enteredExp);
  // }

  // function addExpenseHandler() {
  //   props.onAddExpense(enteredExpense);
  //   setEnteredExpense('');
  // }

  // function addExpenseHandler(enteredExpText) {
  //   setExpenses((currentExpense) => [
  //     ...currentExpense,
  //     { text: enteredExpText, id: Math.random().toString() },
  //   ]);
  // }

  // function deleteExpenseHandler(id) {
  //   setExpenses((currentExpenses) => {
  //     return currentExpenses.filter((exp) => exp.id !== id);
  //   });
  // }

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput expensesPeriod="Last 7 days" />
    </View>
  );
}

export default RecentScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});

import { StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import { ExpenseItem } from '../components/ExpenseItem';

function RecentScreen() {
  const [enteredExpense, setEnteredExpense] = useState('');
  const [expenses, setExpenses] = useState([]);

  function expenseInputHandler(enteredExp) {
    setEnteredExpense(enteredExp);
  }

  function addExpenseHandler() {
    props.onAddExpense(enteredExpense);
    setEnteredExpense('');
  }

  function addExpenseHandler(enteredExpText) {
    setExpenses((currentExpense) => [
      ...currentExpense,
      { text: enteredExpText, id: Math.random().toString() },
    ]);
  }

  function deleteExpenseHandler(id) {
    setExpenses((currentExpenses) => {
      return currentExpenses.filter((exp) => exp.id !== id);
    });
  }

  return (
    <View style={styles.rootContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your expenses"
        onChangeText={expenseInputHandler}
        value={enteredExpense}
      />
      <View style={styles.button}>
        <Button
          title="Add Expense"
          onPress={addExpenseHandler}
          color="#5e0acc"
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={expenses}
            renderItem={(itemData) => {
              return (
                <ExpenseItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteExpenseHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </View>
  );
}

export default RecentScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: 100,
    alignItems: 'center',
    // backgroundColor: '#546522',
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

import { StyleSheet, View } from 'react-native';
import { useContext, useEffect } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentScreen() {
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function getExpenses() {
      const expenses = await fetchExpenses();
      expensesCtx.setExpenses(expenses);
    }

    getExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    // console.log(expense.date);
    // console.log('date', date7DaysAgo);

    return expense.date > date7DaysAgo;
  });

  // console.log(expensesCtx.expenses);

  return (
    <View style={styles.rootContainer}>
      <ExpensesOutput
        expenses={recentExpenses}
        expensesPeriod="Last 7 days"
        fallbackText="No expenses registered for the last 7 days."
      />
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

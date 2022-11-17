import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2022-11-11'),
  },
  {
    id: 'e2',
    description: 'A pair of gloves',
    amount: 59.99,
    date: new Date('2022-11-01'),
  },
  {
    id: 'e3',
    description: 'A book',
    amount: 59.99,
    date: new Date('2022-10-13'),
  },
  {
    id: 'e4',
    description: 'A shirt',
    amount: 59.99,
    date: new Date('2022-09-01'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSE} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSE} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});

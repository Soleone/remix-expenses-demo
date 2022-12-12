import type { Expense } from '~/model/types'
import ExpenseListItem from './ExpenseListItem'

export default function ExpensesList({ expenses }: { expenses: Expense[] }) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  )
}
import type { Expense } from "~/model/types"

type ExpenseFragment = Pick<Expense, "title" | "amount">

export default function ExpenseListItem({ title, amount }: ExpenseFragment) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <a href="tbd">Edit</a>
      </menu>
    </article>
  )
}
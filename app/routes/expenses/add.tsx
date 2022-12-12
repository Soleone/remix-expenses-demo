import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"

export default function AddExpensesRoute() {
  return (
    <Modal onClose={() => { }}>
      <ExpenseForm />
    </Modal>
  )
}
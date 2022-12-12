import ExpenseForm from "~/components/expenses/ExpenseForm"
import Modal from "~/components/util/Modal"

export default function ExpenseRoute() {
  return (
    <Modal onClose={() => { }}>
      <ExpenseForm />
    </Modal>
  )
}

import type { LinksFunction } from "@remix-run/node"
import { Link, Outlet } from "@remix-run/react"
import expensesStyles from "~/styles/expenses.css"
import { expenses } from "~/model/expenses"
import ExpensesList from "~/components/expenses/ExpensesList"
import { FaDownload, FaPlus } from "react-icons/fa"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: expensesStyles }
  ]
}

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Download</span>
          </a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  )
}
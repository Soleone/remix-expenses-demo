import type { LinksFunction } from "@remix-run/node"
import expensesStyles from "~/styles/expenses.css"
import ExpensesList from "~/components/expenses/ExpensesList"
import { expenses } from "~/model/expenses"
import { Outlet } from "@remix-run/react"

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
        <ExpensesList expenses={expenses} />
      </main>
    </>
  )
}
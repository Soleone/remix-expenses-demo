import type { LinksFunction } from "@remix-run/node"
import expensesStyles from "~/styles/expenses.css"
import { Outlet } from "@remix-run/react"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: expensesStyles }
  ]
}

export default function ExpensesLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}
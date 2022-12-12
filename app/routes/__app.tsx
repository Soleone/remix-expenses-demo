import type { LinksFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import expensesStyles from "~/styles/expenses.css"

export default function ExpensesPathlessLayout() {
  return <Outlet />
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: expensesStyles }
  ]
}
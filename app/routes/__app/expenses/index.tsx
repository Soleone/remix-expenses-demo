import type { MetaFunction } from "@remix-run/node"

export default function ExpensesRoute() {
  return (
    <div>
      <h1>All Expenses</h1>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Expenses"
  }
}
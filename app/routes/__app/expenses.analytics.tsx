import type { MetaFunction } from "@remix-run/node"
import { expenses } from "~/model/expenses"
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"

export default function AnalyticsRoute() {
  return (
    <main>
      <ExpenseStatistics expenses={expenses} />
      <Chart expenses={expenses} />
    </main>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Snalytics",
  }
}
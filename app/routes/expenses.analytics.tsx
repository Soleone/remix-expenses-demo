import type { MetaFunction } from "@remix-run/node"
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics"
import Chart from "~/components/expenses/Chart"
import { expenses } from "~/model/expenses"

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
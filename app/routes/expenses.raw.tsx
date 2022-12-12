import type { Expense } from "~/model/types"
import { expenses } from "~/model/expenses"

export function loader(): Expense[] {
  return expenses
}
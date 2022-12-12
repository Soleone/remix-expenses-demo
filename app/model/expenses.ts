import type { Expense } from "~/model/types"

export const expenses: Expense[] = [
  {
    id: "e1",
    title: "First expense",
    amount: 12.99,
    date: new Date().toISOString()
  },
  {
    id: "e2",
    title: "Second expense",
    amount: 26.99,
    date: new Date().toISOString()
  }
]

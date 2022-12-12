import type { IconType } from "react-icons"

export interface Expense {
  id: string
  title: string
  amount: number
  date: string
}

export interface Plan {
  id: string
  title: string
  price: string
  perks: string[]
  icon: IconType
}

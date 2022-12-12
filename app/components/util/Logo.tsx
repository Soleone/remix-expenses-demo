import { Link } from "@remix-run/react"

export default function Logo() {
  return (
    <h1 id="logo">
      <Link to="/expenses">Expenses</Link>
    </h1>
  )
}
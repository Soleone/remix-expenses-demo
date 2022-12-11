import { useParams } from "@remix-run/react"

export default function ExpenseRoute() {
  const params = useParams()

  return (
    <div>
      {params.id}
    </div>
  )
}

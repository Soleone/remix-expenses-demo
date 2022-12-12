import type { LoaderArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

export async function loader({ params }: LoaderArgs) {
  const path = params["*"]
  if (path === "exp") {
    return redirect("/expenses")
  }
  return path
}

export default function CatchAllRoute() {
  const path = useLoaderData()

  return (
    <div>
      Catch all: {path}
    </div>
  )
}
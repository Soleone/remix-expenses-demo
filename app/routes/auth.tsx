import type { MetaFunction } from "@remix-run/node"

export default function AuthRoute() {
  return (
    <h1>Auth</h1>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Auth"
  }
}
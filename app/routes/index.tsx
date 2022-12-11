import type { MetaFunction } from "@remix-run/node"

export default function IndexRoute() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Home</h1>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Home"
  }
}
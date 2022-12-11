import type { MetaFunction } from "@remix-run/node"

export default function AnalyticsRoute() {
  return (
    <div>
      <h1>Analytics</h1>
    </div>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Snalytics",
  }
}
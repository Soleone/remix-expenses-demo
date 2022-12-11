import type { MetaFunction } from "@remix-run/node"

export default function PricingRoute() {
  return (
    <h1>Pricing</h1>
  )
}

export const meta: MetaFunction = () => {
  return {
    title: "Pricing",
  }
}
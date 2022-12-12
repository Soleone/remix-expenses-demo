import type { LinksFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import marketingStyles from "~/styles/marketing.css"

export default function MarketingPathlessLayout() {
  return <Outlet />
}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: marketingStyles }
  ]
}
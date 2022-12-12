import type { LinksFunction, MetaFunction } from "@remix-run/node"
import authStyles from "~/styles/auth.css"
import AuthForm from "~/components/auth/AuthForm"

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: authStyles }
  ]
}

export const meta: MetaFunction = () => {
  return {
    title: "Auth"
  }
}

export default function AuthRoute() {
  return (
    <AuthForm />
  )
}
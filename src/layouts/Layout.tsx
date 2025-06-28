
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
export default function layout() {
  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
      <Outlet />

      </main>
    </>
  )
}

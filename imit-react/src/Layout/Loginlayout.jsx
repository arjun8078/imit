import { Outlet } from "react-router-dom"
import Loginnavbar from "../components/Logincomponents/Loginnavbar"

const Loginlayout = () => {
  return (
    <>
        <Loginnavbar/>
        <Outlet/>
    </>

  )
}

export default Loginlayout
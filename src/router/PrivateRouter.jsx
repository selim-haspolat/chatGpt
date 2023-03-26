import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Main from "../pages/Main"


const PrivateRouter = () => {

    const {user} = useSelector(state => state.auth)


  return user ? <Outlet/> : <Main/>
}

export default PrivateRouter
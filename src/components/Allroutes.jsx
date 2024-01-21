import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { DashBoard } from "./Dashboard"
import { Login } from "./Login"
import { Privateroute } from "./Privateroute"
import { CustomCounter } from "./CustomCounter"
import { UseReducer } from "./UseReducer"
import { Redux } from "./Redux"
import Throttling from "./Throttling"
import Debounce from "./Debounce"
import { ContextApi } from "../ContextApi/ContextApi"

export const Allroutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/dashboard" element={<DashBoard/>}  />
            <Route path="/login" element={<Login/>}  />
            <Route path="/customcounter" element={<CustomCounter/>}  />
            <Route path="/context" element={<ContextApi/>}  />
            <Route path="/usereducer" element={<UseReducer/>}  />
            <Route path="/redux" element={<Redux/>}  />
            <Route path="/throttle" element={<Throttling/>}  />
            <Route path="/debounce" element={<Debounce/>}  />
        </Routes>

    )
}
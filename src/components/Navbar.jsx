import { Link } from "react-router-dom"

export const Navbar=()=>{
    return(
        <div >
            <Link  to={"/"}>Home</Link>
            <Link style={{margin:"5px"}} to={"/dashboard"}>dashboard</Link>
            <Link to={"/context"}>Context</Link>
            <Link style={{margin:"5px"}} to={"/customcounter"}>CustomCounter</Link>
            <Link to={"/usereducer"}>UseReducer</Link>
            <Link style={{margin:"5px"}} to={"/redux"}>Redux</Link>
            <Link to={"/throttle"}>throttling</Link>
            <Link style={{margin:"5px"}} to={"/debounce"}>Debounce</Link>
        </div>
    )
}
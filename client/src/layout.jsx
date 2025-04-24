import {Link, Outlet} from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <Link to="home">home</Link>|
        <Link to="insert">insert</Link>|
        <Link to="display">display</Link>|
        <Link to="search">search</Link>|
        <Link to="update">update</Link>|
        <Link to="delete">delete</Link>|
       
       <hr size="4" color="red" />

        <Outlet/>
       
        </>
    )
}

export default Layout;
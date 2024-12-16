import { Link, Outlet } from "react-router-dom"

export default function Navbar(){
    return (
        <div>
            <div className="navbar">
                <h2>The React Demos</h2>
                <Link to="/hello">Hello</Link>
                <Link to="/todo">ToDo</Link>
                <Link to="jsonserver">Json Server</Link>
            </div>
            <Outlet />
        </div>
    )
}
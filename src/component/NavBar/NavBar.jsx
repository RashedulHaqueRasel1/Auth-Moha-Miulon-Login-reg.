
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'


export default function NavBar() {

    const { user, logOut } = useContext(AuthContext)



    const handleLogOut = () => {
        logOut()
            .then(() => Swal.fire({
                icon: "error",
                text: "You clicked the button!",
                title: "Log Out ",
            }))
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>

        <li> <NavLink to={'/'}>Home</NavLink></li>
        <li> <NavLink to={'/login'}>Log in</NavLink></li>
        <li> <NavLink to={'/registration'}>Registration</NavLink></li>
        <li> <NavLink to={'/orders'}>Orders</NavLink></li>
        {
            user &&
            <>
             <li> <NavLink to={'/profile'}>Profile</NavLink></li>
             <li> <NavLink to={'/dashboard'}>DashBoard</NavLink></li>
            </>
        }


    </>
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Raesl</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {
                                    user ?
                                    <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                      :
                                    <img alt="Error" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                   
                                }
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            {

                                user ?
                                    <>
                                        <li><span className="mb-2  text-rose-500">{user.displayName}</span></li>
                                        <li><span className="mb-6  text-rose-500">{user.email}</span></li>
                                        <li><a className="btn btn-outline" onClick={handleLogOut}>Logout</a></li>
                                    </>
                                    :
                                    <Link to={'/login'}>Log In</Link>


                            }


                        </ul>
                    </div>
                </div>
            </div>
        </div>



    )
}

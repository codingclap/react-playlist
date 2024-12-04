import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Spinner } from "flowbite-react";
export default function Nav() {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();


  if (isLoading) {
    return <div className="w-screen h-screen flex justify-center items-center"><Spinner aria-label="Default status example" size="xl" /></div>;
  }

  return (


    <>
      <Navbar rounded className="border-b-2 border-slate-100">
        <Navbar.Brand href="/">

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">React App</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {
            isAuthenticated ? <><Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user.picture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <button className="flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white">Dashboard</button>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => logout()}>Sign out</Dropdown.Item>
            </Dropdown>
              <Navbar.Toggle /></> : <button type="button" onClick={() => loginWithRedirect()} class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
          }



        </div>
        <Navbar.Collapse>
          {/* <Link to="/" className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-cyan-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white " >
            Todo App
          </Link>  */}
          {/* <Link to="/calculator" className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
          Calculator App
          </Link>
 
          <Link to="/todo" className="block py-2 pl-3 pr-4 md:p-0 border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white">
           About
          </Link> */}
        </Navbar.Collapse>
      </Navbar>


    </>


  )

}
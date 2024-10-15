import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"

const App = () => {
  return (
    <UserContextProvider>
      <div className="flex justify-center items-center h-screen bg-gray-900 flex-col">
      <h1 className="text-white text-4xl text-center mb-10">React Video for context API</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  )
}
export default App
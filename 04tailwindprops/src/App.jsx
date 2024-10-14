import Card from "./components/Card.jsx"

const App = () => {
  let myObj= {
    name: "Hitesh",
    age: 25,
    address: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India"
    }
  }

  let myArr = ["hitesh", "sujal", "saurav", "sahil"]
  return (
    <div className="flex justify-center items-center w-full h-screen bg-zinc-900 flex-col gap-10">
      <Card username="sujal" post="student" profile="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" myArr={myArr} />
      <Card username="hitesh" post="developer" profile="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" myObj={myObj} />
      <Card profile="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  )
}
export default App
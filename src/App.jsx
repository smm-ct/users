/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { UserCard } from "./components/UserCard";

function App() {

  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const getUsers = () =>{
    setLoader(true);
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then((data) => {
        setUsers(data.users);
        setLoader(false);
      }
    );
  }

  useEffect( ()=> {
    getUsers();
  },[]);

  console.log(users);


  return (
    <>
    <Header/>
    <main className="container mx-auto justify-center flex flex-wrap gap-3 mt-5 mb-5">
      {
        (loader) ? ("Loading...") : (
          <>
            {users.map((user, i) =>(
              <UserCard key={i} userInfo={user}/>
            ))}
          </>
        )        
      }
    </main>
    <Footer/>      
    </>
  )
}

export default App

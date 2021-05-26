import React , { useEffect , useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import UserGrid from './components/UserGrid'
import Spinner from './Fidget-spinner.gif'

import axios from 'axios' ; 

import './App.css' ; 

function App() {

  const [users , setUsers ]  = useState([]) ; 
  const [isLoading , setIsLoading ] = useState(1) ; // isLoading = 1 -> means loading isn't initited , isLoading = 2 -> means loading is initited but not finished , isLoading = 3 -> means loading is finished .


 
      const fetchUsers = async () => {
          const result = await axios(`https://reqres.in/api/users?page=1`) ;
          console.log(result.data);
          setUsers(result.data.data) ; 
          setIsLoading(3) ;
      }


  return (
    <div className="App" >
        <Header fetchUsers={fetchUsers} setIsLoading={setIsLoading} />
      <div className="container" >
        {
          (isLoading==2)?<img src={Spinner} alt={"loading..."} style={{ "width" :"80px" , margin:"auto" , display:"block" }} />:<UserGrid users={users} />
        }        
      </div>
    </div>
  );
}

export default App;

import React , { useEffect , useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import UserGrid from './components/UserGrid'

import axios from 'axios' ; 

import './App.css' ; 

function App() {

  const [users , setUsers ]  = useState([]) ; 
  const [isLoading , setIsLoading ] = useState(true) ; 

  useEffect( () => {
      const fetchUsers = async () => {
          const result = await axios(`https://reqres.in/api/users?page=1`) ;
          console.log(result.data);
          setUsers(result.data.data) ; 
          setIsLoading(false) ;
      }
      fetchUsers();
  } , [] ) 


  return (
    <div className="App" >
        <Header />
      <div className="container" >
        
        <UserGrid users={users} />
      </div>
    </div>
  );
}

export default App;

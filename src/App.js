import React , { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import UserGrid from './components/UserGrid'
import Spinner from './Fidget-spinner.gif'

import axios from 'axios' ; 

import './App.css' ; 

import { useAlert } from 'react-alert'

function App() {

  const [users , setUsers ]  = useState([]) ; 
  const [isLoading , setIsLoading ] = useState(1) ; // isLoading = 1 -> means loading isn't initited , isLoading = 2 -> means loading is initited but not finished , isLoading = 3 -> means loading is finished .

  const alert = useAlert()
 
      const fetchUsers = async () => {
        try{
          const result = await axios(`https://reqres.in/api/users?page=1`).catch(
            err => {
              if(err.response.status === 404 )
              {
                  alert.show("404 , resouce not fuond ")
                  throw new Error("resouce not found") ; 
              }
              throw err ; 
            }
          ) ;
          console.log(result.data);
          setUsers(result.data.data) ; 
          setIsLoading(3) ;
        }
        catch(err)
        {
          alert.show("404 , resouce not found , check the endpoint again ");
        }
      }


  return (
    <div className="App" >
        <Header fetchUsers={fetchUsers} setIsLoading={setIsLoading} />
      <div className="container" >
        {
          (isLoading===2)?<img src={Spinner} alt={"loading..."} style={{ "width" :"80px" , margin:"auto" , display:"block" }} />:<UserGrid users={users} />
        }        
      </div>
    </div>
  );
}

export default App;

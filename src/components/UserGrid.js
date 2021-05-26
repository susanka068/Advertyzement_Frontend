import React , { useState , useEffect } from 'react'
import axios from 'axios'


export default function UserGrid() {
    const [users , setUsers ]  = useState([]) ; 
    const [isLoading , setIsLoading ] = useState(true) ; 

    useEffect( () => {
        const fetchUsers = async () => {
            const result = await axios(`https://reqres.in/api/users?page=1`) ;
            console.log(result.data);
        }
        
        
        fetchUsers();
    } , [] ) 

    return (
        <div>
            check
        </div>
    )
}

import React , { useState , useEffect } from 'react' ; 
import axios from 'axios' ; 
import UserCard from './UserCard' ; 
import { Card } from 'react-bootstrap';


export default function UserGrid({users}) {
   
    return (
        
         <div className="row" >
            {
                  users.map((user) => <UserCard user={user}/> )
            }
        </div>
    )
}

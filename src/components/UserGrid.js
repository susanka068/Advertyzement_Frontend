import React from 'react' ; 
import UserCard from './UserCard' ; 

export default function UserGrid({users}) {
   
    return (
        
         <div className="row" >
            {
                  users.map((user) => <UserCard user={user}/> )
            }
        </div>
    )
}

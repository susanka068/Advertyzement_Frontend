import React from 'react'

export default function UserCard({ user }) {
    return (

            <div style={{width:"5rem"}} className="col-md-4 animated fadeIn" key={user.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={user.avatar}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {user.first_name} {user.last_name}
                  </h5>
                  <p className="card-text">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
    )
}

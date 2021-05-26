import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

export default function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" >
                <Navbar.Brand style={{ fontSize: 30 } }>
                    susanka068
                </Navbar.Brand>
                <Button variant="outline-light">Get Users</Button>
            </Navbar>
        </div>
    )
}

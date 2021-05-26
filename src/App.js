import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
     <Navbar bg="dark">
      <Navbar.Brand style={{ fontSize: 65 } }>
        Sushi-book
      </Navbar.Brand>
    </Navbar>
    </div>
  );
}

export default App;

import './Home.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import React from 'react'

function Home() {
  const [hello, setHello] = useState(null)

  const getHello = async () => {
    try {
      const response = await axios.get('http://localhost/api/hello')
      setHello(response.data.Hello)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getHello()
  }, [])

  return (
    <div className="content-home">
      <h1>Hello from back - {hello ? hello : "Loading..."}</h1>
    </div>
  )
}

export default Home
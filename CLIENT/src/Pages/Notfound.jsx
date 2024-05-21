import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {

return (

<>
    <h1> Page not found </h1>
    <p> Click <Link to='/'> here </Link> to go back home </p>
</>
)
}

export default Notfound
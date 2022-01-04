import Navbar from '../components/Navbar/Navbar'
import { useState, useEffect } from 'react'

export default function Home() {
    const [productList, setProductList] = useState([])

    useEffect(() => {
        fetch('api/avo')
            .then((response) => response.json())
            .then(({ data, length }) => {
                setProductList(data)
            })
    }, [])

    return (
        <div>
            <Navbar />
            <h1>Hola Platzi</h1>

            {productList.map(producto => (
                <div key={producto.id}>{producto.name}</div>
            ))}
        </div>
    )
}

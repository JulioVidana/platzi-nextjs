import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductItem = () => {
    const { query: { id } } = useRouter()
    const [product, setProduct] = useState([])



    useEffect(() => {
        if (id) {

            fetch(`/api/avo/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduct(data)
                })
        }
    }, [id])

    return (<div>Esta es la página del producto: {product?.name}</div>
    )
}

export default ProductItem

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Layout from 'components/Layout/Layout'
import ProductSummary from 'components/ProductSummary/ProductSummary'

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

    return (
        <Layout>
            {product == null ? null : <ProductSummary product={product} />}
        </Layout>
    )
}

export default ProductItem

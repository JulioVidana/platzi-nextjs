import { useState, useEffect } from 'react'
import Layout from 'components/Layout/Layout'
import KawaiiHeader from 'components/KawaiiHeader/KawaiiHeader'
import ProductList from 'components/ProductList/ProductList'

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
        <Layout>
            <KawaiiHeader />
            <ProductList products={productList} />

        </Layout>
    )
}

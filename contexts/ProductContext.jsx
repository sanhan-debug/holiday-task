import React from 'react'
import { useEffect,useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
export let productContext = createContext()

function ProductProvider({children}) {

    let [products, setProducts] = useState([])

    useEffect(() => {
        try {
            axios.get("http://localhost:3001/products")
                .then(res => setProducts(res.data))
        } catch (err) {
            console.error("error get req", err)
        }
    }, [])

    let values = {
        products,
        setProducts
    }

  return <productContext.Provider value={values}>{children}</productContext.Provider>
}

export default ProductProvider
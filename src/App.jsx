import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce'
import { Products, Navbar } from './components'


const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async ()  => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }

  useEffect( () => {

    fetchProducts();
  }, [])

  return (
    <div>
        <Navbar/>
        <Products products = {products} />
    </div>
  )
}

export default App
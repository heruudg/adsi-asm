"use client"

import { supabase } from "@/utils/supabase"
import { useState, useEffect } from 'react'

export default function Page() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from('product')
        .select('*')

      if (error) {
        console.error('Error fetching products:', error)
      } else {
        setProducts(data)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}
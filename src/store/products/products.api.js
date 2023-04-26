import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
  reducerPath: 'api/products',
  baseQuery: fetchBaseQuery({baseUrl: 'http://127.0.0.1:5000/api/'}),
  endpoints: build => ({
    getProducts: build.query({
      query: () => 'products'
    }),
    getProduct: build.query({
      query: (id) => 'products/'+id
    })
  })
})

export const { useGetProductQuery, useGetProductsQuery } = productsApi
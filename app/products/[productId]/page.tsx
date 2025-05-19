import React from 'react'

export default async function ProductDetails ({params}: {params: Promise<{productId:string}>}) {

      const {productId} = await params;
      console.log('params: ', params);
      console.log('productId: ', productId);

      return (
            <div>
                  Details about Product {productId}
            </div>
      )
}

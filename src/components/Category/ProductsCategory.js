import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti'
import { ImLocation } from 'react-icons/im'
import { BiTime } from 'react-icons/bi'
import { GiDuration } from 'react-icons/gi'

const ProductsCategory = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products.map(product => {
                    const { _id, image, product_name, location, resale_price, original_price, uses_duration, seller_name, isValid_seller, post_time } = product;
                    return <div key={_id} className='shadow-lg p-3 bg-gray-50 rounded space-y-5'>
                        <div className='h-[300px]'>
                            <img src={image} alt="Car images" className='h-[300px] w-full rounded border' />
                        </div>
                        <div className='pl-4 space-y-2'>
                            <h3 className='text-xl font-bold text-gray-700'>Model: {product_name}</h3>
                            <p className='text-xl text-gray-700'>Price: <span className='font-bold text-green-500'>${resale_price}</span></p>
                            <p className='text-lg text-gray-700'>Main Price: <span className='font-bold text-yellow-500'>${original_price}</span></p>
                            <div className='relative inline-block'>
                                <h3 className='text-lg font-medium text-black'>Seller: {seller_name}</h3>
                                {isValid_seller && <div className="bg-blue-600 rounded-full text-white absolute top-0 right-[-14px]"><TiTick /></div>}
                            </div>
                            <div className='flex items-center gap-3 text-green-400'>
                                <small className='flex items-center gap-1 font-bold'><BiTime /> {post_time}</small>
                                <small className='flex items-center gap-1 font-bold'><ImLocation /> {location}</small>
                                <small className='flex items-center gap-1 font-bold'><GiDuration /> {uses_duration}</small>
                            </div>
                            <button className='btn btn-sm btn-success w-full'>Buy Now</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default ProductsCategory
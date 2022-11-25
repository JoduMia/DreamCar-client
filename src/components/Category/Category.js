import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../shared/Loader'

const Category = () => {

    const { data: categories, isLoading, isError, error } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch(`http://localhost:5000/category`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loader />
    }

    if (isError) return <h3 className='text-red-600 font-semibold text-center text-3xl py-36'>{error.message}</h3>

    return (
        <div className='px-6'>
            <h1 className='text-3xl py-10 font-bold text-center'>Products Category To Sell</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(({ _id, category, image }) => (
                        <Link key={_id} to={`/category/${_id}`}>
                            <div className='shadow-lg p-3 bg-gray-50 rounded'>
                                <div className='h-[300px]'>
                                    <img src={image} alt="Car images" className='h-[300px] w-full rounded border' />
                                </div>
                                <h3 className='text-xl font-semibold text-blue-600 uppercase py-3'>{category}</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Category
import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
    console.log (categories)
  return (
    <div className='max-w-[2000px] px-4 py-12 mx-auto'>
        <h1 className='text-orange-600 font-bold uppercase text-4xl text-center underline underline-offset-4 hover:text-blue-600'> Top Rated Menu Items</h1><br/>
        {/*  Categorys */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
            {categories.map((item, index)=>(
                <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center boredr shadow-lg hover:scale-105 duration-300 bg-gradient-to-l hover:bg-gradient-to-r' key={index}>
                    <h2 className='font-bold sm:text-xl '>{item.name}</h2>
                    <img src={item.image} alt={item.name}
                    className='w-20 '/>
                </div>
            
            
            ))}
        </div>
    </div>
  )
}

export default Category
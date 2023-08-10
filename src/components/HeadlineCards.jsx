import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[2000px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>

                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-3xl px-2 pt-4 '>Sun's Out, BPGO's Out</p>
                    <p className='px-2 '>Through 24/7</p>
                    <button className='bg-gray-50 text-black/70 hover:bg-gray-500 hover:text-white/80 border-none font-bold ' >Order Now</button>
                </div>
                <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>

                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-3xl px-2 pt-4 '>Sun's Out, BPGO's Out</p>
                    <p className='px-2 '>Through 24/7</p>
                    <button className='bg-gray-50 text-black/70 hover:bg-gray-500 hover:text-white/80 border-none font-bold ' >Order Now</button>
                </div>
                <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
            {/* Card */}
            <div className='rounded-xl relative'>

                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                    <p className='font-bold text-3xl px-2 pt-4 '>Sun's Out, BPGO's Out</p>
                    <p className='px-2 '>Through 24/7</p>
                    <button className='bg-gray-50 text-black/70 hover:bg-gray-500 hover:text-white/90 border-none font-bold ' >Order Now</button>
                </div>
                <img className='max-h-[1640px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src="https://images.pexels.com/photos/9397267/pexels-photo-9397267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>
        </div>
    )
}

export default HeadlineCards;

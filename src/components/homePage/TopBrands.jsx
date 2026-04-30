import Image from 'next/image';
import React from 'react';

const TopBrands = () => {
    return (
        <div className='bg-linear-to-r from-yellow-400 to-yellow-200 p-10'>
            <div className='max-w-7xl mx-auto flex items-center'>
                <div className='mt-[100px]'>
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full flex justify-center">

                            <Image
                                src={"https://i.ibb.co.com/LhCkq85z/sleveless-tank-top.jpg"}
                                width={350}
                                height={350}
                                alt='brandImg'
                                className='rounded-2xl'
                            />
                        </div>
                        <div id="item2" className="carousel-item w-full flex justify-center">
                            <Image
                                src={"https://i.ibb.co.com/84f9pWgN/lightwet-trouser.jpg"}
                                width={350}
                                height={350}
                                alt='brandImg'
                                className='rounded-2xl'
                            />
                        </div>
                        <div id="item3" className="carousel-item w-full flex justify-center">
                            <Image
                                src={"https://i.ibb.co.com/sJJL0d1m/linen.jpg"}
                                width={350}
                                height={350}
                                alt='brandImg'
                                className='rounded-2xl object-cover'
                            />
                        </div>

                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h1 className='text-4xl font-bold'>Top Brands That Define Summer Comfort and Style</h1>
                    <p>Discover summer favorites from brands that understand what it means <br /> to stay cool and stylish. From casual basics to trendy essentials, these names are trusted for making your summer easier, lighter, and more enjoyable.</p>
                    <button className="btn rounded-2xl bg-black text-white border border-none">  
                        Buy Now
                    </button>
                </div>

            </div>
        </div>


    );
};

export default TopBrands;
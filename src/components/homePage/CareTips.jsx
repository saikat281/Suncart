import Image from "next/image";
import { BsCart4 } from "react-icons/bs";


const CareTips = () => {
    return (
        <div className="bg-gray-800 mt-[100px] text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 h-[100vh] p-10 gap-6">
                <div className="row-span-6 col-span-6 flex flex-col justify-center p-3">
                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">Upgrade Your Summer Wardrobe with Light, Breathable,  and Trend-Forward Essentials</h1>
                        <p className="text-gray-300">Say goodbye to heavy layers and hello to easy summer fashion. Our pieces are made to help you move freely, stay cool, and look your best no matter where the season takes you.</p>

                        <button className="btn rounded-2xl bg-gray-500 text-white flex items-center gap-2 border border-none">
                            <div>
                                <BsCart4 />
                            </div>
                            Buy Now
                        </button>
                    </div>


                </div>
                <div className="row-span-6 col-span-3  relative">
                    <Image
                        src={"https://i.ibb.co.com/0jNBsnPw/tot-bag.jpg"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="productImg"
                        className="object-cover rounded-l-2xl"

                    />
                </div>
                <div className="row-span-3 col-span-3  relative">
                    <Image
                        src={"https://i.ibb.co.com/kVXK0BnN/sunscreen.jpg"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="productImg"
                        className="object-cover mx-auto"
                    />
                </div>
                <div className="row-span-3 col-span-3  relative">
                    <Image
                        src={"https://i.ibb.co.com/Jwd5r2wh/baseball-cap.jpg"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="productImg"
                        className="object-cover mx-auto"
                    />
                </div>
            </div>
        </div>

    );
};

export default CareTips;
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="h-[80vh]  bg-amber-50">
            {/* Overlay */}
            <div className="max-w-7xl h-full mx-auto flex justify-between items-center ">
                <div className="w-full h-full rounded-lg  flex items-center ">
                    <div className="max-w-7xl mx-auto px-6 ">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                            Turn Up the <span className="text-amber-300">Heat</span> 
                        </h1>
                        <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-800">
                            Everything you need to stay cool, stylish, and summer-ready.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link href="#">
                                <Button className="bg-amber-300 hover:bg-amber-200 cursor-pointer  px-4 py-2 rounded-xl">
                                    Shop Now
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
                <div>
                    <Image
                    src={"/banner4.png"}
                    width={1500}
                    height={1500}
                    alt="bannerImg"
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
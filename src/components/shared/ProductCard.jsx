import { FaStar } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const ProductCard = ({ brand }) => {

    const { image, name, rating, price } = brand;
    return (

        <div className="h-full card bg-base-100 w-96 shadow-sm p-3 rounded-xl">
            <figure>
                <img
                    src={brand.image}
                    alt={brand.name} />
            </figure>
            <div className="card-body mt-6">
                <h2 className="card-title text-2xl font-bold">{brand.name}</h2>
                <div className="flex items-center pt-3 gap-3">
                    <div>
                        <p className="font-medium flex items-center gap-2 text-xl">
                            <div>
                                <FaStar />
                            </div>
                            {brand.rating}</p>
                    </div>
                    <div>
                        <p className="font-medium flex items-center gap-2 text-xl">
                            <div>
                                <RiMoneyDollarCircleFill />
                            </div>
                            {brand.price}
                        </p>
                    </div>

                </div>

                <div className="card-actions justify-start">
                    <button className="btn bg-black text-white w-full">More Details</button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;
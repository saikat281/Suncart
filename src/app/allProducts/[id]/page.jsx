import { FaStar } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


const ProductDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log(id);
    const res = await fetch("https://suncart-cbn2.vercel.app/data.json");
    const data = await res.json();
    const selectedProduct = data.find(d => d.id == id);
    const { name, image, rating, price, description, category, stock } = selectedProduct
    return (
        <div className="max-w-7xl w-full h-[70vh] mx-auto  justify-center mt-[60px]">
            <div className="h-full w-full  card bg-base-100 w-96 shadow-xl p-3 rounded-xl  ">
                <figure >
                    <img className="h-full rounded-2xl"
                        src={image}
                        alt={name} />
                </figure>
                <div className="card-body mt-6 flex flex-col justify-between text-center">
                    <h2 className="card-title text-2xl font-bold mx-auto ">{name}</h2>
                    <div className="flex justify-center items-center pt-3 gap-3">
                        <div>
                            <p className="font-medium flex items-center gap-2 text-xl">
                                <div>
                                    <FaStar />
                                </div>
                                {rating}</p>
                        </div>
                        <div>
                            <p className="font-medium flex items-center gap-2 text-xl">
                                <div>
                                    <PiCurrencyDollarBold />
                                </div>
                                {price}
                            </p>
                        </div>

                    </div>
                    <div>
                        <p className="text-[16px] font-medium">Category:{category}</p>
                        <p className="text-[14px] font-bold">Stock:{stock}</p>
                         <p className="font-medium">{description}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductDetailsPage;
import ProductCard from "../shared/ProductCard";


const PopulerProducts = async () => {

    const res = await fetch("https://suncart-cbn2.vercel.app/data.json");
    const data = await res.json();
    //console.log(data);
    const TopBrands = data.slice(0, 3)

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-center mb-[60px] w-full py-4  bg-amber-200">Popular Products</h1>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-3 gap-4 ">
                    {
                        TopBrands.map(brand => <ProductCard key={brand.id} brand={brand}></ProductCard>)
                    }
                </div>
                
            </div>

        </div>

    );
};

export default PopulerProducts;
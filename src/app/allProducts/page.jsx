import ProductCard from "@/components/shared/ProductCard";


const AllProductsPage = async () => {
    const res = await fetch("https://suncart-cbn2.vercel.app/data.json");
    const data = await res.json();
    return (
        <div className="max-w-7xl mx-auto mt-[100px]">
            <h1 className="text-5xl text-center font-bold mb-[40px]">All products</h1>
            <div className="grid grid-cols-3 gap-6">
                {
                    data.map(d => <ProductCard key={d.id} brand={d}></ProductCard>)
                }
            </div>

        </div>
    );
};

export default AllProductsPage;
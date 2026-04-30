

const PopulerProducts = async() => {

    const res = await fetch("/data.json");
    const data = await res.json();
    console.log(data);
    return (
        <div>
            popular products
        </div>
    );
};

export default PopulerProducts;
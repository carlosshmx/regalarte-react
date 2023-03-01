function ProductCard({item}) {

  return (
        <div className="w-full max-w-sm rounded-lg shadow bg-zinc-800 border-zinc-500">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={item.url}
              alt="product image"
            />
          </a>
          <div className="px-5 py-4">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-white">
                {item.text}
              </h5>
            </a>

            <div className="flex items-center justify-between ">
              <span className="text-2xl font-bold text-white">
                {item.price}
              </span>
              <a
                href="#"
                className=" text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-pink-800 hover:bg-pink-700 focus:ring-pink-600"
              >
                Ver mas
              </a>
            </div>
          </div>
        </div>
  );
}

export default ProductCard;

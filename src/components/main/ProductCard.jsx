function ProductCard({item}) {

  return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-800 dark:border-zinc-500">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={item.url}
              alt="product image"
            />
          </a>
          <div className="px-5 py-4">
            <a href="#">
              <h5 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.text}
              </h5>
            </a>

            <div className="flex items-center justify-between ">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {item.price}
              </span>
              <a
                href="#"
                className=" text-white bg-pink-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-800 dark:hover:bg-pink-700 dark:focus:ring-pink-600"
              >
                Ver mas
              </a>
            </div>
          </div>
        </div>
  );
}

export default ProductCard;

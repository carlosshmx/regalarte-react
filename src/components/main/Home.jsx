import SlideShow from "./SlideShow";
import ProductCard from "./ProductCard";

let products = [
    {
      id: 1,
      text: "cakes",
      price: "Desde $10",
      url: "https://res.cloudinary.com/carlosshmc/image/upload/v1626985688/Regalarte/IMG-20200917-WA0046-01_gr04zc.jpg"
    },
    {
      id: 2,
      text: "Combos",
      price: "Desde $15",
      url: "https://res.cloudinary.com/carlosshmc/image/upload/v1626987046/Regalarte/IMG-20201024-WA0025-01_n0aj3k.jpg"
    },
    {
      id: 3,
      text: "Donuts",
      price: "6 x $5",
      url: "https://res.cloudinary.com/carlosshmc/image/upload/v1626985087/Regalarte/df095418-07fd-442c-8a04-008404604d73-01_esntcf.jpg"
    },
];

function Home() {
  return (
    <>
      <SlideShow />
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">
          DULCES CAPRICHOS PARA TODOS LOS GUSTOS
        </h1>
        <div className="flex gap-6 justify-center flex-wrap">
            {products.map((item) => (
                <ProductCard item={item}/>
            ))}
        </div>
        
        
      </div>
    </>
  );
}

export default Home;

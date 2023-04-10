import SlideShow from "./SlideShow";
import Categories from "./Categories";


function Home() {


  return (
    <div className="flex-grow-1">
        <SlideShow/>
        <div className="container mx-auto p-0 ">
          <Categories/>
          
          
        </div>
    </div>
  
    
  );
}

export default Home;

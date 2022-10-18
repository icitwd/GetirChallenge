import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import SortingBox from "./components/filters/SortingBox";
import BrandsBox from "./components/filters/BrandsBox";
import TagsBox from "./components/filters/TagsBox";
import Basket from "./components/Basket";
import ItemTypes from "./components/filters/ItemTypes";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-row space-x-6 justify-center items-start w-11/12 p-4 mx-auto">
        <div className="flex flex-col space-y-4">
          <SortingBox />
          <BrandsBox />
          <TagsBox />
        </div>

        <div className="flex flex-col space-y-4" style={{ width: 608 }}>
          <h4 className="text-gray-400">Products</h4>
          <ItemTypes />

          <ProductList />
        </div>
        <Basket />
      </div>
      <Footer />
    </div>
  );
}

export default App;

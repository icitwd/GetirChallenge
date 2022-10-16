import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import SortingBox from "./components/filters/SortingBox";
import BrandsBox from "./components/filters/BrandsBox";
import TagsBox from "./components/filters/TagsBox";
import Cart from "./components/Cart";
import MugButton from "./components/MugButton";

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
          <h3 className="text-gray-400">Products</h3>
          <div className="flex flex-row space-x-2">
            <MugButton>mug</MugButton>
            <MugButton>shirt</MugButton>
          </div>

          <ProductList />
        </div>
        <Cart />
      </div>
    </div>
  );
}

export default App;

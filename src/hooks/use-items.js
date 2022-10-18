import { logDOM } from "@testing-library/react";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

import items from "../data/items.json";
import { selectBasket } from "../redux/reducers/basketSlice";
import {
  selectBrandFilters,
  selectItemTypesFilter,
  selectSortByFilter,
  selectTagFilters,
} from "../redux/reducers/filtersSlice";
import Service from "../service/service.js";

function useItems() {
  const basket = useSelector(selectBasket);
  const brandFilters = useSelector(selectBrandFilters);
  const tagFilters = useSelector(selectTagFilters);
  const sortByFilter = useSelector(selectSortByFilter);
  const itemTypesFilters = useSelector(selectItemTypesFilter);
  const itemService = new Service();
  const [products, setProducts] = useState([]);

  itemService.getCompanies.then((result) => setProducts(result));
  console.log(products);

  const filteredItems = useMemo(
    () =>
      items
        .filter((item) =>
          brandFilters.length > 0
            ? brandFilters.includes(item.manufacturer)
            : true
        )
        .filter((item) =>
          tagFilters.length > 0
            ? item.tags.some((itemTag) => {
                return tagFilters.includes(itemTag);
              })
            : true
        )
        .filter((item) =>
          itemTypesFilters.length > 0
            ? itemTypesFilters.includes(item.itemType)
            : true
        )
        .sort((a, b) => {
          if (sortByFilter === "price_low_to_high") {
            return parseFloat(a.price) - parseFloat(b.price);
          }

          if (sortByFilter === "price_high_to_low") {
            return parseFloat(b.price) - parseFloat(a.price);
          }

          if (sortByFilter === "new_to_old") {
            return new Date(b.added) - new Date(a.added);
          }

          if (sortByFilter === "old_to_new") {
            return new Date(a.added) - new Date(b.added);
          }

          return null;
        }),
    [brandFilters, itemTypesFilters, sortByFilter]
  );

  const totalBasketPrice = useMemo(() => {
    const basketItems = items
      .filter((item) =>
        basket.map((basketItem) => basketItem.id).includes(item.slug)
      )
      .map((item) => {
        const foundItem = basket.find(
          (basketItem) => basketItem.id === item.slug
        );

        return {
          ...item,
          quantity: foundItem.quantity,
        };
      });

    return basketItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }, [basket]);

  return { items, filteredItems, totalBasketPrice };
}

export default useItems;

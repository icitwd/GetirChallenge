import { useMemo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FetchService from "../services/FetchService";
import items from "../data/items.json";
import { addBasketItem, selectBasket } from "../redux/reducers/basketSlice";
import {
  selectBrandFilters,
  selectItemTypesFilter,
  selectSortByFilter,
  selectTagFilters,
} from "../redux/reducers/filtersSlice";

function useItems() {
  const basket = useSelector(selectBasket);
  const brandFilters = useSelector(selectBrandFilters);
  const tagFilters = useSelector(selectTagFilters);
  const sortByFilter = useSelector(selectSortByFilter);
  const itemTypesFilters = useSelector(selectItemTypesFilter);
  const itemService = new FetchService();

  const [fetchedItems, setFetchItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await itemService.getItems();

      setFetchItems(data.data);
    };
    fetchData().catch(console.error);
  }, [addBasketItem]);
  console.log(fetchedItems);

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
    [brandFilters, itemTypesFilters, sortByFilter, tagFilters]
  );

  const totalBasketPrice = useMemo(() => {
    //basketda itemler id olarak var. objeye erişmek için filter+map, 2. map de reducerdeki quantitye ulaşmak için var.
    //mutation:
    const basketItems = fetchedItems
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

  return { fetchedItems, filteredItems, totalBasketPrice, items };
}

export default useItems;

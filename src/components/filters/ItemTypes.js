import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useItems from "../../hooks/use-items";

import {
  addItemTypeFilter,
  selectItemTypesFilter,
} from "../../redux/reducers/filtersSlice";
import ItemTypeButton from "../buttons/ItemTypeButton";

const ItemTypes = () => {
  const itemTypesFilter = useSelector(selectItemTypesFilter);
  const dispatch = useDispatch();
  const { items } = useItems();

  const itemTypes = useMemo(
    () => [...new Set(items.map((item) => item.itemType))],
    [items]
  );

  return (
    <div className="flex flex-row space-x-2">
      {itemTypes.map((itemType) => (
        <ItemTypeButton
          key={itemType}
          text={itemType}
          onClick={() => dispatch(addItemTypeFilter(itemType))}
          selected={itemTypesFilter.includes(itemType)}
        />
      ))}
    </div>
  );
};

export default ItemTypes;

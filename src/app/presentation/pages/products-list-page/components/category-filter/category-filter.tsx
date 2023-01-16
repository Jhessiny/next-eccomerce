import React, { memo, useMemo } from "react";
import Select from "react-select";

const categories = [
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting",
];

type Props = {
  setFilter: (value?: string) => void;
};

export const CategoryFilter = memo(({ setFilter }: Props) => {
  const options = useMemo(
    () => [...categories.map((item) => ({ value: item, label: item }))],
    []
  );

  return (
    <div className="flex justify-center mb-8">
      <label className="hidden" htmlFor="category" id="category-label">
        Category
      </label>
      <Select
        instanceId="category"
        id="category"
        aria-labelledby="category-label"
        className="p-3 w-80"
        onChange={(option) => setFilter(option?.value)}
        options={options}
        placeholder="Filter by category"
        isClearable
      />
    </div>
  );
});

CategoryFilter.displayName = "CategoryFilter";

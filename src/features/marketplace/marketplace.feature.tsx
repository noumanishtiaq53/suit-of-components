import { BrowseCategoriesList } from "./browse-categories-list/browse-categories-list";
import { ProductsList } from "./products-list/products-list";

export const MarketplaceFeature = () => {
  return (
    <>
      <BrowseCategoriesList />
      <br />
      <ProductsList />
    </>
  );
};

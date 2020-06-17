export const filterPrice = (collections, price) => {
  if (price === "lower") {
    // console.log("fire");
    return collections.sort((a, b) => a.price - b.price);
  } else {
    return collections.sort((a, b) => b.price - a.price);
  }
};

export const filterType = (collections, itemType) =>
  collections.filter((item) => item.itemType === itemType);

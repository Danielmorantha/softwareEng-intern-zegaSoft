// function plus() {

//     let companyName : string = "zegasoft"
// }

// let companyName = "bri"

// companyName = "mandiri"

// const kelas : 


// function plus(){
//     let companyName : string = "zegaSoft"
// }

// type Category = {
//     id: number;
//     categoryName: string;
//   };
  
//   type ProductData = {
//     id: number;
//     category: Category;
//     productName: string;
//     quantity: number;
//   };
  
//   const productCollection: ProductData[] = [];
  
//   function addProductCollection(newProduct: ProductData) {
//     productCollection.push(newProduct);
//   }
  
//   addProductCollection({ id: 1, category: { id: 1, categoryName: "car" }, productName: "Prelude", quantity: 1 });
//   addProductCollection({ id: 2, category: { id: 2, categoryName: "car" }, productName: "Jazz", quantity: 1 });
//   addProductCollection({ id: 3, category: { id: 3, categoryName: "car" }, productName: "CRV", quantity: 1 });
  
//   console.log(productCollection);


type Category = {
  id: number;
  categoryName: string;
};

type ProductData = {
  id: number;
  category: Category;
  productName: string;
  quantity: number;
};

const productCollection: ProductData[] = [];

function addProductCollection(newProduct: ProductData) {
  productCollection.push(newProduct);
}

function findProductById(id: number): ProductData | undefined {
  return productCollection.find((product) => product.id === id);
}

function ubahProduct(id: number, newProductData: ProductData) {
  const productIndex = productCollection.findIndex((product) => product.id === id);
  if (productIndex !== -1) {
    productCollection[productIndex] = newProductData;
  }
}

function filterProductsByCategory(categoryName: string): ProductData[] {
  return productCollection.filter((product) => product.category.categoryName === categoryName);
}

addProductCollection({ id: 1, category: { id: 1, categoryName: "car" }, productName: "Prelude", quantity: 1 });
addProductCollection({ id: 2, category: { id: 2, categoryName: "car" }, productName: "Jazz", quantity: 1 });
addProductCollection({ id: 3, category: { id: 3, categoryName: "bike" }, productName: "Mountain Bike", quantity: 2 });

console.log(productCollection);

ubahProduct(2, { id: 2, category: { id: 2, categoryName: "car" }, productName: "Fit", quantity: 2 });
console.log(productCollection);

const carProducts = filterProductsByCategory("car");
console.log("Car Products:", carProducts);

const bikeProducts = filterProductsByCategory("bike");
console.log("Bike Products:", bikeProducts);

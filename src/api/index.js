const apiUrl = "https://dummyjson.com/products";
// export async function fetchProducts() {
//   const response = await fetch(apiUrl);

//   if (!response.ok) {
//     throw new Error("Ürünler getirelemedi.");
//   }

//   return response.json();
// }

export async function fetchSingleProduct(id) {
  const response = await fetch(`${apiUrl}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Ürün getirilemedi.");
  }

  return response.json();
}

// export async function fetchProductCategories() {
//   const response = await fetch(`${apiUrl}/categories`);
//   if (!response.ok) {
//     throw new Error("Kategoriler getirilemedi");
//   }
//   return response.json();
// }
// export async function fetchCategorisedProducts(category) {
//   const response = await fetch(`${apiUrl}/category/${category}`);
//   if (!response.ok) {
//     throw new Error("Ürünler getirilemedi");
//   }
//   return response.json();
// }

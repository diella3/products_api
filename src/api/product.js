import api from "./api";

export const getProducts = (search = "") => {
    return api.get(`products/search?q=${search}`);
};
export const getProductsCategories = () => {
    return api.get(`products/categories`);
};
export const getProductsByCategory = (category) => {
    return api.get(`products/category/${category}`);
};



export const addProduct = (product) => {
    return api.post(`products/add`, product);
}
export const editProduct = async (product) => {
    console.log('====================', product)
    return api.put(`products/${product.id}`, JSON.stringify(product))
}

export const deleteProduct = () => {
    return api.delete(`products/1`)
}
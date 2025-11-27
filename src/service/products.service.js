import { getAllProducts, updateProducts, addProducts, deleteProducts } from "../models/products.model.js";

export const getAllProductsService = async () => {
  return new Promise(async (res, rej) => {
    try {
      const products = await getAllProducts();
      res(products);
    } catch (error) {
      rej("Error al obtener los productos", error);
    }
  });
};

export const getProductByIdService = async (id) => {
  return new Promise(async (res, rej) => {
    try {
      const products = await getAllProducts();
      res(products.find((product) => product.id === id));
    } catch (error) {
      rej("Error al obtener el producto por ID", error);
    }
  });
};

export async function addProductsService(product) {
  return new Promise(async (res, rej) => {
    try {
      const newProducts = await addProducts(product);
      console.log("Producto agregado:", newProducts);
      res(newProducts);
    } catch (error) {
      console.error("Error al agregar documento:", error);
      rej("Error al agregar el producto", error);
    }
  });
}

export async function deleteProductsService(id) {
  return new Promise(async (res, rej) => {
    try {
      await deleteProducts(id);
      console.log("Producto eliminado con ID:", id);
      res();
    } catch (error) {
      console.error("Error al eliminar documento:", error);
      rej("Error al eliminar el producto", error);
    }
  });
}

export async function updateProductsService(id, product) {
  return new Promise(async (res, rej) => {
    try {
      const updatedProduct = await updateProducts(id, product);
      console.log("Documento actualizado con ID:", id);
      res(updatedProduct);
    } catch (error) {
      console.error("Error al actualizar documento:", error);
      rej("Error al actualizar el producto", error);
    }
  });
}

import {
  getAllProductsService,
  getProductByIdService,
  addProductsService,
  deleteProductsService,
  updateProductsService,
} from "../service/products.service.js";

const getProducts = async (req, res) => {
  const products = await getAllProductsService();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res
        .status(400)
        .json({ message: "⚠ ID del producto es requerido" });
    }
    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ message: "❌ Producto no encontrado" });
    }
    res.status(200).json({ message: "✅ Producto encontrado", product });
  } catch (error) {
    console.error("Error:", error);
    res
      .status(error.status || 500)
      .json({ message: error.message || "❌ Error al obtener el producto" });
  }
};

const addProducts = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = await addProductsService(product);
    res.status(201).json({ message: "Producto agregado", product: newProduct });
  } catch (error) {
    res.status(500).json({ error: "Error al agregar el producto" });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res.status(400).json({ message: "❎ID del producto es requerido" });
    } else {
      const result = await deleteProductsService(id);
      res
        .status(200)
        .json({ message: "✅ Producto eliminado exitosamente", result });
    }
  } catch (error) {
    if (error && error.status === 404)
      return res.status(404).json({ message: "❌ No se encontro el producto" });
    res.status(500).json(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

const updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = req.body;
    if (id && product) {
      const updatedProduct = await updateProductsService(id, product);
      res
        .status(200)
        .json({ message: "Producto actualizado", product: updatedProduct });
    } else {
      res.status(400).json({ error: "ID y producto son requeridos" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

export {
  getProducts,
  getProductById,
  addProducts,
  deleteProducts,
  getAllProducts,
  updateProducts,
};

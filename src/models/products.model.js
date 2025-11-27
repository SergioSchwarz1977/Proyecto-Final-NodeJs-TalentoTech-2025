import { db } from "../data/data.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

//Obtengo todos los productos
export async function getAllProducts() {
  return new Promise(async (res, rej) => {
    try {
      const querrySnapshot = await getDocs(productsCollection);
      const products = [];
      querrySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      res(products);
    } catch (error) {
      rej("Error al obtener los productos", error);
    }
  });
}

//obtengo un producto por ID
export async function getProductById(id) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        res({ ...docSnap.data(), id: docSnap.id });
      } else {
        console.log("No se encontro el producto");
        error.status = 404;
        rej("No se encontro el producto" , error);
      }
    } catch (error) {
      console.log(error);
      rej("Error al buscar el producto" + error);
    }
  });
}

//Guardo un producto
export async function addProducts(product) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, "products"), product);
      res({ id: docRef.id, ...product });
    } catch (error) {
      rej("Error al agregar el producto", error);
    }
  });
}

//elimino un producto
export async function deleteProducts(id) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        const err = new Error("No se encontro el producto");
        err.status = 404;
        return rej({ message: "❌ No se encontro el producto" });
      }
      await deleteDoc(docRef);
      console.log(" ✅Producto eliminado con exito");
      res("Producto eliminado con exito");
    } catch (error) {
      rej(error);
    }
  });
}

//actualizo un producto
export async function updateProducts(id, product) {
  return new Promise(async (res, rej) => {
    try {
      const docRef = doc(db, "products", id);
      await updateDoc(docRef, product, { merge: true });
      res({ id, ...product });
    } catch (error) {
      rej("Error al actualizar el producto", error);
    }
  });
}

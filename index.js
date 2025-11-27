import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import productsRoute from "./src/routes/products.route.js";
import routeLogin from "./src/routes/auth.routes.js";
import { authentication } from "./src/midlewere/authentication.js";

const app = express();
const PORT = process.env.PORT || 3000;

const corsConfig = {
  origin: ["http://localhost:3000",'http://mi_sitio.com'],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(express.json());
app.use(cors(corsConfig));
app.use("/api", productsRoute);
app.use("/api", routeLogin);
app.use(authentication);


app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});


app.use((req, res, next) => {
  res.status(404).send("Recurso no encontrado");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});

export default app;
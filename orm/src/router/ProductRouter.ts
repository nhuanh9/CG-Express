import {Router} from "express";
import productController from "../controller/ProductController";

const productRouter = Router();
productRouter.get('', productController.findAll);
export default productRouter;

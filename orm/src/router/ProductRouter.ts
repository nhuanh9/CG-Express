import {Router} from "express";
import productController from "../controller/ProductController";

const productRouter = Router();
productRouter.get('', productController.findAll);
productRouter.post('', productController.add);
export default productRouter;

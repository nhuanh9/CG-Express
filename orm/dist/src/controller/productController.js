"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductService_1 = __importDefault(require("../service/ProductService"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await ProductService_1.default.findAll();
            res.json(list);
        };
    }
}
exports.default = new ProductController();
//# sourceMappingURL=ProductController.js.map
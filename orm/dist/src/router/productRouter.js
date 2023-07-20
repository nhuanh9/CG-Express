"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controller/ProductController"));
const productRouter = (0, express_1.Router)();
productRouter.get('', ProductController_1.default.findAll);
productRouter.post('', ProductController_1.default.add);
productRouter.put('/:id', ProductController_1.default.update);
productRouter.delete('/:id', ProductController_1.default.delete);
exports.default = productRouter;
//# sourceMappingURL=ProductRouter.js.map
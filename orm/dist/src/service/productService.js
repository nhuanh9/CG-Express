"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Product_1 = require("../entity/Product");
class ProductService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Product_1.Product);
        this.findAll = async () => {
            return await this.repository.find();
        };
        this.add = async (data) => {
            return await this.repository.save(data);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.find({ where: { id: id } });
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=ProductService.js.map
import { Product } from "../entity/Product";
import { Service } from "./Service";
declare class ProductService implements Service<Product> {
    private repository;
    findAll: () => Promise<Product[]>;
    add: (data: any) => Promise<any>;
    delete: (id: any) => Promise<import("typeorm").DeleteResult>;
    findById: (id: any) => Promise<Product[]>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
}
declare const _default: ProductService;
export default _default;

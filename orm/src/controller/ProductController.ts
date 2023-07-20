import productService from "../service/ProductService";

class ProductController {
    findAll = async (req, res) => {
       let list = await productService.findAll();
       res.json(list)
    }
}

export default new ProductController();

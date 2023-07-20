import productService from "../service/ProductService";

class ProductController {
    findAll = async (req, res) => {
       let list = await productService.findAll();
       res.json(list)
    }
    add = async (req, res) => {
       let data = await productService.add(req.body);
       res.json(data)
    }
}

export default new ProductController();

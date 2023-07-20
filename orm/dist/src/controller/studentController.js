"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const studentService_1 = __importDefault(require("../service/studentService"));
class StudentController {
    constructor() {
        this.findAll = async (req, res) => {
            let list = await studentService_1.default.getAll();
            res.json(list);
        };
    }
}
exports.default = new StudentController();
//# sourceMappingURL=studentController.js.map
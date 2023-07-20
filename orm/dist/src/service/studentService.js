"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const student_1 = require("../entity/student");
class StudentService {
    constructor() {
        this.getAll = async () => {
            let products = await this.studentRepository.find();
            return products;
        };
        this.add = async (product) => {
            await this.studentRepository.save(product);
        };
        this.studentRepository = data_source_1.AppDataSource.getRepository(student_1.Student);
    }
}
exports.default = new StudentService();
//# sourceMappingURL=studentService.js.map
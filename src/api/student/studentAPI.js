import axios from "../../utils/axios"

class Student{
    updateStudent(obj) {
        let url = "/api/student/update"
        return axios.put(url,{obj})
    }
}

export default new Student()
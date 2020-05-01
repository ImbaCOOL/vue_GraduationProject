import axios from "../utils/axios"

class Student{
    updateStudent(obj) {
        let url = "/api/student/update"
        return axios.put(url,{obj})
    }
    findStudent() {
        let url = "/api/student/find"
        return axios.get(url)
    }
    delStudent(stuID) {
        let url = "/api/student/del"
        return axios.delete(url,{data:{stuID}})
    }
    findByID(stuID) {
        let url = "/api/student/findByID"
        return axios.get(url,{params:{stuID}})
    }
}

export default new Student()
import axios from "../utils/axios"

class Teacher{
    updateTeacher(obj) {
        let url = "/api/teacher/update"
        return axios.put(url,{obj})
    }
    findTeacher() {
        let url = "/api/teacher/find"
        return axios.get(url)
    }
    delTeacher(teacherID) {
        let url = "/api/teacher/del"
        return axios.delete(url,{data:{teacherID}})
    }
    findByID(teacherID) {
        let url = "/api/teacher/findByID"
        return axios.get(url,{params:{teacherID}})
    }
    addTeacher(obj) {
        let url = "/api/teacher/add"
        return axios.post(url,{obj})
    }
}

export default new Teacher()
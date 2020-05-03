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
    updateTeachSchedule(obj) {
        let url = "/api/teachSchedule/update"
        return axios.put(url,{obj})
    }
    findTeachSchedule() {
        let url = "/api/teachSchedule/find"
        return axios.get(url)
    }
    delTeachSchedule(classID) {
        let url = "/api/teachSchedule/del"
        return axios.delete(url,{data:{classID}})
    }
    findTSByID(classID) {
        let url = "/api/teachSchedule/findByID"
        return axios.get(url,{params:{classID}})
    }
    addTeachSchedule(obj) {
        let url = "/api/teachSchedule/add"
        return axios.post(url,{obj})
    }
    findTSByTeacherID(teacherID) {
        let url = "/api/teachSchedule/findByTeacherID"
        return axios.get(url,{params:{teacherID}})
    }
}

export default new Teacher()
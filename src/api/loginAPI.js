import axios from "../utils/axios"

class Login{
    loginByAdmin(username,password) {
        let url = "/api/admin/login"
        return axios.get(url,{params:{username,password}})
    }
    loginByTeach(username,password) {
        let url = "/api/teacher/login"
        return axios.get(url,{params:{username,password}})
    }
    loginByStu(username,password) {
        let url = "/api/student/login"
        return axios.get(url,{params:{username,password}})
    }
    changePSWadmin(username,password) {
        let url = "/api/admin/changePSW"
        return axios.put(url,{username,password})
    }
    changePSWstu(username,password) {
        let url = "/api/student/changePSW"
        return axios.put(url,{username,password})
    }
    changePSWteach(username,password) {
        let url = "/api/teacher/changePSW"
        return axios.put(url,{username,password})
    }
    uploadImg(formdata) {
        let url = "/api/upload/img"
        return axios.post(url,formdata)
    }
}

export default new Login()
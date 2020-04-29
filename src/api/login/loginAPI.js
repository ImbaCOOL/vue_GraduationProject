import axios from "../../utils/axios"

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
}

export default new Login()
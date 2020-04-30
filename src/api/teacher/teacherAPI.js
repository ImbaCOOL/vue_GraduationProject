import axios from "../../utils/axios"

class Teacher{
    updateTeacher(obj) {
        let url = "/api/teacher/update"
        return axios.put(url,{obj})
    }
}

export default new Teacher()
import axios from "../utils/axios"

class Admin{
    updateAdmin(obj) {
        let url = "/api/admin/update"
        return axios.put(url,{obj})
    }
}

export default new Admin()
import { create } from "apisauce"

const api = create({
    baseURL: 'http://192.168.1.25:8080',
    headers: { Accept: 'application/vnd.github.v3+json', },  
})

export default api;
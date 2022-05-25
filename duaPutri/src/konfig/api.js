import { create } from "apisauce"

const api = create({
    baseURL: 'http://192.168.1.27/duaPutriApi',
    headers: { Accept: 'application/vnd.github.v3+json' },  
})

export default api;
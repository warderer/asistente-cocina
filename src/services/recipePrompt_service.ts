import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000'

const sendRecipePrompt = (data: any) => axios.post(`${BASE_URL}/api`, data)

export {
    sendRecipePrompt
}
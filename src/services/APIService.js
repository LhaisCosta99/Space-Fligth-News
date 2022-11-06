import axios from "axios";

const BASE_URL = process.env.BASE_URL

class SpaceFligthNews{
    static async get(){
        try {
            const response = await axios.get(BASE_URL)
            return response.data
        } catch (error) {
            return {error: true, message: error?.message}
        }
    }
}
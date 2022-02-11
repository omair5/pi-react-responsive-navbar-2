import { base_url } from "../../Config"
import axios from "axios"

const apiURL = `${base_url}/api/payment/validate/request`

const FundsDonateDetail = async (body) => {
    const response = await axios.post(apiURL, body)
    const data = await response.json()
    return data
}

export default FundsDonateDetail;
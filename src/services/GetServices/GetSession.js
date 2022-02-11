import { base_url } from "../../Config"

const apiURL = `${base_url}/api/session`

const GetSession = async () => {
    try {
        const reponse = await fetch(apiURL)
        const data = await reponse.json()
        return data?.data?.session?.id
    }
    catch {
        console.log('can not able to fetch Session Id from GetServices/GetSession')
        return ''
    }
}
export default GetSession;
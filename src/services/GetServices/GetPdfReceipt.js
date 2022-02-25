// import { base_url } from "../../Config"

// const apiURL = `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`


const GetPdfReceipt = async () => {
    try {
        const res = await fetch("./test.json")
        const data = await res.json()
        console.log(data)
    }
    catch {
        console.log('CAN NOT ABLE TO FETCH PDF FILE')
        return ''
    }
}

export default GetPdfReceipt;
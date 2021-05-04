import axios from "axios"

export function push(url: string, domainName: string, apiKey: string) {
    return axios.post(url, {
        domainName: domainName
    }, {
        headers: {
            'x-api-key': apiKey
        }
    })
}
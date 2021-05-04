import {push} from "./push";

export function main() {
    const {PUSH_API_URL, PUSH_API_KEY, DOMAIN_NAME} = process.env

    if (PUSH_API_URL == null || PUSH_API_KEY == null || DOMAIN_NAME == null) {
        return
    }

    push(PUSH_API_URL, DOMAIN_NAME, PUSH_API_KEY)
        .then(res => console.log(res.statusText))
        .catch(err => console.error(err))
}
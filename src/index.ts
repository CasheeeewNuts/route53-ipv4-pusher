import {push} from "./push";
import "dotenv/config"
import cron from "node-cron"

const DEFAULT_SCHEDULE = '*/5 * * * *'
const schedule = process.env.SCHEDULE ?? DEFAULT_SCHEDULE

cron.schedule(schedule, main)

function main() {
    const {PUSH_API_URL, PUSH_API_KEY, DOMAIN_NAME} = process.env

    if (PUSH_API_URL == null || PUSH_API_KEY == null || DOMAIN_NAME == null) {
        return
    }

    push(PUSH_API_URL, DOMAIN_NAME, PUSH_API_KEY)
        .then(res => console.log(res.statusText))
        .catch(err => console.error(err))
}
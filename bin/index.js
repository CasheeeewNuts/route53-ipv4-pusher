#!/usr/bin/env node

require("dotenv/config")
const cron = require("node-cron")
const {main} = require('../lib/index.js');

const DEFAULT_SCHEDULE = '*/5 * * * *'
const SCHEDULE = process.env.SCHEDULE ?? DEFAULT_SCHEDULE

cron.schedule(SCHEDULE, main)
'use strict'

const moment = require('moment-timezone')
const config = require('config')
const prices = require('db-prices')



module.exports = (req, res, next) => {
	const dt = moment(req.query.date).tz(config.timezone)
	const now = moment().tz(config.timezone)

	let duration = 24 * 60 // minutes
	if (+moment(dt).startOf('day') === +moment(now).startOf('day'))
		duration = Math.floor((moment(dt).endOf('day') - dt) / 1000 / 60)

	prices(req.query.from, req.query.to, new Date(+dt), {duration})
	.then((data) => {
		for(let dat of data) delete dat.offer.routes;
		res.json(data)
	}, next)
	.catch(next)
}

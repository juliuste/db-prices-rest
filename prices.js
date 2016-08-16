'use strict'

const moment = require('moment-timezone')
const config = require('config')
const prices = require('db-prices')



const err400 = (msg) => {
	const e = new Error(msg)
	e.statusCode = 400
	return e
}



module.exports = (req, res, next) => {
	if ('string' !== typeof req.query.from)
		return next(err400('missing from parameter.'))
	if ('string' !== typeof req.query.to)
		return next(err400('missing to parameter.'))

	if (/^[0-9]+$/.test(req.query.date))
		req.query.date *= 1000 // convert to JS timestamp
	else if (!req.query.date) req.query.date = Date.now()
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

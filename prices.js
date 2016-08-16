'use strict'

const moment = require('moment-timezone')
const config = require('config')
const prices = require('db-prices')



module.exports = (req, res, next) => {
	let dt = new Date(req.query.date)
	dt.setHours(0,0,0,0)
	prices(req.query.from, req.query.to, dt)
	.then((data) => {
		for(let dat of data) delete dat.offer.routes;
		res.json(data)}, next)
	.catch(next)
}

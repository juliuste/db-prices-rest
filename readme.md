# db-prices-rest

A public HTTP REST API, exposing a clean interface to query the Deutsche Bahn Sparpreise API.

The public endpoint is available at `https://db-prices.juliuste.de`.

[![dependency status](https://img.shields.io/david/juliuste/db-prices-rest.svg)](https://david-dm.org/juliuste/db-prices-rest)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/db-prices-rest.svg)](https://david-dm.org/juliuste/db-prices-rest#info=devDependencies)
[![MIT License](https://img.shields.io/badge/license-MIT-black.svg)](https://opensource.org/licenses/MIT)

## Installation

```bash
git clone https://github.com/juliuste/db-prices-rest.git
cd db-prices-rest
npm install --production
```

## Usage

Adapt `config/default.json` to your needs and run `npm start`.


## `GET /`

Output from [`require('db-prices')()`](https://github.com/juliuste/db-prices)

- `from`: **Required.** Station id. (see [db-stations](https://github.com/derhuerst/db-stations/))
- `to`: **Required.** Station id. (see [db-stations](https://github.com/derhuerst/db-stations/))
- `date`: When? UNIX timestamp or [`moment`-parsable string](http://momentjs.com/docs/#/parsing/). Default: now.
- `class`: 1st class or 2nd class? Default: `2`.
- `noICETrains`: Default: `false`.
- `transferTime`: Minimum, in minutes. Default: `0`.
- `duration`: Search for routes in the next `n` minutes. Default: `1440` (1 day).
- `preferFastRoutes`: Default: `true`.
- `travellers`: Default: `JSON.stringify([{bc: 0, typ: 'E', alter: 30}])`.

`Content-Type`: `application/json`

```shell
curl 'https://db-prices.juliuste.de/?from=8096003&to=8000261'
```

## Similar Projects

- [db-prices](https://github.com/juliuste/db-prices/) – "Find the cheapest routes using the DB Sparpreise API."
- [db-hafas-rest](https://github.com/juliuste/db-hafas-rest/) – "DB Hafas REST API"
- [db-stations](https://github.com/derhuerst/db-stations/) – "A list of DB stations."

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/db-prices-rest/issues).

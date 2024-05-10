function requestLoggger(req, res, next) {
    console.log(`METHOD: ${req.method}`)
    console.log(`URL: ${req.url}`)
    if (req.body) console.log(`BODY: `, req.body)

    next()
}

module.exports = requestLoggger
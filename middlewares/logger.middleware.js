function getDevice(userAgent = ''){
    if(/postman/i.test(userAgent)) return 'Postman'
    if(/curl/i.test(userAgent)) return 'curl'
    if(/ipad|tablet/i.test(userAgent)) return 'Tablet'
    if(/mobile|android|iphone/i.test(userAgent)) return 'Mobile'
    if(/windows|macintosh|linux/i.test(userAgent)) return 'Desktop'
    return 'Unknown device'
}

module.exports = (req, res, next) => {
    const start = process.hrtime.bigint()

    res.on('finish', () => {
        const ms = (process.hrtime.bigint() - start) / 1000000n
        const device = getDevice(req.headers['user-agent'])
        console.log(`method: ${req.method}, time: ${ms}ms, device: ${device}`)
    })

    next()
}

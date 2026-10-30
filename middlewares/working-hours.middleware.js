module.exports = (req, res, next) => {
    const hour = new Date().getHours()

    if(hour < 10 || hour >= 18){
        return res.status(403).json({
            error: true,
            message: 'server works only during working hours 10:00 - 18:00'
        })
    }

    next()
}

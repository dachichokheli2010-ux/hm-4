module.exports = (req, res, next) => {
    const requiredFields = ['fullName', 'email', 'age', 'isSmoker']
    const missingFields = requiredFields.filter(field => !req.body || !req.body.hasOwnProperty(field) || req.body[field] === '')

    if(missingFields.length){
        return res.status(400).json({
            error: true,
            message: `${missingFields.join(', ')} is required`
        })
    }

    next()
}

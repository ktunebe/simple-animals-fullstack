const protectedRoutes = [
    '/private-route',
    '/protected-route',
    '/secret-route'
]

function blockPrivateRoutes(req,res, next) {
    if (protectedRoutes.includes(req.url)) {
        res.redirect('/')
        console.log(`Accessing ${req.url} is not allowed`)
    }

    next()
}

module.exports = blockPrivateRoutes
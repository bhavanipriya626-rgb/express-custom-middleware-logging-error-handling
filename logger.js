function logger(req, res, next) {
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${req.method} ${req.url}`);

    next(); // IMPORTANT: must call next()
}

module.exports = logger;
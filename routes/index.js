exports.index = function(req, res) {
    res.render('landing', {
        pCdata: {
            year: new Date().getFullYear()
        }
    });
};

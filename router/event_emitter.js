module.exports = function (app) {
    app.get('/event_emitter/event_emitter', (req, res) => {
        let x = require("../src/event_emitter/event_emitter");
        console.log("X", x)
        x.main(req, res);
    })
}
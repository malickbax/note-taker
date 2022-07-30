// Calling required files
const router = require("express").Router();
const fs = require("fs");

// GET starts here
router.get("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

// POST starts here
router.post("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        let raw = JSON.parse(data);
        raw.push(req.body);
        fs.writeFile("./db/db.json", JSON.stringify(raw), function(err) {
            if(err) return err;
            console.log("Success");
        });
    });
    res.end();
});

// DELETE starts here
router.delete("/notes/:id", function(req, res) {
    let id = req.params.id;
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        let raw = JSON.parse(data);
        for (let i = 0; i < raw.length; i++) {
            if (id == raw[i].id) {
                raw.splice(i,1);
                fs.writeFile("./db/db.json", JSON.stringify(raw), function(err) {
                    if (err) throw err;
                    console.log("Note Deleted");
                });
            };
        };
    });    
    res.end(); 
});

// Export file
module.exports = router;
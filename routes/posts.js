const express = require('express');
const router = express.Router();
const db = require("../Instagram/database")

// Get All Post
router.get('/', async function(req, res, next) {

    const result = await db.getallPost();
    const output = {
        data: result.rows
    }
    res.json(output);
    
});

// Get Post by ID
router.get('/:id', async function(req, res, next){

    const result = await db.getPostbyid(req.params.id);
    
    if (!result) {
        res.status(500).json({ status: `Error occured during database query` });
        return;
    }

    if (result.rowCount > 0) {
        const output = {
            data: result.rows[0],
        };
        res.json(output);
    } else {
        res
            .status(404)
            .json({ status: `Not found id ${req.params.id} on database` });
    }
})

router.post('/', async function(req, res, next){
    
    const result = await db.Insertpostclassification(req.body);

    if (!result) {
        res.status(500).json({ status: `Error occured during database query` });
        return;
    }
    const output = {
        data: result.rows
    }
    res.json(output)
})

router.put('/', async function(req, res, next){
    
    const result = await db.Updatepostclassification(req.body);

    if (!result) {
        res.status(500).json({ status: `Error occured during database query` });
        return;
    }
    
    const output = {
        data: result.rows
    }
    res.json(output)
})




module.exports = router;
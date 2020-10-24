const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
})


async function getallPost() {
    //post_classification_mana
    const sql = `select * from post_mana limit 100`;

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

async function getPostbyid(id) {

    const sql = `select * from post_mana where id = ${id}`

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null
    }
}

async function Insertpostclassification(post) {

    const sql = `INSERT INTO post_classification_mana (shortcode, ads, timestamp)
    VALUES('${post.shortcode}','${post.ads}','${post.timestamp}') `

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null
    }
}

async function Updatepostclassification(post) {

    const sql = `update post_classification_mana set
    ads = '${post.ads}',
    timestamp = ${post.timestamp}
    where shortcode = '${post.shortcode}'`;

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null
    }
}



module.exports = {
    getallPost,
    getPostbyid,
    Insertpostclassification,
    Updatepostclassification
}
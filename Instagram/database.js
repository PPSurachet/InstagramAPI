const { Pool } = require('pg')

const pool = new Pool({
    user: 'manalab',
    host: '35.247.188.203',
    database: 'manalab',
    password: 'zxc123**',
    port: 5432,
})

// const pool = new Pool({
//     user: process.env.DATABASE_NAME,
//     host: process.env.DATABASE_HOST,
//     database: 'manalab',
//     password: 'zxc123**',
//     port: 5432,
// })


async function getallPost(){
    const sql = `select * from post_classification_mana limit 20`;

    try {
        const data = await pool.query(sql);
        return data;
    }catch (err){
        console.log(err);
        return null;
    }
}

async function getPostbyid(id){

    const sql = `select * from post_mana where id = ${id}`

    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null
    }
}

async function Insertpostclassification(post){

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

async function Updatepostclassification(post){

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



module.exports ={
    getallPost,
    getPostbyid,
    Insertpostclassification,
    Updatepostclassification
}
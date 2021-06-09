var express = require('express');
var router = express.Router();
var database = require('./modules/mysql');
var mysql = new database();

router.get('/', async function(req, res, next) {
	mysql.open();

	const sql = 'SELECT * FROM data.web_todo_list_tbl;';
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

router.post('/', async function(req, res, next) {
	const data = req.body.data;
	mysql.open();

	const sql = `INSERT INTO web_todo_list_tbl(todo) VALUES ('${data}');`;
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

router.post('/checkUp', async function(req, res, next) {
	const data = req.body.data;
	mysql.open();

	const sql = `UPDATE web_todo_list_tbl SET checked=${data.checked} WHERE idx=${data.idx};`;
	console.log(data)
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

module.exports = router;

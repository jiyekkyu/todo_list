var express = require('express');
var router = express.Router();
var database = require('./modules/mysql');
var mysql = new database();

router.get('/', async function(req, res, next) {
	const items = req.query.items;
	mysql.open();

	const sql = `SELECT * FROM web_todo_list_tbl LIMIT ${items};`;
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

router.put('/', async function(req, res, next) {
	const data = req.body.data;
	mysql.open();

	const sql = `INSERT INTO web_todo_list_tbl(todo) VALUES ('${data}');`;
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

router.post('/', async function(req, res, next) {
	const data = req.body.data;
	mysql.open();

	const sql = `UPDATE web_todo_list_tbl SET checked=${data.checked} WHERE idx=${data.idx};`;
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

router.delete('/', async function(req, res, next) {
	const data = req.query.idx;
	mysql.open();

	const sql = `DELETE FROM web_todo_list_tbl WHERE idx=${data}`;
	const rs = await mysql.query(sql);

	res.send(JSON.stringify(rs));
	res.end();

	mysql.close();
});

module.exports = router;

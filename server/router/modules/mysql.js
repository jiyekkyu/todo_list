const mysql = require('mysql');
const server_config = {
	"server": {
		connectionLimit: 10,
		host: 'localhost',
		user: 'root',
		database: 'data',
		password: '1'
	}
}

function database(){
	this.connection = null;
	this.open = () => {
		this.connection = mysql.createConnection(server_config.server);
	}
	this.query = (sql) => {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, (err, rows) =>{
				if( err ){
					return reject({
						success: false,
						fail_desc: err
					});
				}
				resolve(rows);
			});
		});
	}
	this.close = () => {
		return new Promise((resolve, reject) => {
			this.connection.end( err => {
				if( err ){
					return reject({
						success: false,
						fail_desc: err
					});
				}
				this.connection = null;
				resolve();
			});
		});
	}
}

module.exports = database;

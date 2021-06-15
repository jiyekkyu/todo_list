CREATE TABLE `data`.`web_todo_list_tbl` (
	idx int(10) auto_increment NOT NULL,
	todo varchar(514) NULL,
	checked TINYINT(4) DEFAULT 0 NOT NULL,
	PRIMARY KEY (idx)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;

-- DROP DATABASE
DROP DATABASE IF EXISTS hobbySquad_db;

-- CREATE DATABASE
CREATE DATABASE hobbySquad_db;

USE hobbySquad_db;


SELECT * FROM `group`,`tag` LEFT JOIN `tag` WHERE `group`.tag_id = `tag`.id AND WHERE `group`.group_name ILIKE "%dance%" OR WHERE `tag`.name ILIKE "%dance%";
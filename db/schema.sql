-- DROP DATABASE
DROP DATABASE IF EXISTS hobbySquad_db;

-- CREATE DATABASE
CREATE DATABASE hobbySquad_db;

USE hobbySquad_db;
SELECT * FROM `groups`;
SELECT * FROM users;
SELECT * FROM tags;
SELECT group_name as `group` ,name as group_tag FROM `groups` g ,tags t WHERE g.id = t.group_id;
SELECT group_name,username FROM `groups` JOIN users WHERE groups.group_name LIKE "%go%";



-- SELECT g.id,g.group_name,t.id,t.name
-- FROM `groups` g 
-- LEFT JOIN tag gt
-- ON g.id = gt.group_id
-- LEFT JOIN tags t ON gt.tag_id = t.id
-- WHERE g.group_name = "Photography Club"
-- OR
-- t.name = "Landscape"
-- ;
SELECT * FROM usergroups;
SELECT DISTINCT g.id,g.group_name, COUNT(u.`UserId`) AS user_count
FROM `groups` g
LEFT JOIN tags t ON g.id = t.group_id
LEFT JOIN usergroups u ON g.id = u.`GroupId`
WHERE g.group_name LIKE "%ac%"
OR t.name LIKE "%ac%"
GROUP BY g.id,g.group_name
;

SELECT * FROM tags;
SELECT * FROM usergroups ug
;
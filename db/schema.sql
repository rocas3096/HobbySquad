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


SELECT username,content FROM posts p LEFT JOIN users u ON u.id = p.user_id WHERE group_id = 1;
SELECT * from posts where group_id = 1;
SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE id = 2;
SELECT * FROM `groups` WHERE group_name = "Hiking Enthusiasts";
SELECT * FROM usergroups; 
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

SELECT * FROM tags;
SELECT * FROM `groups` WHERE id = 1;
SELECT * FROM users;


SELECT * FROM `groups` ORDER BY RAND() LIMIT 8;

SELECT username,content FROM posts p LEFT JOIN users u ON p.user_id = u.id WHERE group_id=1;





SELECT g.id,g.group_name,g.description,COUNT(ug.UserId) as num_of_groups FROM usergroups ug LEFT JOIN `groups` g ON ug.GroupId = g.id WHERE ug.UserId = 11 GROUP BY g.id,g.group_name,g.description;


SELECT g.id, g.group_name, g.description, (
  SELECT COUNT(*) FROM (
    SELECT ug.GroupId
    FROM usergroups ug
    WHERE ug.UserId = 9
    GROUP BY ug.GroupId
  ) AS subquery
) AS num_of_groups
FROM `groups` g
LEFT JOIN usergroups ug ON ug.GroupId = g.id
WHERE ug.UserId = 9
GROUP BY g.id, g.group_name, g.description;


SELECT * FROM `groups` g WHERE g.id = 4 ;












SELECT COUNT(*) AS num_of_groups
FROM usergroups ug LEFT JOIN `groups` g ON ug.GroupId = g.id
WHERE ug.UserId = 11;
SELECT * from `groups`;

SELECT * FROM users WHERE users.id = 11;



SELECT g.group_name, g.description, COUNT(DISTINCT ug.UserId) AS num_of_users
FROM `groups` g
JOIN usergroups ug ON ug.GroupId = g.id
WHERE ug.GroupId IN (
  SELECT GroupId
  FROM usergroups
  WHERE UserId = 11
)
GROUP BY g.group_name, g.description;


SELECT * FROM `groups` ORDER BY RAND();



SELECT name FROM tags WHERE group_id = 3;
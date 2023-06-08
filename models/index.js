//import models
const Group = require("./Group");
const Hobby = require("./Hobby");
const User = require("./User");
const UserGroup = require("./UserGroup");
const UserHobby = require("./UserHobby");

// UserGroup belongsTo User
UserGroup.belongsto(User, {
    foreignKey: "user_id",
    otherKey: "group_id",
});

//UserHobby belongsTo User
UserHobby.belongsto(User, {
    foreignKey: "user_id",
    otherKey:"hobby_id",
});

//Hobby belongsTo UserHobby
Hobby.belongsto
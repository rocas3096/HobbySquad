//import models
const Group = require("./group");
const Hobby = require("./hobby");
const User = require("./user");
const UserGroup = require("./userGroup");
const UserHobby = require("./userHobby");

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
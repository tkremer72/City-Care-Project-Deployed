'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 * createTable "listings", deps: [users]
 * createTable "requests", deps: [users]
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2021-06-21T15:52:42.626Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false,
                    "autoIncrement": true
                },
                "first_name": {
                    "type": Sequelize.STRING,
                    "field": "first_name",
                    "required": true,
                    "allowNull": false
                },
                "last_name": {
                    "type": Sequelize.STRING,
                    "field": "last_name",
                    "required": true,
                    "allowNull": false
                },
                "org_name": {
                    "type": Sequelize.STRING,
                    "field": "org_name",
                    "required": false
                },
                "contact_name": {
                    "type": Sequelize.STRING,
                    "field": "contact_name",
                    "required": false
                },
                "username": {
                    "type": Sequelize.STRING,
                    "field": "username",
                    "required": true,
                    "allowNull": false
                },
                "email": {
                    "type": Sequelize.STRING,
                    "field": "email",
                    "required": true,
                    "unique": true,
                    "allowNull": false,
                    "foreignKey": true
                },
                "phone": {
                    "type": Sequelize.STRING,
                    "field": "phone",
                    "required": false
                },
                "mobile_phone": {
                    "type": Sequelize.STRING,
                    "field": "mobile_phone",
                    "required": false
                },
                "fax": {
                    "type": Sequelize.STRING,
                    "field": "fax",
                    "required": false
                },
                "contact_method": {
                    "type": Sequelize.STRING,
                    "field": "contact_method",
                    "required": true,
                    "allowNull": false
                },
                "address1": {
                    "type": Sequelize.STRING,
                    "field": "address1",
                    "required": true,
                    "allowNull": false
                },
                "address2": {
                    "type": Sequelize.STRING,
                    "field": "address2",
                    "required": false
                },
                "city": {
                    "type": Sequelize.STRING,
                    "field": "city",
                    "required": true,
                    "allowNull": false
                },
                "state": {
                    "type": Sequelize.STRING,
                    "field": "state",
                    "required": true,
                    "allowNull": false
                },
                "county": {
                    "type": Sequelize.STRING,
                    "field": "county",
                    "required": true,
                    "allowNull": false
                },
                "zip": {
                    "type": Sequelize.INTEGER,
                    "field": "zip",
                    "required": true,
                    "allowNull": false
                },
                "password": {
                    "type": Sequelize.STRING,
                    "field": "password",
                    "required": true,
                    "allowNull": false
                },
                "isOrg": {
                    "type": Sequelize.BOOLEAN,
                    "field": "isOrg",
                    "required": false,
                    "default": false
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "default": false
                },
                "admin": {
                    "type": Sequelize.BOOLEAN,
                    "field": "admin",
                    "default": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "listings",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "allowNull": false,
                    "autoIncrement": true
                },
                "quantity": {
                    "type": Sequelize.INTEGER,
                    "field": "quantity",
                    "required": true,
                    "allowNull": false
                },
                "description": {
                    "type": Sequelize.STRING,
                    "field": "description",
                    "required": true,
                    "allowNull": false
                },
                "availability": {
                    "type": Sequelize.STRING,
                    "field": "availability",
                    "required": true,
                    "allowNull": false
                },
                "requirements": {
                    "type": Sequelize.STRING,
                    "field": "requirements",
                    "required": true,
                    "allowNull": false
                },
                "org_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "field": "org_id",
                    "foreignKey": true,
                    "allowNull": false
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "default": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "requests",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "name": {
                    "type": Sequelize.STRING,
                    "field": "name",
                    "required": true,
                    "allowNull": false
                },
                "details": {
                    "type": Sequelize.STRING,
                    "field": "details",
                    "required": true,
                    "allowNull": false
                },
                "needByDate": {
                    "type": Sequelize.STRING,
                    "field": "needByDate",
                    "required": true,
                    "allowNull": false
                },
                "user_id": {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "users",
                        "key": "id"
                    },
                    "field": "user_id",
                    "foreignKey": true,
                    "allowNull": false
                },
                "deleted": {
                    "type": Sequelize.BOOLEAN,
                    "field": "deleted",
                    "default": false
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

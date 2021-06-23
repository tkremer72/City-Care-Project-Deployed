'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "updatedAt" on table "listings"
 * changeColumn "createdAt" on table "listings"
 * changeColumn "updatedAt" on table "requests"
 * changeColumn "createdAt" on table "requests"
 *
 **/

var info = {
    "revision": 3,
    "name": "fix_migrations",
    "created": "2021-06-21T16:16:34.784Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "listings",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "listings",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "requests",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "requests",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt"
            }
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

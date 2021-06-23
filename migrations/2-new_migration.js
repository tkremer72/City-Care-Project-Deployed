'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "updatedAt" on table "users"
 * changeColumn "createdAt" on table "users"
 *
 **/

var info = {
    "revision": 2,
    "name": "new_migration",
    "created": "2021-06-21T16:06:37.279Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "users",
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
            "users",
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

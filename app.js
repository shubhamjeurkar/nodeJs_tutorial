//CommonJs - every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require("./2-names")
// const sayHi = require("./3-Utils")

// sayHi(names.shubham)
// sayHi(names.virat)

const _ = require("lodash")

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
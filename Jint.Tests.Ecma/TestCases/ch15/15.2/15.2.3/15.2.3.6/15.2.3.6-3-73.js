/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-73.js
 * @description Object.defineProperty - 'configurable' property in 'Attributes' is present (8.10.5 step 4)
 */


function testcase() {
        var obj = {};

        Object.defineProperty(obj, "property", {
            configurable: false
        });

        var beforeDeleted = obj.hasOwnProperty("property");

        delete obj.property;

        var afterDeleted = obj.hasOwnProperty("property");

        return beforeDeleted === true && afterDeleted === true;
    }
runTestCase(testcase);

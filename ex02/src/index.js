function checkVariableScope(){
    "use strict";
    let i = "function variable";
    if (true) {
        let i = "block variable";
        console.log("Scope i is; ", i);
    }
    console.log("Scope i is: ", i);
}
checkVariableScope();
module.exports = checkVariableScope;
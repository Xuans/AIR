const clc = require("cli-color");

module.exports={
    getFailErrorStr(msg){
        console.log(clc.red(`${new Date().toString()}:${msg}`));

        return JSON.stringify({
            status:false,
            errorMsg:msg
        });
    },
    getSuccessStr(result){
        console.log(clc.green(`${new Date().toString()}:${result}`));

        return JSON.stringify({
            status:true,
            content:{
                result:result
            }
        });
    }
};
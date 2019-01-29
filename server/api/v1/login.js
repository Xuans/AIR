'use strict';

const config = require('../../config');
const jwt = require('jsonwebtoken');
const gravatar = require('gravatar');

const handler=require('../../util/handler');

module.exports = {
    getCSRFToken: function (ctx, next) {
        const jwtToken = ctx.cookies.get('JWT-TOKEN');

        ctx.type='json';
        ctx.body=handler.getSuccessStr({
            userName: 'lijiancheng',
            ctoken: '',
            avatar: ''
        })

        // if(jwtToken){
        //     try{
        //         const decode=jwt.verify(jwtToken,config.baseKey);

        //         if(decode && !decode.err){
        //             const name=decode.userName && decode.userName.replace(/@agree\.com\.cn.*$/,'');
        //             const avatar=gravatar.url(name,{s:'50',d:'retro'});

        //             ctx.body=handler.getSuccessStr({
        //                 ...decode,
        //                 userName: name,
        //                 ctoken: decode.ctoken,
        //                 avatar: avatar
        //             });

        //         }else{
        //             ctx.body=handler.getFailErrorStr(decode.err); 
        //         }
        //     }catch(e){
        //         ctx.body=handler.getFailErrorStr(e.message);
        //     }
        // }else{
        //     ctx.body=handler.getFailErrorStr('用户未登录');
        // }
    }
}
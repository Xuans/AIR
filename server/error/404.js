module.exports=function*(next){  
    yield next;
    if(parseInt(this.status) === 404){
        this.type='json';
        this.body = JSON.stringify({
           status:false,
           errorMsg:`找不到${this.originalUrl}。`
        });

        console.log(`${new Date()}：找不到${this.originalUrl}`);
    }
};
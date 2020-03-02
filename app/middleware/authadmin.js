module.exports = options =>{
    return async function authadmin(ctx,next){
        // console.log(ctx.session.openId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={
                code:200,
                message:'请重新登录',
                obj:null
            }
        }
    }
}
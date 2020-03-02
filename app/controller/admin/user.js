const Controller = require('egg').Controller

class UserController extends Controller{    
    async login(){
        const {request,body}=this.ctx
        // this.ctx.body='login'
        
    }
    async getUsers(){
        this.ctx.body='haha'
    }
}

module.exports = UserController
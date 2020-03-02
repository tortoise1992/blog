const Controller = require('egg').Controller

class UserController extends Controller{
    
    async login(){
        this.ctx.body='login'
    }
}

module.exports = UserController
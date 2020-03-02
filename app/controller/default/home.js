const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        this.ctx.body="前台网站api接口"
    }
}

module.exports = HomeController
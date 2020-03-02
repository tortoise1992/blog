module.exports = app =>{
    const {router,controller} = app
    router.get('/admin/login',controller.admin.user.login)
}
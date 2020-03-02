module.exports = app =>{
    const {router,controller,middleware} = app
    router.post('/admin/login',controller.admin.user.login)
    router.get('/admin/getUsers',middleware.authadmin,controller.admin.user.getUsers)
}
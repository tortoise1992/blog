'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    // 设置欢迎语
    require('./router/default')(app)
    require('./router/admin')(app)
};

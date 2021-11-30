'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      url: 'https://zos.alipayobjects.com/rmsportal/VTcUYAaoKqXyHJbLAPyF.svg',
      name: 'picture',
    };
  }
}

module.exports = HomeController;

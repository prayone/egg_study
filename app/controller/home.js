'use strict';
const fs = require('fs');
const path = require('path');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const file = fs.readFileSync(path.resolve(this.app.config.static.dir, 'index.html'));
    ctx.set('Content-Type', 'text/html');
    ctx.body = file;
  }
}

module.exports = HomeController;

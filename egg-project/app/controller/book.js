'use strict';

module.exports = app => {
  class BookController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.book.create(this.ctx.request.body);
    }
    // * delete() {
    //   this.ctx.body = yield this.service.book.delete(this.ctx.request.body);
    // }
    // * get() {
    //   this.ctx.body = yield this.service.book.get(this.ctx.request.body);
    // }
    // * update() {
    //   this.ctx.body = yield this.service.book.update(this.ctx.request.body);
    // }
    * select() {
      this.ctx.body = yield this.service.book.select(this.ctx.request.body);
    }
  }
  return BookController;
};

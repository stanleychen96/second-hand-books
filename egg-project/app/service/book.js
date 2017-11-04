'use strict';

module.exports = app => {
  class Book extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('book', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    // * get(req) {
    //   let res;
    //   try {
    //     res = yield app.mysql.get('book', req);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return res;
    // }

    * select(res) {
      let text;
      try {
        text = yield app.mysql.select('book', {
          where: { nickname: res.nickname },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return text;
    }

    // * delete(a) {
    //   try {
    //     yield app.mysql.delete('book', a);
    //   } catch (e) {
    //     this.ctx.logger.error(e);
    //     return false;
    //   }
    //   return true;
    // }

    // * update(s) {
    //   try {
    //     yield app.mysql.update('book', s);
    //   } catch (q) {
    //     this.ctx.logger.error(q);
    //     return false;
    //   }
    //   return true;
    // }

  }
  return Book;
};


'use strict';

module.exports = app => {
  app.post('/information', 'information.get');

  app.post('/lead', 'lead.select');
  app.post('/leadselect', 'lead.leadselect');

  app.post('/writereview', 'writereview.create');
  app.post('/selectreview', 'writereview.select');

  app.post('/selectbook', 'book.select');
  app.post('/addbook', 'book.create');

  app.post('/updateimg', 'writereview.update');

  app.post('/gettapnum', 'lead.gettapnumber');
  app.post('/updatetapnum', 'lead.updatetapnumber');
  app.post('/updatelikenum', 'lead.updatelikenumber');
  app.post('/gettapid', 'lead.gettapid');
};

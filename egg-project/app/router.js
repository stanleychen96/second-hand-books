'use strict';

module.exports = app => {
  app.post('/information', 'information.get');
  app.post('/lead', 'lead.get');
  app.post('/writereview', 'writereview.create');
  app.post('/selectreview', 'writereview.select');
};

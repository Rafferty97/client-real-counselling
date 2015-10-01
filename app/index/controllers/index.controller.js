/* jshint node:true */
'use strict';

var config = require('../../../config/config');
var express = require('express');
var path = require('path');
var renderFile = require('jade').renderFile;
var router = express.Router();
var _ = require('lodash');

module.exports = function IndexController(app) {
  app.use('/', router);
};

router.get('/', function(req, res, next) {
  var segments = require('../segments.json')
    .map(function(segment) {
      return {
        name: segment.name,
        view: path.join(__dirname, '..', 'segments', segment.name, segment.view || segment.name + '.jade'),
      };
    });

  res.render('index', {
    segments: segments,
    renderFile: renderFile,
  });
});

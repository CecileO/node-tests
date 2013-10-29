'use strict';

var assert = require('assert')
  , should = require('should')
  , request = require('supertest');
  
describe('Query google', function() {
	
	it('should connect to google', function(done) {
		
		request('http://google.co.uk')
			.get()
			.end(function(err, res) {
					if (err) {
						throw err;
					}
					res.should.have.status(200);
					done();
				});
	});
});


//mocha --reporter XUnit -u tdd > test-reports.xml
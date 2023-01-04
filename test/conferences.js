var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/conferences.json');

test('conferences - valid', (t) => {
  validate(fixtures.conferencesValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences - invalid', (t) => {
  validate(fixtures.conferencesInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('conferences[].event - valid', (t) => {
  validate(fixtures.eventValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].event - invalid', (t) => {
  validate(fixtures.eventInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('conferences[].location - valid', (t) => {
  validate(fixtures.locationValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].location - invalid', (t) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('conferences[].topic - valid', (t) => {
  validate(fixtures.topicValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].topic - invalid', (t) => {
  validate(fixtures.topicInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("conferences[].reference - valid", (t) => {
  validate(fixtures.referenceValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("conferences[].reference - invalid", (t) => {
  validate(fixtures.referenceInValid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('conferences[].date - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.dateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].date - valid [YYYY-MM]', (t) => {
  validate(fixtures.dateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].date - valid [YYYY]', (t) => {
  validate(fixtures.dateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('conferences[].date - invalid', (t) => {
  validate(fixtures.dateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});


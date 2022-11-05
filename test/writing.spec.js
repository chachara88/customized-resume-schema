var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/writing.json');

test('writing - valid', (t) => {
  validate(fixtures.writingValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('writing - invalid', (t) => {
  validate(fixtures.writingInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('writing[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('writing[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test("writing[].reference - valid", (t) => {
  validate(fixtures.referenceValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test("writing[].reference - invalid", (t) => {
  validate(fixtures.referenceInValid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('writing[].date - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.dateValid, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('writing[].date - valid [YYYY-MM]', (t) => {
  validate(fixtures.dateValid2, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('writing[].date - valid [YYYY]', (t) => {
  validate(fixtures.dateValid3, (err, valid) => {
    t.equal(err, null, "err should be null");
    t.true(valid, "valid is true");
  });
  t.end();
});

test('writing[].date - invalid', (t) => {
  validate(fixtures.dateInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});


var test = require('tape');
var { validate } = require('../validator');
const fixtures = require('./__test__/community.json');

test('community - valid', (t) => {
  validate(fixtures.communityValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community - invalid', (t) => {
  validate(fixtures.communityInvalid, (err, valid) => {
    t.notEqual(err, null, "err should contain an error");
    t.false(valid, "valid is false");
  });
  t.end();
});

test('community[].name - valid', (t) => {
  validate(fixtures.nameValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].name - invalid', (t) => {
  validate(fixtures.nameInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].location - valid', (t) => {
  validate(fixtures.locationValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].location - invalid', (t) => {
  validate(fixtures.locationInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].description - valid', (t) => {
  validate(fixtures.descriptionValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].description - invalid', (t) => {
  validate(fixtures.descriptionInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].position - valid', (t) => {
  validate(fixtures.positionValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].position - invalid', (t) => {
  validate(fixtures.positionInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].url - valid', (t) => {
  validate(fixtures.urlValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].url - invalid', (t) => {
  validate(fixtures.urlInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].startDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.startDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].startDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.startDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].startDate - valid [YYYY]', (t) => {
  validate(fixtures.startDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].startDate - invalid', (t) => {
  validate(fixtures.startDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].endDate - valid [YYYY-MM-DD]', (t) => {
  validate(fixtures.endDateValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].endDate - valid [YYYY-MM]', (t) => {
  validate(fixtures.endDateValid2, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].endDate - valid [YYYY]', (t) => {
  validate(fixtures.endDateValid3, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].endDate - invalid', (t) => {
  validate(fixtures.endDateInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].summary - valid', (t) => {
  validate(fixtures.summaryValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].summary - invalid', (t) => {
  validate(fixtures.summaryInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].highlights - valid', (t) => {
  validate(fixtures.highlightsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].highlights - invalid', (t) => {
  validate(fixtures.highlightsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].highlights[item] - valid', (t) => {
  validate(fixtures.highlightsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].highlights[item] - invalid', (t) => {
  validate(fixtures.highlightsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].skills - valid', (t) => {
  validate(fixtures.skillsValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].skills - invalid', (t) => {
  validate(fixtures.skillsInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

test('community[].skills[item] - valid', (t) => {
  validate(fixtures.skillsItemValid, (err, valid) => {
    t.equal(err, null, 'err should be null');
    t.true(valid, 'valid is true');
  });
  t.end();
});

test('community[].skills[item] - invalid', (t) => {
  validate(fixtures.skillsItemInvalid, (err, valid) => {
    t.notEqual(err, null, 'err should contain an error');
    t.false(valid, 'valid is false');
  });
  t.end();
});

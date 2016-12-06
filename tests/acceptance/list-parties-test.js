import { test } from 'qunit';
import moduleForAcceptance from 'ember-party/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list parties');

test('should redirect to parties route', function(assert){
  visit('/');
  andThen(function(){
    assert.equal(currentURL(), '/parties', 'should redirect automatically');
  });
});

test('should list open parties.', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(find('.party-open').length, 3, 'should see 3 parties');
  });
});

test('should link to party page.', function (assert) {
  visit('/');
  click('a:contains("Highligher")');
  andThen(function () {
    assert.equal(currentURL(), '/parties/1', 'should navigate to party');
  });
});

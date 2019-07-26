import { module, test } from 'qunit';
import { visit, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list rentals', hooks => {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /list-rentals', async function (assert) {
    await visit('/');

    await fillIn('.list-filter input', 'seattle');
    // end of seattle is e whose keycode is 69
    await triggerKeyEvent('.list-filter input', 'keyup', 69);
    assert.equal(
      this.element.querySelectorAll('.results .listing').length,
      1,
      'should display 1 listing'
    );
    assert.ok(
      this.element
        .querySelector('.listing .location')
        .textContent.includes('Seattle'),
      'should contain 1 listing with location Seattle'
    );
  });
});

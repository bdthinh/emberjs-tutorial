import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, triggerKeyEvent, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const ITEMS = [
  { city: 'San Francisco' },
  { city: 'Portland' },
  { city: 'Seattle' },
];
const FILTERED_ITEMS = [{ city: 'San Francisco' }];

module('Integration | Component | list-filter', (hooks) => {
  setupRenderingTest(hooks);

  test('should initially load all listings', async function (assert) {
    this.set('filterByCity', () => Promise.resolve({ results: ITEMS }));

    await render(hbs`
      <ListFilter @filter={{action filterByCity}} as |results|>
        <ul>
        {{#each results as |item|}}
          <li class="city">
            {{item.city}}
          </li>
        {{/each}}
        </ul>
      </ListFilter>
    `);

    await settled();
    assert.equal(this.element.querySelectorAll('.city').length, 3);
    assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
  });

  test('should update with matching listings', async function (assert) {
    this.set('filterByCity', val => {
      if (val === '') {
        return Promise.resolve({
          query: val,
          results: ITEMS,
        });
      }
      return Promise.resolve({
        query: val,
        results: FILTERED_ITEMS,
      });
    });

    await render(hbs`
    <ListFilter @filter={{action filterByCity}} as |results|>
      <ul>
      {{#each results as |item|}}
        <li class="city">
          {{item.city}}
        </li>
      {{/each}}
      </ul>
    </ListFilter>
  `);

    // fill in the input field with 's'
    await fillIn(this.element.querySelector('.list-filter input'), 's');
    // keyup event to invoke an action that will cause the list to be filtered
    await triggerKeyEvent(
      this.element.querySelector('.list-filter input'),
      'keyup',
      83
    );
    await settled();

    assert.equal(
      this.element.querySelectorAll('.city').length,
      1,
      'One result returned'
    );
    assert.dom(this.element.querySelector('.city')).hasText('San Francisco');
  });
});

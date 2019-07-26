import { moduleForModel, test } from 'ember-qunit';

// eslint-disable-next-line
moduleForModel('rental', 'Unit | Model | rental', {
  // Specify the other units that are required for this test.
  needs: [],
});

test('it exists', function (assert) {
  const model = this.subject();
  assert.ok(!!model);
});

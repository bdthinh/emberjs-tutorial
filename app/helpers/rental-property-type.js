import { helper } from '@ember/component/helper';

const TYPES = [
  'Condo',
  'Townhouse',
  'Apartment',
];

export default helper(([propertyType]) => {
  if (TYPES.includes(propertyType)) {
    return 'Community';
  }
  return 'Standalone';
});

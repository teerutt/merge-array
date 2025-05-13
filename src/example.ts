import { merge } from './merge';

// Example usage
const collection1 = [1, 3, 5, 7];
const collection2 = [10, 8, 6, 4, 2]; // Descending order
const collection3 = [0, 9, 11];

const result = merge(collection1, collection2, collection3);
console.log('Collection 1 (ascending):', collection1);
console.log('Collection 2 (descending):', collection2);
console.log('Collection 3 (ascending):', collection3);
console.log('Merged result: [', result.join(', '), ']');
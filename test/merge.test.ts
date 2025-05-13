import { merge } from '../src/merge';

describe('merge function', () => {
  test('should merge three empty arrays into an empty array', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('should handle when only one array has elements', () => {
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
    expect(merge([], [], [4, 5, 6])).toEqual([4, 5, 6]);
  });

  test('should merge three sorted arrays correctly', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [6, 4, 2]; // Descending order
    const collection3 = [0, 7, 9];
    
    const expected = [0, 1, 2, 3, 4, 5, 6, 7, 9];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  test('should handle arrays with duplicate values', () => {
    const collection1 = [1, 3, 5, 5];
    const collection2 = [7, 5, 3, 1]; // Descending order
    const collection3 = [2, 3, 4];
    
    const expected = [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 7];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  test('should handle arrays of different lengths', () => {
    const collection1 = [1, 10];
    const collection2 = [100, 50, 25]; // Descending order
    const collection3 = [5, 15, 30, 45, 60];
    
    const expected = [1, 5, 10, 15, 25, 30, 45, 50, 60, 100];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  test('should handle negative numbers', () => {
    const collection1 = [-10, -5, 0, 5];
    const collection2 = [10, 2, -1, -20]; // Descending order
    const collection3 = [-15, -8, 3, 12];
    
    const expected = [-20, -15, -10, -8, -5, -1, 0, 2, 3, 5, 10, 12];
    expect(merge(collection1, collection2, collection3)).toEqual(expected);
  });

  test('should not modify the input arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [6, 4, 2];
    const collection3 = [0, 7, 9];
    
    const collection1Copy = [...collection1];
    const collection2Copy = [...collection2];
    const collection3Copy = [...collection3];
    
    merge(collection1, collection2, collection3);
    
    expect(collection1).toEqual(collection1Copy);
    expect(collection2).toEqual(collection2Copy);
    expect(collection3).toEqual(collection3Copy);
  });

  test('should work with large arrays', () => {
    // Create large arrays
    const collection1: number[] = [];
    const collection2: number[] = [];
    const collection3: number[] = [];
    
    // Generate ascending order for collection1
    for (let i = 0; i < 1000; i += 2) {
      collection1.push(i);
    }
    
    // Generate descending order for collection2
    for (let i = 999; i >= 0; i -= 3) {
      collection2.push(i);
    }
    
    // Generate ascending order for collection3
    for (let i = 1; i < 1000; i += 4) {
      collection3.push(i);
    }
    
    const result = merge(collection1, collection2, collection3);
    
    // Verify the result is sorted
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i-1]);
    }
    
    // Verify all original elements are in the result
    expect(result.length).toBe(collection1.length + collection2.length + collection3.length);
  });
});
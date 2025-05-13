/**
 * Merges three collections of integers into a single sorted array.
 * 
 * @param collection_1 Array sorted in ascending order (min to max)
 * @param collection_2 Array sorted in descending order (max to min)
 * @param collection_3 Array sorted in ascending order (min to max)
 * @returns A new array containing all elements from the input collections, sorted in ascending order
 */
export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    // Create a new array to hold the result
    const result: number[] = [];
    
    // We'll need to reverse collection_2 to get it in ascending order
    const reversedCollection2: number[] = [];
    for (let i = collection_2.length - 1; i >= 0; i--) {
      reversedCollection2.push(collection_2[i]);
    }
    
    // Pointers for each collection
    let i = 0; // for collection_1
    let j = 0; // for reversedCollection2
    let k = 0; // for collection_3
    
    // Continue until we've processed all elements from all collections
    while (i < collection_1.length || j < reversedCollection2.length || k < collection_3.length) {
      // Find the minimum value among the current positions of the three collections
      
      // Default values if a collection is exhausted
      const val1 = i < collection_1.length ? collection_1[i] : Number.MAX_SAFE_INTEGER;
      const val2 = j < reversedCollection2.length ? reversedCollection2[j] : Number.MAX_SAFE_INTEGER;
      const val3 = k < collection_3.length ? collection_3[k] : Number.MAX_SAFE_INTEGER;
      
      // Find the minimum of the three values
      const minVal = Math.min(val1, Math.min(val2, val3));
      
      // Add the minimum value to the result
      result.push(minVal);
      
      // Increment the pointer of the collection that contained the minimum value
      if (minVal === val1) {
        i++;
      } else if (minVal === val2) {
        j++;
      } else {
        k++;
      }
    }
    
    return result;
  }
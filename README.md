# Merge Arrays - TypeScript Implementation

A TypeScript implementation of a merge function that combines three integer arrays into a single sorted array in ascending order, without using any built-in sort functions.

## Setup Instructions

### 1. Prerequisites:
   * Node.js (v14 or later)
   * npm or yarn package manager

### 2. Installation:

```bash
git clone https://github.com/yourusername/merge-arrays.git
cd merge-arrays
npm install
```

## Running the Code

### 1. Build the project:

```bash
npm run build
```

### 2. Run the example:

```bash
npm run example
```

## Running Tests

### 1. Run all tests:

```bash
npm test
```

### 2. Run tests in watch mode:

```bash
npm run test:watch
```

## Function Specification

```typescript
merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[]
```

Where:
- `collection_1` and `collection_3` are already sorted in ascending order (from 0 to max)
- `collection_2` is already sorted in descending order (from max to 0)
- The function returns a new array with all elements sorted in ascending order
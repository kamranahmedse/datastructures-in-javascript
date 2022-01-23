// Complexity: O(n)
function traverse(arr) {
  for (let counter = 0; counter < arr.length; counter++) {
    console.log(arr[counter]);
  }
}

// Complexity: O(n)
function insertAtPosition(items, position, item) {
  // Built-in option available in javascript
  // items.splice(position, 0, item)
  // return items;

  // Push all the items to the right until position
  for (let counter = items.length; counter > position; counter--) {
    items[counter] = items[counter - 1];
  }

  items[position] = item;

  return items;
}

// Complexity: O(n)
function deleteFromPosition(items, position) {
  // Built-in option available in javascript
  // items.splice(position, 1)
  // return items;

  for (let counter = position; counter < items.length; counter++) {
    items[counter] = items[counter + 1];
  }

  return items;
}

const fruits = ["apple", "mango", "peach", "orange", "banana"];

// Accessing at index: O(1)
// console.log(fruits[3]);

// Traversing an array: O(n)
// traverse(fruits);

// Inserting at a position: O(n)
// traverse(insertAtPosition(fruits, 2, "grapes"));

// Deleting from position: O(n)
// traverse(deleteFromPosition(fruits, 2));

// Updating at position: O(1)
// fruits[0] = "pineapple";
// console.log(fruits);



# Powerset
A JavaScript implementation of calculating the powerset of a given array

## Installation
```$bash
$ npm install @bannon/powerset
```

## Usage
This function can be called in multiple ways:

As an array
```ecmascript 6
powerset(['a', 'b', 'c'])
```

As a string of characters
```ecmascript 6
powerset('abc')
```

As function arguments
```ecmascript 6
powerset('a', 'b', 'c')
```

These will all return the same result:
```ecmascript 6
/*
[
  [],
  ["a"],
  ["b"],
  ["c"],
  ["a", "b"],
  ["b", "c"],
  ["a", "c"],
  ["a", "b", "c"]
]
*/
```

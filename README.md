# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow errors caused by uncontrolled recursion.

The `bug.js` file contains a function `foo` that recursively calls itself.  When the input `a` is a large positive integer, the recursion will continue indefinitely, eventually leading to a stack overflow error.

The `bugSolution.js` file offers a corrected version of the function that avoids the stack overflow by adding appropriate base cases and checks to control the recursion depth.
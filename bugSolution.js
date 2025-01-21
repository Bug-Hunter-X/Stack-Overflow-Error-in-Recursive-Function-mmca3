function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) { 
    return 0; // Handle negative input 
  } else if (a > 1000) { // Add a maximum recursion depth
    return Infinity; // Or throw an error if needed 
  }
  return foo(a - 1, a + b);
}
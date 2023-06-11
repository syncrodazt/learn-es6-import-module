// 1.1 - Importing a name export
import { add, PI } from './utils.js';
console.log(add(2, 3)); // Output: 5
console.log(PI); // Output: 3.14

// 1.2 - Importing a name export with a different name
// import { add_new } from './utils.js';
// console.log(add_new(2, 3)); // Error : no add_new function in utils.js

// 1.3 - Importing a default export
// import add_default from './utils.js';
// console.log(add_default(2, 3));
// Error : SyntaxError: The requested module './utils.js' does not provide an export named 'default'
// By not using curly braces, we are importing the default export from utils.js
// But there is no default export in utils.js, so we get an error.

// 1.4 - Importing a default export
// import add_default from './utils_default.js';
// console.log(add_default(2, 3)); // Output: 5
// No error, because we are importing the default export from utils_default.js
// Also, we can name the default export anything we want, because it is the only export in utils_default.js
// Default export must be the only export in a module.

// 1.4.1
// import { add } from './utils_default.js';
// console.log(add(2, 3));
// We will get an error, add is a default export in utils_default.js, not a named export.
// We can't import a default export using curly braces.

// 1.4.2
// import { PI } from './utils_default.js';
// console.log(PI); // Output: 3.14
// However, PI is a named export in utils_default.js, so we can import it using curly braces.

// 1.4.3
// import add_default, { PI } from './utils_default.js';
// console.log(add_default(2, 3)); // Output: 5
// console.log(PI); // Output: 3.14
// We can import both a default export and a named export from the same module.

// 1.4.4
// import * as utils_default from './utils_default.js';
// console.dir(utils_default);
// console.log(utils_default.default(2, 3)); // Output: 5
// console.log(utils_default.PI); // Output: 3.14

// 1.4.5
// import * as utils from './utils.js';
// console.dir(utils);
// console.log(typeof utils);
// console.log(utils.add(2, 3)); // Output: 5
// console.log(utils.PI); // Output: 3.14

// 1.4.6
// import {default} from './utils_default.js';
// console.log(default(2, 3));
// Error because default is a reserved keyword in JavaScript.

// 1.5
// import { add, PI } from './utils_name.js';
// console.log(add(2, 3)); // Output: 5
// console.log(PI); // Output: 3.14

// 1.5.1
// import * as utils_name from './utils_name.js';
// console.dir(utils_name);
// console.log(utils_name.add(2, 3)); // Output: 5
// console.log(utils_name.PI); // Output: 3.14
// console.log(utils_name.default.E); // Output: 2.71
// console.log(utils_name.default.GoldenRatio); // Output: 1.61

// 1.5.2
// import default_new, {add, PI} from './utils_name.js';
// console.log(add(2, 3)); // Output: 5
// console.log(PI); // Output: 3.14
// console.log(default_new); // Output: {E: 2.71, GoldenRatio: 1.61}
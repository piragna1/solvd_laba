//------------------------------------------------------------------------------Module System

//------------------------------------Common Js

// //logger.js file:
// function log (){}
// module.exports = log;

// //app.js file: (import)
// const logFn = require('./logger.js');

//------------------------------------

//------------------------------------Commons js
// //a.js:
// function one(){};
// function two(){};
// module.exports = {one, two};

// //app.js:
// const {one, two} = require ('./a.js');
//------------------------------------

//------------------------------------Cmmon js
//server side module system
//created with the purpose of managing dependencies in js projects. Because before, projects used to be written in a single file.
//synchronous module system
//------------------------------------

//------------------------------------Commons js
// (function(exports,require,module,__filename,__dirname){
//     //Module code lives here
// });
//------------------------------------

//------------------------------------Commons js
// function Module(id='',parent){
//     this.id=id;
//     this.path=path.dirname(id);
//     this.exports={};
//     updateChildren(parent, this,false);
//     this.filename=null;
//     this.loaded=false;
//     this.childen=[];
// }

// function  updateChildren(parent,child,scan){
//     const children = parent && parent.children;
//     if (children && !(scan && children.includes(child))){
//         children.push(child);
//     }
// }

//------------------------------------

//------------------------------------Node.js module basic structure!
// {
//   id: '.',
//   path: '/Users/ilyakaracun/Documents/tm/ow-gsc-backend',
//   filename: '/Users/ilyakaracun/Documents/tm/ow-gsc-backend/test.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/ilyakaracun/Documents/tm/ow-gsc-backend/node_modules',
//     '/Users/ilyakaracun/Documents/tm/node_modules',
//     '/Users/ilyakaracun/Documents/node_modules',
//     '/Users/ilyakaracun/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }

// [Arguments] {
//   '0': {},
//   '1': [Function: require] {
//     resolve: [Function: resolve],
//     paths: [Function: paths],
//     main: {
//       id: '.',
//       path: '/Users/ilyakaracun/Documents/tm/ow-gsc-backend',
//       filename: '/Users/ilyakaracun/Documents/tm/ow-gsc-backend/test.js',
//       loaded: false,
//       children: [],
//       paths: [Array]
//     },
//     extensions: {
//       '.js': [Function (anonymous)],
//       '.json': [Function (anonymous)],
//       '.node': [Function (anonymous)]
//     },
//     cache: {
//       '/Users/ilyakaracun/Documents/tm/ow-gsc-backend/test.js': [Object]
//     }
//   }
// }

//------------------------------------

//------------------------------------Pros of Common.js
//Easy to learn and use
//It is widely supported
//Synchronous module loading which assures that every dependencie is ready before the execution
//------------------------------------

//------------------------------------Cons of Common.js
//Synchronoous module loading can lead to performance leaks in larger apps
//Lack of tree-shaking can lead to larger bundle sizes (if you just want to use 1 functionalitiy of the lodash library for example, you would still ned to include the whole library into you project!)
//Not suitable for client-side development with browsers!
//------------------------------------

//------------------------------------ES Modules
//Modern module system built into the JavaScript language
//Created for managing the impossibility of building modules for both server and client side!
//------------------------------------

//------------------------------------Es Modules
/* (node:2844) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension. 
(Use `node --trace-warnings ...` to show where the warning was created). 
Also, as an aside, we cannot make use of import statements outside of modules.
 */
//------------------------------------

//------------------------------------ ES Modules
// //loger.mjs file:
// export function log(){};

// //app.js file:
// import {log} from "./logger.mjs";
//------------------------------------

//------------------------------------ES Modules

// import {cat} from "animals";

// //works
// import packageMain from 'commonjs-package';


// //errors
// import {method} from 'commonjs-package';
//------------------------------------

//------------------------------------ES Modules
// //default exports
// export default function sayHi(name){
//     console.log(`Hi ${name}!!😁`);
// };
//------------------------------------

//------------------------------------Package entry points
// const myPackage = require('myPackage');
//Node.js will look fore the package.json file inside `myPackage` directory.
//And then look for the  `main` field which specifies the primary module loaded when a package is imported without a subpath

//When Node.js processess that instruction. It looks into myPackage/package.json file:
//Looks for the `main` field and if it is present, loads the indicated file. Otherwise loads by default the index.js file if presesnt.
//------------------------------------

//------------------------------------Package entry points purpose
//Provides a simple way for defining a package's primary entry point for accessing the intended module.
//The `main` field only defines a single entry point.
//Users can still import any file with the require() instruction by appending a path.
//------------------------------------

//------------------------------------How it works
// //project structure:
// // my-package/
// // ├── index.js
// // ├── lib/
// // │   └── utils.js
// // └── package.json

// //index.js
// module.exports = {
//   greet: () => "Hello, world!",
// };

// //package.json
// // {
// //   "name": "my-package",
// //   "main": "index.js"
// // }

// //in another file:
// const myPackage = require("my-package");

// console.log(myPackage.greet()); 
// // Output: Hello, world!

// // Direct access to internal files is also possible:
// const utils = require("my-package/lib/utils");

//------------------------------------

//------------------------------------ `Exports` field in package.json
//defines a mapping of multiple entrypoints allowing precise control over which modules are accessible.
//------------------------------------

//------------------------------------ `exports` field
//when defined:
//Node.js restricts module access to only the paths listed in the `exports` object.
//------------------------------------

//------------------------------------ importing modules
// //sentences like;
// require('module');
// //resolves to the paths defined in the `exports` object of the package.json file.
// //Any attempt to access an undefined path will lead to an error.
//------------------------------------

//------------------------------------ purpose of `exports` field
//Enhances encapsulation: it hide internal files.
//Improves predictability.
//Supports conditional exports: different files from commonJS and ES modules

//UNLIKE `main` field,
//  prevents direct access to internal files. (encapsulation)
//  enforces a clear API (predictability)
//  supports advanced features (conditional exports) for different environments
//------------------------------------

//------------------------------------How `exports` field works:
// //project structure:
// my-package/
// ├── index.js
// ├── lib/
// │   └── utils.js
// └── package.json

// //lib/util.js:
// module.exports = {
//   sum: (a, b) => a + b
// };

// //index.js:
// module.exports = {
//   greet: () => "Hello, world!"
// };

// //package.json:
// {
//   "name": "my-package",
//   "main": "index.js",
//   "exports": {
//     ".": "./index.js",
//     "./utils": "./lib/utils.js"
//   }
// }

// //usage example:
// const myPackage = require("my-package");
// const utils = require("my-package/utils");

// console.log(myPackage.greet());
// // Output: Hello, world!

// console.log(utils.sum(2, 3));
// // Output: 5
//------------------------------------

//------------------------------------ Pros of ES Modules
//Santard module system built in for Javascript
//Asynchronous module loading can improve performance for large applications
// Tree-shaking feature can reduce bundle sizes
//------------------------------------

//------------------------------------Cons of ES Modules
//ES Modules is relatively new and may not be supported by older web browsers
//The syntax for importing and exporting modules can be complex
//------------------------------------

//------------------------------------NodeJS path module
//It is a core module
//Offers utilities for managing file and directory paths
//Helps handle the transformation of paths across multiple operative systems. Ensuring platform independence.
//The module includes methods like:
//  joining
//  resolving
//  normalizing paths
//------------------------------------

//------------------------------------ Why use path module
//Because OSs handle paths differently
//------------------------------------

//------------------------------------ path module features
//Cross-Paltform Path Handling:
//Path Resolution and Normalization:
    /* 
        -Resolve absolute paths
        -normalize paths
        -remove redundant path segments
        -
    */
//Path Parsing and Formatting:
//  Extracting and Formatting path components such as directory/file names and extendions.
//Convenient Path Operations:
/*Provides operations that reduce the amount of errors and inconveniences of the path resolution tasks.
    -path.join()
    -path.resolve()
*/
//------------------------------------

//------------------------------------ path.basename()
// //Get the file name of a given portion of a path
// //
// const path = require("path");

// // Syntax: path.basename(path, [extension])

// const path1 = path.basename("/home/user/bash/index.txt");
// console.log(path1);
// // Output: index.txt

// const path2 = path.basename("/home/user/bash/index.txt", ".txt");
// console.log(path2);
// // Output: index

//------------------------------------

//------------------------------------path.dirname()
// /* The path.dirname() method in Node.js returns the directory part of a file path.

// */
// const path = require("path");

// // Get the directory of a full file path
// const path1 = path.dirname("/home/user/bash/index.txt");
// console.log(path1);
// // Output: /home/user/bash

// // If no directory is given, it returns "."
// const path2 = path.dirname("readme.md");
// console.log(path2);
// // Output: .

// // Works with nested folders too
// const path3 = path.dirname("website/post/comments");
// console.log(path3);
// // Output: website/post

//------------------------------------

//------------------------------------ path.format()
// /*Parameters: This function accepts single parameter pathObject that 
// contains the details of the path. It has the following parameters: 
// •dir: It specifies the directory name of the path object. 
// •root: It specifies the root of the path object. 
// •base: It specifies the base of the path object. 
// •name: It specifies the file name of the path object. 
// •ext: It specifies the file extension of the path object.*/

// /* 
// •dir: full directory path
//         has priority over root
// •root: the absolute starting point of a path (like / or C:\\).
// •base: full filename including extension
// •name: file name excluding extension
// •ext: extension
// */

// const path = require("path");

// // Example 1: Use dir + base (root is ignored if dir is set)
// const path1 = path.format({
//   root: "/ignored/root",            // Ignored
//   dir: "/home/user/personal",       // Directory
//   base: "details.txt"               // Full file name
// });
// console.log("Path 1:", path1);
// // Output: Path 1: /home/user/personal/details.txt

// // Example 2: Use root + base (ext is ignored if base is provided)
// const path2 = path.format({
//   root: "/",                        // Root directory
//   base: "game.dat",                 // Full file name
//   ext: ".noextension"              // Ignored
// });
// console.log("Path 2:", path2);
// // Output: Path 2: /game.dat

// // Example 3: Use root + name + ext to build the file name
// const path3 = path.format({
//   root: "/images/",                 // Root path
//   name: "image",                    // File name (without extension)
//   ext: ".jpg"                       // File extension
// });
// console.log("Path 3:", path3);
// // Output: Path 3: /images/image.jpg

//------------------------------------

//------------------------------------ isAbsolute()

// /* 
// absolute:
// An absolute path is a full path that starts from the root of the file system, no matter where your code is running.

// Eg.
// /home/user/documents/file.txt
// 🟢 Starts from the root / and leads directly to the file.
// */
// /* 
// relative:
// A relative path is a file or folder location that’s relative to the current working directory (where your script is running).

// It does not start from the root of the file system — it starts from "here".

// documents/file.txt
// 🟡 Depends on where you're starting from in the folder structure
// */
// const path = require("path");

// // Absolute path (starts with '/')
// const path1 = path.isAbsolute("/user/bash/");
// console.log(path1);  
// // Output: true

// // Relative path (no leading '/')
// const path2 = path.isAbsolute("user/bash/readme.md");
// console.log(path2);  
// // Output: false

// // Another absolute path (starts with '/')
// const path3 = path.isAbsolute("/user/bash/readme.md");
// console.log(path3);  
// // Output: true

// // Relative path using parent directory reference
// const path4 = path.isAbsolute("..");
// console.log(path4);  
// // Output: false

//------------------------------------

//------------------------------------  path.join()
// /* given multiple segments it returns those segments joint and normalizes all into a single path */
// const path = require("path");

// // Join segments into a single normalized path
// const path1 = path.join("user/admin/files", "index.html");
// console.log(path1);
// // Output: user/admin/files/index.html

// const path2 = path.join("users", "geeks/website", "index.html");
// console.log(path2);
// // Output: users/geeks/website/index.html

// // Empty segments are ignored
// const path3 = path.join("users", "", "", "index.html");
// console.log(path3);
// // Output: users/index.html

//------------------------------------

//------------------------------------ path.join()
// const path = require("path");

// // Joins segments and resolves '..' to navigate up one directory
// const path1 = path.join("users", "..", "files", "readme.md");
// console.log(path1);
// // Output: files/readme.md

// // Joins segments and resolves '..' when it’s the only segment
// const path2 = path.join("users", "..");
// console.log(path2);
// // Output: .

// // Logs the current directory and joins it with '..' to get the parent directory
// console.log("Current directory:", __dirname);
// const path3 = path.join(__dirname, "..");
// console.log(path3);
// // Output: Current directory: /Users/ilyakaracun/Documents/tm/ow-gsc-backend
// // Output: /Users/ilyakaracun/Documents/tm

//------------------------------------

//------------------------------------ path.normalize()
// /* 
// path.normalize() takes a file path and cleans it up by:

// Resolving . (current directory) and .. (parent directory) segments.

// Removing extra or repeated slashes.

// Ensuring the path uses consistent separators (\ on Windows, / on POSIX).

// Basically, it makes any messy or irregular path neat and standard.
// */
// const path = require("path");

// const path1 = path.normalize("/users/admin/.");
// console.log(path1);
// // Output: \users\admin

// const path2 = path.normalize("/users/admin/..");
// console.log(path2);
// // Output: \users

// const path3 = path.normalize("/users/admin/../comments");
// console.log(path3);
// // Output: \users\comments

// const path4 = path.normalize("/users///admin///comments");
// console.log(path4);
// // Output: \users\admin\comments

//------------------------------------

//------------------------------------ path.parse()
// /*
// The path.parse() method is used to return an object whose 
// properties represent the given path. This method returns the 
// following properties: 
// •root (root name) 
// •dir (directory name) 
// •base (filename with extension) 
// •ext (only extension) 
// •name (only filename)
// */
// const path = require("path");

// // Parse a full absolute path into its components
// const path1 = path.parse("/users/admin/website/index.html");
// console.log(path1);
// /* Output:
// {
//   root: '/',
//   dir: '/users/admin/website',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// }
// */

// // Normalize a relative path (just for comparison)
// const path2 = path.normalize("website/readme.md");
// console.log(path2);
// // Output: website/readme.md


//------------------------------------

//------------------------------------SUMMARY path module
/*
The path module in Node.js is a powerful tool for managing and 
manipulating file paths in a cross-platform manner.  
Providing a variety of methods for joining, resolving, and 
parsing paths, it ensures that your Node.js applications can 
handle file operations consistently and efficiently, regardless of 
the operating system.
*/
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

//------------------------------------
//------------------------------------

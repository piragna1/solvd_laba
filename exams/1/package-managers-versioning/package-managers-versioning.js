//------------------------------------------------Package Managers & Versioning

//--------------------package - dependency
//Directory with files with code
//Downloadable from `package registry`

//Package registry: center where code is shareable and downloadable
//--------------------

//--------------------transitive packages
//package can includes with and depend of other packages (this pgs. are called transitives)
//--------------------

//--------------------Package Manager: NPM
//Node Package Manager
// first PM for NodeJS
//--------------------

//--------------------NPM
//Website: url with own specific domain with multiple interactive content
//CLI: command line interface
//Registry: online database with all packages
//--------------------

//--------------------NPM PACKAGES
/* 
a `PACKAGE` has one or more `MODULES` and a `package.json` file which are published as 1 component
into the NPM `REGISTRY` where any developer can access (download)
*/
//--------------------

//--------------------NPM
//npm -v  (shows you actual node package manager version)
//
//-------------------- 

//--------------------package.json
/* 
-Show the packages/dependencies your project depends on
-Specify the versions your project can work with with certain semantincs rules
-Makes your build reproducible, ease to share and distribute
*/
//--------------------

//--------------------Creating package.json file
//execute `npm init` command in the terminal...
//several metadata will be asked to fill up or leave it as it is
//--------------------

//--------------------Installing packages into `package.json` file
//command for installing a package locally: accessible package from the directory where it was installed
//  npm install `package-name`
//command for installing a package globally: package accessible from any directory of the project
//  npm install `package-name` -g
//--------------------

//--------------------Installing packages into `package.json` file
//You will be able to see, how when you have installed a package into your project, a new object is created
//  in the package.json file, which is called `dependencies`.

//In here, you will see all listed dependencies attached to your project and their current versions.
//--------------------

//--------------------Installing packages into `package.json` file
//You can install projects that will be available only in the development environment

//`--save-dev` flag
//npm install `package-name` --save-dev
//It will generate another field inthe `package.json` file: called `devDependencies`.
//  For this field, purposes are the same than the ones about dependencies, but just for development environment
//--------------------

//--------------------package-lock.json file
//Hold the transitive dependencies that are needed for the packages installed for the projects.

//Eg. `express` package may need other set of functionalities contained in other packages which are known as transitive dependencies for our project.
//--------------------

//--------------------deleting local/global packages
//npm uninstall `package-name`
//npm uninstall `package-name` -g
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

//--------------------
//--------------------

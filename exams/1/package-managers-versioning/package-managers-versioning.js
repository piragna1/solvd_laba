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

//--------------------NPM CLI other commands
//Installing specific version:
//  -npm install [package_name]@[version-number]
//Update a single package
//  -npm update [package_name]
//List all installed packages as a dependency truee
//  -npm list

//--------------------

//--------------------PROS 'N CONS NPM
//pros:
//  -Vast repository
//  -Default with NodeJS installation
//  -Mature Ecosystem
//  -Semantinc Versioning
//  -Custom Scripts
//cons:
//  -Performance Issues
//  -Dependency Bloat
//  -Security Concerns
//  -Reliance on centralized registry
//  -Limited offline support

//--------------------

//--------------------Yarn - Pros 'n cons
//pros:
//  -Improved perf.
//  -Offline support
//  -Improved error handling
//cons:
//  -Resource consumption
//  -Community fragmentation
//  -Potential for lock file drift
//  -Limited configuration
//  -Manteinance overhead
//--------------------

//--------------------PNPM - pros and cons
//pros:
//  -Shared dependencies
//  -Efficient installation
//  -Reduced network bandwith
//  -Improved cache efficiency
//cons:
//  -Compatibility issues
//  -Resource consumption
//  -Lockfile handling
//  -Community support

//--------------------

//------------------------VERSIONING
//Process of assigning different names/numbers to a software product in a given time/state of it.
//--------------------

//--------------------Versioning
//Some example:
//given the version structure `major.minor.patch`, you can increment:
//  -major: when you make incompatible API changes
//  -minor:  when you add backward compatible functionality
//  -patch: when fixing bugs

//--------------------

//--------------------Versioning
//The different nomenclatures represent which is the current process of a software dev. project:
//  -alpha: (0/a);
//  -beta: (1/b);
//  -release candidate: (2/rc);
//  -public release:(3);
//--------------------

//--------------------Versioning examples

/* ---
1.2.3.5 = 1.2.5 = b.rc.3.5 = b.rc.5
*/

/* ---
1.2.0.2 = 1.2.a.2 = b.rc.a.2
*/

/* ---
1.2.1.2 = 1.2.b.2 = b.rc.b.2
Beta with bugs fixed
*/

/* ---
1.2.2.0 = 1.2.rc = b.rc.rc
release candidate
*/

/* ---
1.0.0-alpha < 1.0.0

1.0.0[-alpha]
    `-aplha` is a pre-release

    so: [1.0.0-alpha] is before [1.0.0] 
*/

/* ---
1.0.0<2.0.0<2.1.0<2.1.1
*/

//--------------------

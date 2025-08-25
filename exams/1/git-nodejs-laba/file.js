//----------------------------------------------------------------GIT

//-----------------------------------
//VCS version control system
//-----------------------------------

//-----------------------------------
//Each client has an own copy of the project
//-----------------------------------

//----------------------------------- Common commands
/* 
git status
git add
git commit
git push
git pull
git log
*/
//-----------------------------------

//-----------------------------------Less common commands
/* 
git apply
git commit-free
git hash-object
*/
//-----------------------------------

//----------------------------------- Configuration global level
/ git config --get user.name /
/*git config --get user.email*/

//git config --set user.email "value"
//git config --set user.name "value"
//-----------------------------------

//----------------------------------- Configuration repository level
//-----------------------------------

//----------------------------------- Repositories
//Represents a single project

//It has a .git file to track updates within the directory

//git init
//-----------------------------------

//----------------------------------- git status
//Files can be in several states in a repository
//untracked
//staged
//commited
//-----------------------------------

//-----------------------------------COMMIT
//A commit is a snapshot of the repository at some given point in time.

//git commit -m "Commit (short preferred) description"
//-----------------------------------

//-----------------------------------git log
//shows you:
//all snapshots of the project
//all information about each snapshot
//-----------------------------------

//-----------------------------------commit hash
//unique identifier for a commit
//-----------------------------------

//-----------------------------------GIT
//git is just files
//there is a .git hidden repository that stores all the objects that are needed to track every snapshot and information about a project
//git is made of objects
//-----------------------------------

//-----------------------------------TREE
// how git stores directories
//every  directory has its own hash
//-----------------------------------

//-----------------------------------BLOB
//how git stores files

//every file has its hash and is associated to the hash of a tree (a directory)
//-----------------------------------

//-----------------------------------Technique 
//Git check into hash of existing files between snapshots for not duplicating the creation of files
//-----------------------------------

//-----------------------------------parent folder
//every snapshot has a pointer to the previous one!
//you can check the content of objects with git cat-file -p "HASh"
//-----------------------------------

//-----------------------------------Branch tips
//every branch has its own tip
//-----------------------------------

//-----------------------------------Git objects
//Everything is treated as an object in the repository
//Every commit is stored in the directory called object
//Every THINg! is stored in the object directory!
//So there are the commits (snapshots of the project) with their own directory
//And every file added is stored there... and has its own hash and with that hash the system can reference every file...
//And when for example a new snapshot is created and a file has not changed... then neither does the hash... so there is no need to generate that file again... just point to the same one!
//-----------------------------------

//-----------------------------------git branch
//git branch
//tells in which branch we are located
//-----------------------------------

//----------------------------------- git branch
//you can also use the command for creating a new branch based on the one you were located
//-----------------------------------

//-----------------------------------git switch
//creates a new branch based on the one you were located and reallocate you into the new one.
//-----------------------------------

//-----------------------------------merging
//It takes the content of the indicated branch and put it into the one you currently are.
//It creates what is called a merge commit
//And then the branch indicated fusion with the one you currently are...
//You can decide what to include or not in the current branch...
//And when is done, the previous indicated branch (the one with the content you wanted to pull back) dissapears

//-----------------------------------

//-----------------------------------rebase
//generate a linear history respecting the order of changes of commits into the branch where the command is run.
//Note that in some cases when a bug appears and it is needed to revert, rebasing help us in debugging rather than merging construction
//That is because merging will generate a single commit with ALL the changes of the other branch 
//While rebase will take from the corresponding base branch EVERY commit separately that were created into the branch where the command is run with the corresponding order.
//That way, the commits are more and the changes more separated in order to access them.
//-----------------------------------

//-----------------------------------Conflicts
//They happen when two different branches that you want to merge or rebase have modifications in same files and same lines and git does not know how to resolve that.
//So it may be needed to be resolved manually by the programmer.

//Small pull requests
//Small branches
//With small commits
//plis

//everything as small as possible
//-----------------------------------

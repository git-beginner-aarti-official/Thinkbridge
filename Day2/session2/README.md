# Git basics - local workflow

git configurations :     
	(git uses your name and email to label your commits)
	git config --global user.name  "GitHub Name / username"      
    (global : for every repo)
	git config --global user.email "GitHub registered email"     
    (local : for current repo)


working on GitHub : 

1. Creating a repository
2. Making commits
3. Using branches
4. Working with Git commands

steps to add directory into git :

1. Initialize a repo with "git init"
2. Add directory to your remote repository :
    "git remote add origin 'HTTP like of youru repo'"
3. Add changes
    you can add by 2 ways : 
        - add single file / change "git add filename"
        - add all file / changes "git add ."
4. Commit changes "git commit -m 'comment'"
5. create and switch branches 
        - "git branch"
        - "git branch -M (name of the branch)"

        working on branch :
            - git checkout branch_name   (to navigate these  branch)
            - git checkout -b branch_name (to create new branch)
            - git checkout -d branch_name (to create new branch)
    
6. Push on github :
    " git push origin main"  


You can check status in your repo (local and remote):
    "git status"
    there are four different status you can observe
        4 status : 
            1. untracked : new file that git doesn't tracked yet
            2. modified : changed
            3. unmodified : unchanged
            4. staged : file ready to committed 
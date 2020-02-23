# Usage Instructions

## Front End "Credentials"  
Add your `cloud_name` and a `preset` name to the index.html.

## Launch Server
You can use any HTTP server to launch this example, here are a few suggestions:

* `npx http-server .` (Node.js)
* `python -m SimpleHTTPServer` (Python)
* `python3 -m http.server` (Python)
* Install [live-server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plug-in if you use Visual Studio Code

Any of the above options would work. Once the HTTP server is running, open your browser and go to with the created URL. If you're using **live-server**, right click on the index.html and choose `Open with Live Server` 

### Keeping Forked Repo Up to date
#### Set upstream master

`git remote -v` 

`git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git`

`git remote -v`

[Configuring for a Remote](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork)

#### Fetch and Merge Master

`git fetch upstream` 

`git checkout master`

`git merge upstream/master` 

[Github Syncing a Fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)
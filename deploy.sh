echo "Switching to branch master"
git checkout master

# echo "Pulling latest changes"
# git pull

echo "Building the project"
npm run build

echo "Copying the build to the server"
scp -r dist/* ai2dz@ai2dz.com:/home/ai2dz.com/public_html/codeIT-Learning/

echo "Deployment completed"
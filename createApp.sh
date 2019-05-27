groupName=$1
appName=$3

# Create an App Service plan in `B1` tier.
az appservice plan create --name $appName --resource-group $groupName --sku B1 --location southcentralus --is-linux

# Create a web app.
az webapp create --resource-group $groupName --plan $appName --name $appName -r "node|10.14"

# Configure continuous deployment from GitHub. 

az webapp deployment source config --name $appName --resource-group $groupName \
--repo-url $gitrepo --branch master 

# add instances 
az appservice plan update -g $groupName -n $appName --number-of-workers 3

echo http://$appName.azurewebsites.net

#!/bin/bash

createSQL()
{
# Set variables for the new SQL
resourceGroup=$1
myserver=$2 
mydb=$3

#Create a Standard S0 database.
createdSQL=$(az sql db list --$myserver --resourceGroup --query [].name | grep -E $mydb)
if [ -z $createdSQL ]; then
az sql db create \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0

}


az sql db delete \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0


      

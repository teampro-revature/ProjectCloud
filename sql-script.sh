#!/bin/bash

# Set variables for the new SQL
resourceGroup=$1
myserver=$2 
mydb=$3



# Create a resource group
az group create \
    --name $resourceGroup \
    --location southcentralus


#Create a Standard S0 database.
az sql db create \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0


az sql db delete \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0


      
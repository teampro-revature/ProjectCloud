#!/bin/bash

groupname=$1
myserver=$2
admin=$3
adminpass=$4

#Create a Standard S0 database.
az sql server create -l southcentralus -g $groupname -n $myserver -u $admin -p $adminpass
az sql db create \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0

}


az sql db delete \
      --resource-group $resourceGroup --server $myserver --name $mydb --service-objective S0


      

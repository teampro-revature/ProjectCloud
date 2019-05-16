#!/bin/bash

createStorages()
{
resourcegroup=$1
blobStorageAccount=$2
createdStorage=$(az storage account list --query [].name | grep -E $blobStorageAccount)
if [ -z $created storage ]; then 
  az storage account create \
  --name $blobStorageAccount \
--location southcentralus \
--resource-group $resourcegroup \
--sku Standard_LRS \
--kind blobstorage \
--access-tier hot

blobStorageAccountKey=$(az storage account keys list -g $resourcegroup \
-n $blobStorageAccount --query [0].value --output tsv)
}

createContainers ()
{
blobStorageAccount=$1
containerName=$2
blobStorageAccountKey=$(az storage account keys list -g $resourcegroup \
-n $blobStorageAccount --query [0].value --output tsv)
createdContainer=$(az storage container list --account-name $blobStorageAccount --query [].name | grep -E $containerName)
if [ -createdContainer ]; then 
az storage container create -n $containerName --account-name $blobStorageAccount \
--account-key $blobStorageAccountKey --public-access container 
}

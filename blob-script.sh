#!/bin/bash

resourcegroup=$1
blobStorageAccount=$2

createdStorage=$(az storage account list --query [].name | grep -E $blobStorageAccount)
if [ -z $createdStorage ]; then
  az storage account create \
  -n $blobStorageAccount \
--location southcentralus \
-g $resourcegroup \
--sku Standard_LRS \
--kind blobstorage \
--access-tier hot

fi

blobStorageAccountKey=$(az storage account keys list -g $resourcegroup \
-n $blobStorageAccount --query [0].value --output tsv)
echo "$blobStorageAccount"

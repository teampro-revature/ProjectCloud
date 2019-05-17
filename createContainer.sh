#!/bin/bash


blobStorageAccount=$1
containerName=$2

blobStorageAccountKey=$(az storage account keys list -g $resourcegroup \
-n $blobStorageAccount --query [0].value --output tsv)

createdContainer=$(az storage container list --account-name $blobStorageAccount --query [].name | grep -E $container$if [ -createdContainer ]; then
az storage container create -n $containerName --account-name $blobStorageAccount \
--account-key $blobStorageAccountKey --public-access container

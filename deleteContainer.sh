#!/bin/bash

groupname=$1
blobStorageAccount=$2
containername=$3

blobStorageAccountKey=$(az storage account keys list -g $groupname \
-n $blobStorageAccount --query [0].value --output tsv)

createdContainer=$(az storage container list --account-name $blobStorageAccount --query [].name | grep -E $container$if ! [ -z createdContainer ]; then
az storage container delete \
--account-name $blobStorageAccount \
--account-key $blobStorageAccountKey \
-n $containername

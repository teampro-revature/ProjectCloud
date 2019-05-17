#!/bin/bash

blobname=$1
groupname=$2

createdBlob=$(az storage account list --query [].name | grep -E $blobname)
if ! [ -z createdBlob ]; then
az storage account delete -n $blobname -g $groupname

fi

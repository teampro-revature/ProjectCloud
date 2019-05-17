#!/bin/bash

blobname=$1
groupname=$2

createdBlob=$(az storage account list [].name | grep -E $blobname)
if ! [ -z createdBlob ]
az storage account delete -n $blobname -g $groupname

fi

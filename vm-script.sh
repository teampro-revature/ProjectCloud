#!/bin/bash
vmname=$1
resourcegroup=$2
username=$3
diskname=$4

#Checking group exists or not through if condition 
if [ "$( az group exists --name $resourcegroup )" = "false" ]; then
  az group create -n $resourcegroup -l southcentralus
fi
#disk Creation
az disk create -g $resourcegroup --name $diskname --size-gb 10 --os-type Linux
#VM Creation
az vm create -g $resourcegroup -n $vmname --image UbuntuLTS  --size standard_B1s --custom-data './provision.txt' --generate-ssh-keys --admin-username $username --attach-data-disks $diskname 
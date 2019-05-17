#!/bin/bash

    vmName=$2
    groupName=$3

    createdVm=$(az vm list --query [].name | grep -E $vmName)
    if 
        [
            -z $createdVm   
        ]; then 
            az vm delete --name $VMname \
            --resource-group $groupname 

            echo "deleted"
    else
        exit 1
    fi

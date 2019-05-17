#!/bin/bash

   vmName=$1
   groupname=$2

    createdVm=$(az group list --query [].name | grep -E $vmName)
    if [ -z $createdVm ]; then
            az vm delete -n $vmName -g $groupname

            echo "deleted"
    else
        echo "error"
        exit 1
    fi

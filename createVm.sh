#!/bin/bash

    vmName=$1
    groupName=$2

    createdVm=$(az vm list --query [].name | grep -E $createdVms)
    if [ -z $createdVm && $createdGroup ]; then 
            az vm create --name $VMname \
            --resource-group $groupname \
            --image UbuntuLTS \
            --size B1S \
            --location southcentralus 



            echo "Welcome to your virtual machine"
    else
        exit 1
    fi

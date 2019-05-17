#!/bin/bash

    groupname=$1
    locations=$2

    createdGroup=$(az group list --query [].name | grep -E $groupname)
    if 
        [
            -z $createdGroup 
        ]; then 
            az group create --resource-group $groupname \
            --location $locations \

            echo "group created"
    else
        echo "error"
        exit 1
    fi


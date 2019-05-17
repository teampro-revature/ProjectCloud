#!/bin/bash

groupname=$1
       createdGroup=$(az group list --query [].name | grep -E $groupname)
    if ! [ -z $createdGroup ]; then
            az group delete --resource-group $groupname 

            echo "deleted"
    else
        echo "error"
        exit 1
    fi

!/bin/bash

createGroup() 
{
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
}

deleteGroup()
{
        createdGroup=$(az group list --query [].name | grep -E $groupname)
    if ! [ -z $createdGroup ]; then
            az group delete --resource-group $groupname 

            echo "deleted"
    else
        echo "error"
        exit 1
    fi
}

command $1
$2 $3

!/bin/bash 

net=$1
group=$2

       createdNet=$(az network vnet list --query [].name | grep -E $net)
    if ! [ -z $createdNet ]; then
            az network vnet delete --resource-group $groupname --name $net 

            echo "deleted"
    else
        echo "error"
        exit 1
    fi

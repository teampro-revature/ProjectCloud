!/bin/bash

createVm() 
{
    vmName=$2
    groupName=$3

    createdVm=$(az vm list --query [].name | grep -E $createdVms)
     createdGroup=$(az group list --query [].name | grep -E $groupname)
    if 
        [
            -z $createdVm && $createdGroup 
        ]; then 
            az vm create --name $VMname \
            --resource-group $groupname \
            --image UbuntuLTS \
            --size B1S \
            --location southcentralus 



            echo "Welcome to your virtual machine"
    else
        exit 1
    fi
}
deleteVm()
{
    createdVms=$1
    vmName=$2
    groupName=$3

    createdVm=$(az vm list --query [].name | grep -E $createdVms)
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
}
command $1
$2 $3

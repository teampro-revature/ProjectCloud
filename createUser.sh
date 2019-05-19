#!/bin/bash

## automate the process of creating, assigning, deleting a directory user
## include: azure, must be admin, add role of reader or contributor to subscription,
## remove role of reader or contributor to subscription, delete non-admin only, 1 script with 3 functions

## checks to see if azure has been installed
if ! [ -e /home/linuxbrew/.linuxbrew/bin/az ]; then
        exit 1
        echo "install azure"
fi

## username for admin
username=$1


createUser()
{
    newUser=$1
    DOMAIN=joshweston33gmail.onmicrosoft.com
    principal=$newUser@$DOMAIN
    newPass=Password1
    userSub=$2

    ## checks to see if the user already exists
    createdUsers=$(az ad user list --query [].userPrincipalName | grep -E /$principal/)

## if the user does not exist creates a new one
    if [ -z $createdUsers ]; then
        az ad user create \
        --display-name $newUser \
        --user-principal-name $principal \
        --password $newPass \
        --force-change-password-next-login \
        --subscription $userSub

        echo "created user"
    else
        echo "user not created"
        exit 1
    fi
}

assignRole()
{
    action=$1   ## function needs either a create or delete action
    principal=$2        ##used to hold the users username
    role=$3     ##used to hold the users role

        #checks users against input
    createdUsers=$(az ad user list --query [].userPrincipalName | grep -E /$principal/)

        ## admin needs to choose a valid action
    if [ $action != "create" ] && [ $action != "delete" ]; then
        echo "choose a valid action create or delete"
        exit 1
    fi
        #checks to see if the user exists
            if ! [ -z $createdUsers ]; then
        echo "user does not exist"
        exit 1
    fi
        ## checks to see if the admin has input a valid action
    if [ $role != "reader" ] && [ $role != "contributor" ]; then
        echo "Assign reader or contributor"
    fi
        ## admin assigns or removes role
    az role assignment $action --assignee $principal --role $role
    echo "Success"

}

deleteUser()
{
   principal=$1      ## used to hold users username

        ## checks for admin privliges
    admin=$(az role assignment list \
    --include-classic-administrators \
    --query "[?id=='NA(classic admins)'].principalName" | grep -E $principal)

        ##cannot delete admin
    if ! [ -z $admin ]; then
        echo "cannot delete admin"
        exit 1
    fi

        #delete the user
    az ad user delete --upn-or-object-id $principal
    echo "deleted user"
}

 # login to the admin
az login -u $username

admin=$(az role assignment list \
    --include-classic-administrators \
    --query "[?id=='NA(classic admins)'].principalName" | grep -E $username)

if ! [ -z $admin ]; then
    # functions assigned to delete
    command=$2
    $command $3 $4 $5
else

    echo "you are not an admin"
    exit 1

fi

exit 0

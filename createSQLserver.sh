#!/bin/bash

groupname=$1
myserver=$2
admin=$3
adminpass=$4

#Create a Standard S0 database.
az sql server create -l southcentralus -g $groupname -n $myserver -u $admin -p $adminpass

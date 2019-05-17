#!/bin/bash

myserver=$1
groupname=$2

az sql server delete -n $myserver -g $groupname

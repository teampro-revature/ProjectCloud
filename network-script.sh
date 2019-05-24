#!/bin/bash

MyResourceGroup=$1
MyVnet=$2
MySubnet=$3
MyNsg=$4

createdVnet [az network vnet --query vnet.name
az network vnet create -g $MyResourceGroup -n $MyVnet --address-prefix 10.0.0.0/24 
                            

az network vnet subnet create -g $MyResourceGroup --vnet-name $MyVnet -n $MySubnet \
                            --address-prefixes 10.0.0.0/26 --network-security-group $MyNsg1                           


az network nsg rule create -g $MyResourceGroup  -n In_bound --nsg-name $MyNsg1 --priority 100 \
                            --direction Inbound --source-address-prefixes 0.0.0.0/1 --source-port-ranges 22 80 443 \
                            --destination-address-prefixes 10.0.0.0/26 --destination-port-ranges 22 80 443 --access Allow --protocol Tcp 


az network nsg rule create -g $MyResourceGroup -n Out_bound --nsg-name $MyNsg1  --priority 100 \
                           --direction Outbound --source-address-prefixes VirtualNetwork --source-port-ranges '*' \
                           --destination-address-prefixes '*' --destination-port-ranges '*'  --access Allow --protocol Tcp 



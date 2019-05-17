let grabblob = document.querySelector("#section")

if(grabblob){

   fetch('/blobs')
   .then(res => res.json()) //array for multiple blobs 
   .then(res => {
       res.forEach(blob =>{ // used for execute a function each element in array
         const blo = document.createElement('blo')
         blo.src = blob
         grabfile.appendChild(blo)  //Node.appendChild() method adds a node to the end of the list of children of a specified parent node.
       })
   });

// Importing fileSystem Module, We can use destructuring method also.
// Like const {writeFile, readFile} = require('fs')
const fs = require('fs');

// Write into a file
fs.writeFile('data.txt', "testing the file", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File is opened");
    }
})

// Appending new data to file
fs.appendFile('data.txt', "\nAdding 2nd data", (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Append is succesfull");
    }
})

// Read from a existing file and searching a substring
fs.readFile('data.cpp', 'utf-8', (err, data)=>{
    let st = "";
    let subst = "int";
    if(err){
        console.log(err);
    }
    else{
        f = false;
        for(var i =0;i<data.length;i++){
            st += data[i]
            if(st.includes(subst)){
                f = true;
                break;
            }
        }
        if(f){
            console.log(`${subst} is found`);
        }
        else{
            console.log(`${subst} is not found`);
        }
    }
})

// Deleting a existing file
fs.unlink('data2.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Deleted");
    }
})

// Checkinhg if a file exist or not
const fe = fs.existsSync('data.txt');
if(fe){
    console.log("OK");
}
else{
    console.log("NOT OK");
}
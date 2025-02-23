/*
You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

for example, these files become:

1. name.jpg
2. name.png
3. this.pdf
4. diva.zip
5. Rohan.zip
6. cat.jpg
7. Rohit.pdf

solution-->
this:
jpg/name.jpg, jpg/cat.jpg
png/name.png
pdf/this.pdf , pdf/Rohit.pdf
zip/diva.zip, zip/Rohan.zip

*/

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath =
  "C:\Users\divak\OneDrive\Desktop\web_Development\WebDevelopment\Exercise13";

let files = await fs.readdir(basepath);

for (const item of files) {
    console.log("running for", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if(ext != "js" && ext != "json" && item.split(".").length > 1){
        if(fsn.existsSync(path.join(basepath, ext))){
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}

  



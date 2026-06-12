// import * as fs from "node:fs";
import path from "node:path";
import * as fsPromises from "node:fs/promises";

// function createFile(pathName) {
//   // Syncchronous / Blocking (not recommended)
//   fs.writeFileSync(pathName, "Hello World! \n")
//   fs.writeFileSync(pathName, "Hello Javascript!") // It overwrites the file
//   fs.appendFileSync(pathName, "Hello Javascript!")
//   console.log("File created successfully!");

//   // ------------------------------------------------------

//   // Asynchronous / Non-blocking (recommended)
//   // Error first callbacks
//   // Below approach leads to callback hell
//     fs.writeFile(pathName, "Hello World! \n", (err) => {
//       if (err) {
//         console.log("Error creating file", err);
//         return;
//       }
//       fs.appendFile(pathName, "Hello Javascript!", (err) => {
//         if (err) {
//           console.log("Error creating file", err);
//           return;
//         }
//         console.log("File created successfully!");
//       });
//     });
//     console.log("This is a non-blocking call");
// }

// createFile("./hello.txt");

// -------------------------------------------------------

// async function createFile(pathName) {
//   try {
//     await fsPromises.writeFile(pathName, "Hello Nodejs! \n");
//     await fsPromises.appendFile(pathName, "Hello Javascript! \n");
//     console.log("File created successfully!");
//   } catch (error) {
//     console.log("Error creating file", error);
//   }
// }

// createFile("./hello.txt");

// -------------------------------------------------------

export async function createFile(filePath, content = "") {
  await fsPromises.writeFile(filePath, content);
}

export async function writeToFile(filePath, content = "") {
  await fsPromises.appendFile(filePath, content);
}

export async function readFile(filePath) {
  const content = await fsPromises.readFile(filePath, "utf-8");
  console.log("Content : ", content);
}

export async function deleteFile(filePath) {
  await fsPromises.unlink(filePath);
}

export async function getFileInformation(filePath) {
  const stats = statSync(filePath);
  return {
    name: path.basename(filePath),
    size: `${(stats.size / 1024).toFixed(2)} KB`,
    type: stats.isFile() ? "File" : "Folder",
    created: stats.birthtime.toLocaleString(),
    modified: stats.mtime.toLocaleString(),
  };
}

export async function deleteFolder(folderPath) {
  await fsPromises.rm(folderPath, { recursive: true });
}

export async function createFolder(folderName) {
  await fsPromises.mkdir(folderName, { recursive: true });
}

// createFolder("./contents/images/albums");
// readFile("./hello.txt");
// deleteFile("./hello.txt");
// deleteFolder("./contents/images/albums");
// createFile("./hello.txt", "Hello Nodejs!");
// const stats = await getFileInformation("./hello.txt");
// console.log(stats);

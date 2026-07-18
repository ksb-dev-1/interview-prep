import * as fsPromises from "node:fs/promises";
import * as readline from "node:readline/promises";
import path from "node:path";
import { stdin, stdout } from "process";
import chalk from "chalk";

// Custom modules
import {
  createFile,
  writeToFile,
  readFile,
  deleteFile,
  getFileInformation,
  createFolder,
  deleteFolder,
} from "./fs.js";

async function listItems(folderPath = "./") {
  const items = await fsPromises.readdir(folderPath, { withFileTypes: true });

  return items.map((item) => ({
    name: item.name,
    type: item.isDirectory() ? "Folder" : "File",
    path: path.join(import.meta.dirname, item.name),
  }));
}

async function showMenu() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  while (true) {
    console.clear();
    console.log(chalk.blue.bold("\n 📁 FILE MANAGER \n"));

    const options = [
      "Create a file",
      "Write to a file",
      "Read a file",
      "Delete a file",
      "Get file information",
      "List files and folders",
      "Create a folder",
      "Delete a folder",
      "Exit",
    ];

    options.forEach((option, index) => {
      console.log(chalk.yellow(`${index + 1}. `) + chalk.white(`${option}`));
    });

    const answer = await rl.question(chalk.cyan("\nChoose an option: "));

    try {
      switch (answer) {
        case "1": {
          const filePath = await rl.question(chalk.cyan("File path: "));
          const content = await rl.question(
            chalk.cyan("Initial content (optional): ")
          );
          await createFile(filePath, content);
          console.log(chalk.green("✅ File created successfully!"));
          break;
        }
        case "2": {
          const filePath = await rl.question(chalk.cyan("File name: "));
          const content = await rl.question(chalk.cyan("Content to write: "));
          await writeToFile(filePath, `\n${content}`);
          console.log(chalk.green("✅ Content written to file!"));
          break;
        }
        case "3": {
          const filePath = await rl.question(chalk.cyan("File name: "));
          await readFile(filePath);
          break;
        }
        case "4": {
          const filePath = await rl.question(
            chalk.cyan("File name to delete: ")
          );
          await deleteFile(filePath);
          console.log(chalk.green("✅ File deleted!"));
          break;
        }
        case "5": {
          const filePath = await rl.question(chalk.cyan("File/folder path: "));
          const info = await getFileInformation(filePath);
          console.log(chalk.magenta("\n📄 File Information:"));
          console.table(info);
          break;
        }
        case "6": {
          const folderPath = await rl.question(chalk.cyan("Folder path: "));
          const items = await listItems(folderPath || "./");
          console.log(
            chalk.magenta(`\n📁 Files and Folders in ${folderPath || "./"}`)
          );

          items.forEach((item) => {
            const icon = item.type === "Folder" ? "📁" : "📄";
            console.log(`${icon} ${item.name} (${item.type})`);
          });
          break;
        }
        case "7": {
          const folderName = await rl.question(chalk.cyan("Folder name: "));
          await createFolder(folderName);
          console.log(chalk.green("✅ Folder created!"));
          break;
        }
        case "8": {
          const folderPath = await rl.question(
            chalk.cyan("Folder path to delete: ")
          );
          await deleteFolder(folderPath);
          console.log(chalk.green("✅ Folder deleted!"));
          break;
        }
        case "9": {
          console.log(chalk.green("👋 Exiting..."));
          rl.close();
          process.exit(0);
        }
        default:
          console.log(chalk.red("❌ Invalid choice. Try again."));
      }
    } catch (err) {
      console.error(chalk.red("⚠️ Error: "), err.message);
    }

    await rl.question(chalk.gray("\nPress ENTER to continue..."));
  }
}

showMenu();

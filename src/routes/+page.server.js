// @ts-nocheck
import fs from 'fs';

export function load({ params }) {
  // Read all directories in current directory
  const currentWorkingDirectory = process.cwd();

  // Read all files in current directory
  const files = fs.readdirSync("./src/routes");

  // Filter out all files that are not directories
  const directories = files.filter(file => fs.statSync(currentWorkingDirectory + "/src/routes/" + file).isDirectory());
  let jsonDirectories = []
  directories.forEach(directory => {
    let json = fs.readFileSync(currentWorkingDirectory + "/src/routes/" + directory + "/page.json");
    json = JSON.parse(json);
    jsonDirectories.push({name: json.name, path: directory, json: json});
  })
  console.log(jsonDirectories);
  return jsonDirectories
}

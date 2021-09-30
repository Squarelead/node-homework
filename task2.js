import * as fs from "fs";
import { csv } from "csvtojson";

const csvFilePath = "./csv/nodejs-hw1-ex1.csv";

var writer = fs.createWriteStream("file.txt");

csv()
  .fromFile(csvFilePath)
  .subscribe(
    (json) => writer.write(JSON.stringify(json) + "\n"),
    (error) => console.log(`Error:${error}`),
    () => {
      console.log("Файл успешно записан");
    }
  );

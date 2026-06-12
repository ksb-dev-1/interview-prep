import { createServer } from "node:http";
import fs from "node:fs";
import fsPromise from "node:fs/promises";

const server = createServer(async (req, res) => {
  console.log("Request recieved");

  // res.end("Hello from nodejs server!");

  // console.log("req", req);

  //   if (req.url === "/") {
  //     res.writeHead(200, {
  //       "Content-Type": "text/html",
  //     });

  //     // res.write("<h1>Hello from nodejs server!</h1>");
  //     // res.write(fs.readFileSync("index.html"));

  //     const dataStream = fs.createReadStream("index.html");

  //     // dataStream.on("data", (chunk) => {
  //     //   res.write(chunk);
  //     // });

  //     // dataStream.on("end", () => {
  //     //   res.end();
  //     // });

  //     // OR

  //     dataStream.pipe(res);
  //   } else if (req.url === "/about") {
  //     res.writeHead(200, {
  //       "Content-Type": "text/html",
  //     });
  //     res.write("<h1>This is yout about page</h1>");
  //   } else if (req.url === "/expenses") {
  //     if (req.method === "POST") {
  //       let buffer = "";

  //       req.on("data", (chunk) => {
  //         // console.log("Chunk : ", chunk);
  //         buffer += chunk.toString();
  //       });

  //       //   req.on("end", async () => {
  //       //     console.log("Buffer", buffer);

  //       //     const data = await fsPromise.readFile("./db.json");
  //       //     const dbData = JSON.parse(data);
  //       //     dbData.push(JSON.parse(buffer));
  //       //     await fsPromise.writeFile("./db.json", JSON.stringify(dbData, null, 2));
  //       //     res.end("Data received successfully!");
  //       //   });
  //       req.on("end", async () => {
  //         console.log("Buffer", buffer);

  //         try {
  //           const data = await fsPromise.readFile("./db.json");
  //           const dbData = JSON.parse(data);
  //           const parsedBody = JSON.parse(buffer); // this is where error occurs if body is bad

  //           dbData.push(parsedBody);

  //           await fsPromise.writeFile(
  //             "./db.json",
  //             JSON.stringify(dbData, null, 2)
  //           );
  //           res.end("Data received successfully!");
  //         } catch (err) {
  //           console.error("Error parsing JSON or writing file:", err.message);
  //           res.statusCode = 400;
  //           res.end("Invalid JSON data");
  //         }
  //       });
  //     }
  //     if (req.method === "GET") {
  //       const data = await fsPromise.readFile("./db.json");
  //       // const dbData = JSON.parse(data)
  //       res.end(data);
  //     }
  //   }

  let count = 0;

  // Server sent events (SSE)
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "cache-control": "no-cache",
      connection: "keep-alive",
    });

    setInterval(() => {
      res.write(`The count is: ${count++} \n\n`);
    }, 1000);
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

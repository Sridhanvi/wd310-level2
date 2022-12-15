const http = require("http");
const fs = require("fs");

let homeContent = "";
let projectContent = "";
let regcontent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, register) => {
  if (err) {
    throw err;
  }
  regcontent = register;
});

const args = require("minimist")(process.argv.slice(1));

http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(projectContent);
        response.end();
        break;
      case "/register":
        response.write(regcontent);
        response.end();
        break;
      default:
        response.write(homeContent);
        response.end();
        break;
    }
  })

  .listen(args["port"]);

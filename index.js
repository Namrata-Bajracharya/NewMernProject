const http = require("http");

const httpServer = http.createServer(app);
const port = 9005;
const host = "127.0.0.1";

httpServer.listen(port, host, (err) => {
  if (!err) {
    console.log("Server is running on the port:", PORT);
    console.log("press CTRL+C to terminate server");
    console.info(`URL:http://${host}:${PORT}`);
  }
});

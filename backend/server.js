/*
 * @format
 */
const express = require("express");
const cors = require("cors");

const routes = require("./src/routes");
const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === "production";

const app = express();

app.use(express.json());
app.use("/download", express.static("uploads"));

if (!isProduction) {
  app.use(
    cors({
      origin: "*",
    })
  );
}

app.use("/", routes);

// error handler
app.use((err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = isProduction ? {} : err;

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

app.listen(3001, () => {
  console.log("listening on port ", 3001);
});

// export default app;

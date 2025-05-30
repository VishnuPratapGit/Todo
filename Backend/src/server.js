import app from "./app.js";
import connectDB from "./db/index.js";
const port = 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server started successfully`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

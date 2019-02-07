/* app/server.ts */

// Import everything from express and assign it to the express variable

import express, { Request, Response } from 'express';
// Import WelcomeController from controllers entry point
// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port = process.env.PORT || 8080;
// Mount the WelcomeController at the /welcome route
app.use('/', (req: Request, res: Response) => {
   res.send(200);
});
// Serve the application at the given port
app.listen(port, () => {
   // Success callback
   console.log(`Listening at http://localhost:${port}/`);

});
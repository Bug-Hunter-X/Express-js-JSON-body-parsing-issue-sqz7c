# Express.js JSON Body Parsing Issue

This repository demonstrates a common issue encountered when working with JSON request bodies in Express.js applications.  The problem arises when the client omits the `Content-Type: application/json` header or sends an incorrect header, causing the `express.json()` middleware to fail to parse the request body.

## Bug

The `bug.js` file contains an Express.js app that expects a JSON request body. However, if a POST request to the `/user` endpoint is made without the correct `Content-Type` header, the `req.body` will be empty, leading to unexpected behavior. 

## Solution

The `bugSolution.js` file offers a solution to address this issue.  It includes error handling to check for the `Content-Type` header and provides a more robust way to process JSON request bodies.
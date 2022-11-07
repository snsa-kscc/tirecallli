// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const fs = require("fs");

const handler = async (event) => {
  try {
    const subject = event.queryStringParameters.name || "World";
    fs.writeFile("public/helloworld.txt", subject, function (err) {
      if (err) return console.log(err);
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

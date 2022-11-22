const { SLACK_URL } = process.env;
//const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: event.body }),
    };
    const response = await fetch(SLACK_URL, options);
    return {
      statusCode: 200,
      body: "success",
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: err }),
    };
  }
};

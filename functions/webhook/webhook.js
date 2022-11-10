const { WEBHOOK_URL } = process.env;
import fetch from "node-fetch";

exports.handler = async function (event, context) {
  // try {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: "jkhkhk" }),
  };
  const response = await fetch(WEBHOOK_URL, options);
  return {
    statusCode: 200,
    // body: "success",
  };
  // } catch (err) {
  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({ msg: err }),
  //   };
  // }
};

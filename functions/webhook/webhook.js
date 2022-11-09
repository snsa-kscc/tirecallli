const { SLACK_WEBHOOK } = process.env;

exports.handler = async function (event, context) {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: "jkhkhk" }),
    };
    const response = fetch("https://webhook.site/6b0e94a9-456c-41e5-99f8-15f80c83eb05", options);
    console.log(response);
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

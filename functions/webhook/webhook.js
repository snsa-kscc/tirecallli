const { SLACK_WEBHOOK } = process.env;

exports.handler = async function (event, context) {
  const desc = event.body;
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: desc }),
    };
    const response = await fetch(SLACK_WEBHOOK, options);
    console.log(response);
    return {
      statusCode: 200,
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ msg: err.response.body.title }),
    };
  }
};

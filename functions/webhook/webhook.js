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
    const response = await fetch(SLACK_WEBHOOK, options);
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

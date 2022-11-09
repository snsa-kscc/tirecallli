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
    const response = await fetch("https://hooks.slack.com/services/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", options);
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

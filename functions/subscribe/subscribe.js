const mailchimp = require("@mailchimp/mailchimp_marketing");

const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = process.env;

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX,
});

exports.handler = async function (event, context) {
  try {
    const { email } = JSON.parse(event.body);
    const result = await mailchimp.lists.addListMember(MAILCHIMP_LIST_ID, {
      email_address: email,
      status: "pending",
    });
    return {
      statusCode: 200,
      body: JSON.stringify({
        status: "success",
        msg: result.status,
      }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        status: "error",
        msg: err.response.body.title,
      }),
    };
  }
};

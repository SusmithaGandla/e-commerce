const paypal = require("paypal-rest-sdk");
// const paypal = require('@paypal/paypal-server-sdk');


paypal.configure({
  mode: "sandbox",
  client_id: "AbrRvkbtRrPE1MGEtqpXnp0oj1sn1F4QGME0-4VDMa6W5NB7D7Vo8k8UzmAIEq60IvlsKyzmoUSFsM0U",
  client_secret: "ELI3QNvjjhXaeMQz5SoTulyLqiVyCmuMUqa9I2LT9y2auM7bbHXcA3ZTlrIqn81yJUjk_w3QZjoNW6ch",
});

module.exports = paypal;
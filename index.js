var { execSync } = require("child_process")

function notify(param) {
  if (void 0 === param) {
    throw new Error("input must be a string or object!")
  }

  var options = {
    message: '',
    title: '',
    subtitle: '',
    sound: 'Frog'
  }
  if (typeof param === "string") {
    options.message = param
  } else {
    Object.assign(options, param)
  }


  try {
    execSync(`osascript -e 'display notification "${options.message}" with title "${options.title}" subtitle "${options.subtitle}" sound name "${options.sound}"'`)
  } catch (error) {
    console.log("error:", error.message);
  }
}

module.exports = notify


process.stdout.write("prompt >");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(' ');

  if (cmd[0] === "pwd") {
    const pwd = require("./pwd")
    pwd()
  }
  if (cmd[0] === 'ls'){
    const ls = require("./ls")
    ls()
  }
  if (cmd[0] === 'cat'){
    const cat = require("./cat")
    cat(cmd[1])
  }
  else {
    console.log('please enter a command')
  }
})

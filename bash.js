process.stdout.write("prompt >");

const done=(output)=>{
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
}

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === "pwd") {
    const pwd = require("./pwd");
    pwd();
  }
  if (cmd[0] === "ls") {
    const ls = require("./ls");
    ls();
  }
  if (cmd[0] === "cat") {
    const cat = require("./cat");
    cat(cmd[1]);
  }
  if (cmd[0] === "curl") {
    const curl = require("./curl");
    curl(cmd[1]);
  } else {
    console.log("please enter a command");
  }
});

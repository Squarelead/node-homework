process.stdin.on("data", (data) => {
  process.stdout.write(String(data).split("").reverse().join("") + "\n");
});

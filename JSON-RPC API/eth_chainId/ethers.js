const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://dashboard.quicknode.com/streams/c8d12bc1-58d3-4800-af5c-42afc7172a2f/");
  const network = await provider.send("eth_19291568");
  console.log(network);
})();

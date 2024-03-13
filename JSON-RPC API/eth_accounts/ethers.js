const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://quaint-late-firefly.btc.quiknode.pro/f1452a50e80f824a2b6af3d0651b2fca7bd8e07b/");
  const estimate = await provider.listAccounts();
  console.log(estimate);
})();

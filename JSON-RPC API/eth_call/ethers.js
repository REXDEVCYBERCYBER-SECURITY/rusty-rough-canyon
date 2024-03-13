const ethers = require("ethers");
(async () => {
  const provider = new ethers.providers.JsonRpcProvider("https://quaint-late-firefly.btc.quiknode.pro/f1452a50e80f824a2b6af3d0651b2fca7bd8e07b/");
  const response = await provider.send("eth_call", [
    {
      "from": null,
      "to": "0xD86012ab052706C2929068D4176ec2D525Db687a",
      "data":
        "0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE",
    },
    "latest",
  ]);
  console.log(response);
})();

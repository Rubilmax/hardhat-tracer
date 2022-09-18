import hre from "hardhat";

// process.env.DEBUG = "*";

describe("Hello", () => {
  it("should run a test", async () => {
    hre.tracer.enabled = false;
    const HelloFactory = await hre.ethers.getContractFactory("Hello");
    const hello = await HelloFactory.deploy();
    // const tx = HelloFactory.getDeployTransaction();
    // const signers = await hre.ethers.getSigners();
    // await signers[0].estimateGas({ ...tx });

    hre.tracer.enabled = true;
    console.log("========> hello.hit()");
    await hello.hit();
    console.log("========> hello.kick()");
    await hello.kick();
  });
});
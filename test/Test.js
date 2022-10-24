const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("VIAToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployTokenFixture() {
    // Contracts are deployed using the first signer/account by default

    const VIAToken = await ethers.getContractFactory("VIAToken");
    const token = await VIAToken.deploy();

    return { token };
  }

  describe("Name", function () {
    it("Should return name as VIAToken", async function () {
      const { token } = await loadFixture(deployTokenFixture);

      expect(await token.name()).to.equal("Victory Ihuoma Anosike");
    });

    it("Should set the Symbol", async function () {
      const { token } = await loadFixture(deployTokenFixture);

      expect(await token.symbol()).to.equal("VIA");
    });

    // it("Should return Total supply", async function () {
    //   const { token } = await loadFixture(deployTokenFixture);

    //   expect(await ethers.provider.getBalance(lock.address)).to.equal(
    //     lockedAmount
    //   );
    // });
  });
});

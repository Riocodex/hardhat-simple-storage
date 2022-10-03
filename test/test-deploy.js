const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})
describe("SimpleStorage", function () {
  // let simpleStorageFactory
  // let simpleStorage
  let simpleStorageFactory, simpleStorage
  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    // assert.equal(currentValue.toString(), expectedValue)
    //both assert above and expect below do the same thing
    expect(currentValue.toString()).to.equal(expectedValue)
  })

  it("should update when we call store" , async function (){
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorage.retrieve()
    assert.equal(currentValue.toString() , expectedValue)
  })

  it("should return the value sent in the addPerson function" , async function () {
    const firster = "rio"
    const firsterNum = "12"
    const txn = await simpleStorage.addPerson(firster , firsterNum)
    await txn.wait(1)

    const rioValue = await simpleStorage.viewPersonNumber(firster)
    assert.equal(rioValue.toString() , firsterNum)
  })

  })
const web3Storage = require("web3.storage");
const WEB3_STORAGE_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3MTQ5OTIzQkVmN0UzZTc0YWE0QzQ3ZTYzM0FFQTA2YjkzYjQxODYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjMzMzQyMTIzMjEsIm5hbWUiOiJQVVNITm9kZVBST2QifQ.7GdEsKyaFAbE12UKUpzZMy9rQL6LDsORwGG4mUesZ6M";
const main = async (data) => {
    console.log("Uploading to IPFS!!!")
    const client = new web3Storage.Web3Storage(WEB3_STORAGE_TOKEN);
    client.token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3MTQ5OTIzQkVmN0UzZTc0YWE0QzQ3ZTYzM0FFQTA2YjkzYjQxODYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjMzMzQyMTIzMjEsIm5hbWUiOiJQVVNITm9kZVBST2QifQ.7GdEsKyaFAbE12UKUpzZMy9rQL6LDsORwGG4mUesZ6M";
    const fileData = [new web3Storage.File([JSON.stringify(data)], "recommendation")];
    client.put(fileData).then((cid) => {
        console.log("File successfully uploaded to IPFS!!!")
        console.log("CID is")
        console.log(cid);
    });
};

module.exports = main
// main("abcd")

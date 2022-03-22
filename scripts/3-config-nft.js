import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfCF47A4C051BF7237678Cf8643b4f231dC7A95bb",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Special geek glasses",
        description: "This NFT will give you access to geeksDAO!",
        image: readFileSync("scripts/assets/eyeglasses.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
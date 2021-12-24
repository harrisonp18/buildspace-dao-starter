import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x0e95dcB3176B587b0eA70A7528e8a3A9F7876922",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Yachter Otter Teaser",
        description: "This NFT will give you access to YachterOtterDAO!",
        image: readFileSync("scripts/assets/yachterotter.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
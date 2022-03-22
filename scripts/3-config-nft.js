import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x9930247914Fb1E40A8bfd679e1E537070922C906",
);
(async () => {
  console.log(bundleDrop)
  try {
    await bundleDrop.createBatch([
      {
        name: "Carlos Matos Membership",
        description: "This NFT will give you access to the Carlos Matos DAO!",
        image: readFileSync("scripts/assets/download-1.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()
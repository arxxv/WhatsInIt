const vision = require("@google-cloud/vision");

(async () => {
  const client = new vision.ImageAnnotatorClient();

  const [result] = await client.textDetection("img.jpg");
  const detections = result.textAnnotations;
  console.log("Text:");
  detections.forEach((text) => console.log(text));
})();

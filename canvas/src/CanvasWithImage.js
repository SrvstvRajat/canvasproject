import React, { useRef, useEffect } from "react";
import "@fontsource/mansalva";

const CanvasWithImage = ({ feedbackData, imageUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.src = imageUrl;
    const curPage = 1;
    image.onload = () => {
      canvas.width = 1240;
      canvas.height = 1440;
      console.log(canvas.width, canvas.height);
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      // ctx.drawImage(image, x, y, image.width , image.height);
      // const scale = Math.min(canvas.width / image.width, canvas.height / image.height);
      // const x = (canvas.width / 2) - (image.width / 2) * scale;
      // const y = (canvas.height / 2) - (image.height / 2) * scale;
      // ctx.drawImage(image, x, y, image.width * scale, image.height * scale);

      ctx.font = "24px Mansalva";
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
      ctx.fillText(`Marks: ${feedbackData.Marks}/10`, 20, 40);

      feedbackData.Feedback.forEach(({ Comment, Reference }) => {
        if (Reference.Page === curPage) {
          console.log(curPage);
          const [[x1, y1], [x2, y2]] = Reference.Coordinates;
          // Draw the green rectangle
          // ctx.beginPath();
          // ctx.rect(x1, y1, x2-x1, y2-y1);
          // ctx.fillStyle = 'rgba(0, 255, 0, 0.4)';
          // ctx.fill();
          // ctx.strokeStyle = 'rgba(0, 0, 0, 1)';
          // ctx.lineWidth = 1; // Set line width to 1 for visibility
          // ctx.stroke();

          const fontSize = 18;
          ctx.font = `bold ${fontSize}px Mansalva`;
          // ctx.font = 'bold 25px Arial';
          ctx.fillStyle = "red";
          ctx.textAlign = "center";

          const lineHeight = 18 * 1.2;
          const lines = [];
          let line = "";
          const words = Comment.split(" ");

          words.forEach((word) => {
            const testLine = line + word + " ";
            const testWidth = ctx.measureText(testLine).width;
            if (testWidth > x2) {
              lines.push(line);
              line = word + " ";
            } else {
              line = testLine;
            }
          });
          lines.push(line);
          let textY =
            y1 + (y2 - y1) / 2 - ((lines.length - 1) * lineHeight) / 2;
          lines.forEach((line) => {
            ctx.fillText(line.trim(), x1 + (x2 - x1) / 2, textY);
            textY += lineHeight;
          });
        }
      });
    };

    return () => {
      image.onload = null;
    };
  }, [imageUrl, feedbackData]);

  return <canvas ref={canvasRef} />;
};

export default CanvasWithImage;

import React, { useEffect } from "react";
import "./styles.css"
import { WaterTexture } from "./WaterTexture";

const CanvasBackground = () => {
  useEffect(() => {
    const waterTexture = new WaterTexture({ debug: true });

    const onMouseMove = (ev) => {
      const point = {
        x: ev.clientX / window.innerWidth,
        y: ev.clientY / window.innerHeight,
      };

      waterTexture.addPoint(point);
    };

    const tick = () => {
      waterTexture.update();
      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    tick();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div id="canvaswatercolor" className="canvas-container">
    </div>
  )

};

export default CanvasBackground;

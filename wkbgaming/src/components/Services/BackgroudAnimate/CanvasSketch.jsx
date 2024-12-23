import React, { useEffect, useRef } from 'react';
import styles from './CanvasSketch.module.css';
import p5 from 'p5';

const CanvasSketch = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const sketch = (p) => {
      let time = 0;
      const lineWeight = 50;
      const lines = 20;

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.frameRate(60);
        p.noFill();
        p.stroke(0);
        p.strokeWeight(lineWeight);
      };

      p.update = () => {
        time++;
      };

      p.draw = () => {
        p.update();
        p.blendMode(p.NORMAL);
        p.background(0);
        p.blendMode(p.SCREEN);
        for (let i = 0; i < lines; i++) {
          const r = 200 + 55 * p.sin(0.4 + -i * 0.1 + time * 0.05);
          const g = 100 + 55 * p.sin(i * 0.1 + time * 0.1);
          const b = 200 + 55 * p.sin(time * 0.1);
          const a = 100 * p.sin((Math.PI * i) / lines);
          const p1x = -i - 1 * i * p.cos(time * 0.05);
          const p1y =
            p.height * 0.5 -
            10 * p.pow(p.height * (i + 3) / lines, 0.5) +
            2 * p.pow(p.height * 0.5 * (lines - i) / lines, p.sin((time - 20) * 0.02 + 0.2));
          const p2x = p.width / 2 + p.width * (0.4 * p.cos(i * 0.01 + time * 0.05));
          const p2y =
            p.height * (0.5 + 0.5 * p.sin(Math.PI * 0.5 + (i * Math.PI) / lines)) -
            500 * p.pow(p.sin(i / lines + Math.PI), 6) +
            2 * p.pow(p.height * 0.5 * (lines - i) / lines, p.sin((time - 15) * 0.02 + 0.2));
          const p3x = p.width + 5 + 5 * p.sin(time * 0.02 - Math.PI * 0.4);
          const p3y =
            p.height * 1 -
            p.pow(p.height * (i + lines * 0.2) / lines, 0.7 + 0.3 * p.sin(time * 0.03 + 0.3));
          p.stroke(r, g, b, a);
          p.quadraticCurve(p1x, p1y, p2x, p2y, p3x, p3y);
        }
      };

      p.quadraticCurve = (p1x, p1y, p2x, p2y, p3x, p3y) => {
        p.beginShape();
        p.vertex(p1x, p1y);
        p.quadraticVertex(p2x, p2y, p3x, p3y);
        p.endShape();
      };
    };

    const canvas = new p5(sketch, canvasRef.current);

    return () => {
      canvas.remove();
    };
  }, []);

  return <div ref={canvasRef} className={styles.canvas} />;
};

export default CanvasSketch;

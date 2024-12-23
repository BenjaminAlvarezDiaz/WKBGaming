import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";

const HeaderCanvasBackground= () => {
  const canvasRef = useRef(null);
  const largeHeaderRef = useRef(null);
  const pointsRef = useRef([]);

 

    useEffect(() => {
      let width, height, largeHeader, canvas, ctx, points, target;
      let currentColor = "rgb(124,160,77";

    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = largeHeaderRef.current;
      largeHeader.style.height = height + "px";

      canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + (Math.random() * width) / 20;
          const py = y + (Math.random() * height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (let i = 0; i < points.length; i++) {
        const closest = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (let i in points) {
        const c = new Circle(
          points[i],
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
        points[i].circle = c;
      }

      pointsRef.current = points;
    };

    const addListeners = () => {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    };

    const mouseMove = (e) => {
      const rect = largeHeader.getBoundingClientRect();
      const posx = e.clientX - rect.left;
      const posy = e.clientY - rect.top;
      target.x = posx;
      target.y = posy;
    };

    const scrollCheck = () => {
      const rect = largeHeader.getBoundingClientRect();
      animateHeader = rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        const point = points[i];
        if (Math.abs(getDistance(target, point)) < 4000) {
          point.active = 0.3;
          point.circle.active = 0.6;
        } else if (Math.abs(getDistance(target, point)) < 20000) {
          point.active = 0.1;
          point.circle.active = 0.3;
        } else if (Math.abs(getDistance(target, point)) < 40000) {
          point.active = 0.02;
          point.circle.active = 0.1;
        } else {
          point.active = 0;
          point.circle.active = 0;
        }

        drawLines(point);
        point.circle.draw();
        movePoint(point);
      }

      requestAnimationFrame(animate);
    };

    const movePoint = (point) => {
      const dx = point.originX - point.x;
      const dy = point.originY - point.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1) {
        point.x += dx * 0.05;
        point.y += dy * 0.05;
      }
    };

    const drawLines = (point) => {
      if (!point.active) return;
      for (let i in point.closest) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(point.closest[i].x, point.closest[i].y);
        ctx.strokeStyle = `${currentColor}, ${point.active})`;
        ctx.stroke();
        //console.log( ctx.strokeStyle);
      }
    };

    const startColorAnimation = () => {
      let isVioletToGreen = true; // Indica si está en la transición de violeta a verde o viceversa
      let step = 0; // Pasos de la transición

      setInterval(() => {
        step += 1;
        if (step >= 15) {
          // Completó una transición, cambia de dirección
          isVioletToGreen = !isVioletToGreen;
          step = 0;
        }

        // Calcula el valor intermedio entre los colores
        const startColor = isVioletToGreen ? "#793DEA" : "#7EC219";
        const endColor = isVioletToGreen ? "#7EC219" : "#793DEA";
        const r = Math.floor(
          parseInt(startColor.substring(1, 3), 16) * (1 - step / 15) +
            parseInt(endColor.substring(1, 3), 16) * (step / 15)
        );
        const g = Math.floor(
          parseInt(startColor.substring(3, 5), 16) * (1 - step / 15) +
            parseInt(endColor.substring(3, 5), 16) * (step / 15)
        );
        const b = Math.floor(
          parseInt(startColor.substring(5, 7), 16) * (1 - step / 15) +
            parseInt(endColor.substring(5, 7), 16) * (step / 15)
        );

        // Actualiza el color actual
        currentColor = `rgb(${r},${g},${b}`;
      }, 400); // Cambio de color cada 400ms
    };

    const Circle = function (pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;

      this.draw = () => {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(126, 194, 25," + this.active + ")";
        ctx.fill();
      };
    };

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    initHeader();
    addListeners();
    animate();
    startColorAnimation(); 
    return () => {
      // Clean up event listeners if component is unmounted
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={styles["large-header"]} ref={largeHeaderRef}>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default HeaderCanvasBackground;

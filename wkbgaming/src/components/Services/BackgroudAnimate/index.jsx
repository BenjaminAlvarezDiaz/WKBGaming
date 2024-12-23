import React from 'react';
import styles from './CanvasComponent.module.css';

class CanvasComponent extends React.Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.ctx = null;
      this.mouse = { x: 0, y: 0, out: false };
      this.gravityStrength = 10;
      this.particles = [];
      this.spawnTimer = 0;
      this.spawnInterval = 10;
      this.type = 0;
      this.time = 0;
    }
  
    componentDidMount() {
      this.initCanvas();
      this.startLoop();
    }
  
    initCanvas() {
      const canvas = this.canvasRef.current;
      this.ctx = canvas.getContext('2d');
      this.resizeCanvas();
      window.addEventListener('resize', this.resizeCanvas);
      canvas.addEventListener('mouseout', this.handleMouseOut);
      canvas.addEventListener('mousemove', this.handleMouseMove);
    }
  
    resizeCanvas = () => {
      const canvas = this.canvasRef.current;
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
    };
  
    handleMouseOut = () => {
      this.mouse.out = true;
    };
  
    handleMouseMove = (e) => {
      const rect = this.canvasRef.current.getBoundingClientRect();
      this.mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        out: false
      };
    };
  
    newParticle() {
      this.type = this.type ? 0 : 1;
      this.particles.push({
        x: this.mouse.x,
        y: this.mouse.y,
        xv: this.type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        yv: this.type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
        c: this.type
          ? `rgb(255, ${(200 * Math.random()) | 0}, ${(80 * Math.random()) | 0})`
          : 'rgb(255, 255, 255)',
        s: this.type ? 5 + 10 * Math.random() : 1,
        a: 1
      });
    }
  
    startLoop(newTime) {
      this.time = newTime;
      requestAnimationFrame(this.loop);
    }
  
    loop = (newTime) => {
      this.draw();
      this.calculate(newTime);
      requestAnimationFrame(this.loop);
    };
  
    draw() {
      const { ctx } = this;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      this.particles.forEach((p) => {
        ctx.globalAlpha = p.a;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, 2 * Math.PI);
        ctx.fill();
      });
    }
  
    calculate(newTime) {
      const dt = newTime - this.time;
      this.time = newTime;
  
      if (!this.mouse.out) {
        this.spawnTimer += dt < 100 ? dt : 100;
        for (; this.spawnTimer > 0; this.spawnTimer -= this.spawnInterval) {
          this.newParticle();
        }
      }
  
      const particleOverflow = this.particles.length - 700;
      if (particleOverflow > 0) {
        this.particles.splice(0, particleOverflow);
      }
  
      this.particles.forEach((p) => {
        if (!this.mouse.out) {
          const x = this.mouse.x - p.x;
          const y = this.mouse.y - p.y;
          let a = x * x + y * y;
          a = a > 100 ? this.gravityStrength / a : this.gravityStrength / 100;
          p.xv = (p.xv + a * x) * 0.99;
          p.yv = (p.yv + a * y) * 0.99;
        }
        p.x += p.xv;
        p.y += p.yv;
        p.a *= 0.99;
      });
    }
  
    componentWillUnmount() {
      window.removeEventListener('resize', this.resizeCanvas);
    }
  
    render() {
      return <canvas ref={this.canvasRef} className={styles.canvas} />;
    }
  }
  
  export default CanvasComponent;
  
import React, { useEffect, useRef, useState } from 'react';

const ConfettiCanvas = () => {
  const canvasRef = useRef(null);
  let context;
  let w = 0;
  let h = 0;

  const COLORS = [
    [235, 90, 70],
    [97, 189, 79],
    [242, 214, 0],
    [0, 121, 191],
    [195, 119, 224]
  ];

  const NUM_CONFETTI = 40;
  const PI_2 = 2 * Math.PI;
  let xpos = 0.9;
  let confetti = [];

  const range = (a, b) => (b - a) * Math.random() + a;

  const drawCircle = (a, b, c, d) => {
    context.beginPath();
    context.moveTo(a, b);
    context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
    context.lineWidth = 2;
    context.strokeStyle = d;
    context.stroke();
  };

  const drawCircle2 = (a, b, c, d) => {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 6, b + 9);
    context.lineTo(a + 12, b);
    context.lineTo(a + 6, b - 9);
    context.closePath();
    context.fillStyle = d;
    context.fill();
  };

  const drawCircle3 = (a, b, c, d) => {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 5, b + 5);
    context.lineTo(a + 10, b);
    context.lineTo(a + 5, b - 5);
    context.closePath();
    context.fillStyle = d;
    context.fill();
  };

  const Confetti = function () {
    this.style = COLORS[~~range(0, 5)];
    this.rgb = `rgba(${this.style[0]}, ${this.style[1]}, ${this.style[2]}`;
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace();
  };

  Confetti.prototype.replace = function () {
    this.opacity = 1;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    this.vy = 0.7 * this.r + range(-1, 1);
  };

  Confetti.prototype.draw = function () {
    this.x += this.vx;
    this.y += this.vy;
    this.opacity -= this.dop;
    if (this.opacity <= 0 || this.y > this.ymax) {
      this.replace();
    }
    if (this.x < 0 || this.x > this.xmax) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb}, ${this.opacity})`);
    drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, `${this.rgb}, ${this.opacity})`);
    drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, `${this.rgb}, ${this.opacity})`);
  };

  const step = () => {
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    confetti.forEach((confettiPiece) => {
      confettiPiece.draw();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext('2d');
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    window.onload = () => setTimeout(resizeWindow, 0);

    for (let i = 1; i <= NUM_CONFETTI; i++) {
      confetti.push(new Confetti());
    }

    step();

    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Detener la animación después de 4 segundos
      confetti = [];
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const resizeWindow = () => {
    w = canvasRef.current.clientWidth;
    h = window.innerHeight;
    canvasRef.current.width = w;
    canvasRef.current.height = h;
  };

  return <canvas ref={canvasRef} className="canvas"></canvas>;
};

export default ConfettiCanvas;

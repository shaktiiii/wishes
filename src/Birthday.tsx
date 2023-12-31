import React, { useEffect, useRef, useState } from 'react';

// Explicitly declare the 'birthday' property on the Window object
declare global {
  interface Window {
    birthday?: {
      fireworks: Firework[];
    };
  }
}

const PI2: number = Math.PI * 2;

const random = (min: number, max: number): number => Math.random() * (max - min + 1) + min | 0;

interface FireworkProps {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  shade: number;
  offsprings: number;
}

class Firework {
  public dead: boolean;
  public offsprings: number;
  public x: number;
  public y: number;
  public targetX: number;
  public targetY: number;
  public shade: number;
  public history: { x: number; y: number }[];
  public madeChilds: boolean;

  constructor({ x, y, targetX, targetY, shade, offsprings }: FireworkProps) {
    this.dead = false;
    this.offsprings = offsprings;
    this.x = x;
    this.y = y;
    this.targetX = targetX;
    this.targetY = targetY;
    this.shade = shade;
    this.history = [];
    this.madeChilds = false;
  }

  update(delta: number, ctx: CanvasRenderingContext2D): void {
    let xDiff = this.targetX - this.x;
    let yDiff = this.targetY - this.y;

    if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) {
      this.x += xDiff * 2 * delta;
      this.y += yDiff * 2 * delta;

      this.history.push({
        x: this.x,
        y: this.y,
      });

      if (this.history.length > 20) this.history.shift();
    } else {
      if (this.offsprings && !this.madeChilds) {
        let babies = this.offsprings / 2;
        for (let i = 0; i < babies; i++) {
          let targetX = this.x + this.offsprings * Math.cos((PI2 * i) / babies) | 0;
          let targetY = this.y + this.offsprings * Math.sin((PI2 * i) / babies) | 0;

          // Assuming 'window.birthday' is initialized elsewhere
          if (window.birthday) {
            window.birthday.fireworks.push(new Firework({ x: this.x, y: this.y, targetX, targetY, shade: this.shade, offsprings: 0 }));
          }
        }
      }
      this.madeChilds = true;
      this.history.shift();
    }

    if (this.history.length === 0) this.dead = true;
    else if (this.offsprings) {
      for (let i = 0; this.history.length > i; i++) {
        let point = this.history[i];
        ctx.beginPath();
        ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)';
        ctx.arc(point.x, point.y, 1, 0, PI2, false);
        ctx.fill();
      }
    } else {
      ctx.beginPath();
      ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)';
      ctx.arc(this.x, this.y, 1, 0, PI2, false);
      ctx.fill();
    }
  }
}

const Birthday: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fireworks, setFireworks] = useState<Firework[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const resize = (): { width: number; spawnA: number; spawnB: number; height: number; spawnC: number; spawnD: number } => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    if (!canvas) {
      return { width: 0, spawnA: 0, spawnB: 0, height: 0, spawnC: 0, spawnD: 0 }; // Return default values or handle accordingly
    }

    const width: number = window.innerWidth;
    const center: number = width / 2 | 0;
    const spawnA: number = center - center / 4 | 0;
    const spawnB: number = center + center / 4 | 0;

    const height: number = window.innerHeight;
    const spawnC: number = height * 0.1;
    const spawnD: number = height * 0.5;

    canvas.width = width;
    canvas.height = height;

    return { width, spawnA, spawnB, height, spawnC, spawnD };
  };

  const onClick = (evt: React.MouseEvent | React.TouchEvent): void => {
    const x: number = (evt as React.MouseEvent)?.clientX || ((evt as React.TouchEvent)?.touches && (evt as React.TouchEvent).touches[0]?.pageX) || 0;
    const y: number = (evt as React.MouseEvent)?.clientY || ((evt as React.TouchEvent)?.touches && (evt as React.TouchEvent).touches[0]?.pageY) || 0;

    const count: number = random(3, 5);
    const newFireworks: Firework[] = Array.from({ length: count }, () => (
      new Firework({
        x: random(resize().spawnA, resize().spawnB),
        y: resize().height,
        targetX: x,
        targetY: y,
        shade: random(0, 260),
        offsprings: random(30, 110),
      })
    ));

    setFireworks((prevFireworks) => [...prevFireworks, ...newFireworks]);
    setCounter(-1);
  };

  const update = (delta: number): void => {
    const { width, height, spawnA, spawnB, spawnC, spawnD } = resize();

    const ctx: CanvasRenderingContext2D | null = canvasRef.current?.getContext('2d')!;
    if (!ctx) return;

    ctx.globalCompositeOperation = 'hard-light';
    ctx.fillStyle = `rgba(20,20,20,${7 * delta})`;
    ctx.fillRect(0, 0, width, height);

    ctx.globalCompositeOperation = 'lighter';
    for (const firework of fireworks) firework.update(delta, ctx);

    setCounter((prevCounter) => prevCounter + delta * 3);

    if (counter >= 1) {
      setFireworks((prevFireworks) => [
        ...prevFireworks,
        new Firework({
          x: random(spawnA, spawnB),
          y: height,
          targetX: random(0, width),
          targetY: random(spawnC, spawnD),
          shade: random(0, 360),
          offsprings: random(30, 110),
        }),
      ]);
      setCounter(0);
    }

    if (fireworks.length > 1000) setFireworks((prevFireworks) => prevFireworks.filter((firework) => !firework.dead));
  };

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    let then: number = new Date().getTime();

    const loop = (): void => {
      requestAnimationFrame(loop);

      const now: number = new Date().getTime();
      const delta: number = now - then;

      then = now;
      update(delta / 1000);
    };

    loop();

    window.addEventListener('resize', () => {
      const { width, height } = resize();
      canvas.width = width;
      canvas.height = height;
    });

    return () => {
      window.removeEventListener('resize', () => { });
    };
  }, [update]); // Include the update function in the dependency array

  return (
    <canvas
      ref={canvasRef}
      id="birthday"
      onClick={onClick}
      onTouchStart={onClick}
    />
  );
};

export default Birthday;

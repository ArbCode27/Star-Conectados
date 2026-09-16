import React, { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: boolean;
}

export const NetworkAnimation: React.FC<{
  className?: string;
  interactive?: boolean;
}> = ({ className, interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || 800;
      height = canvas.height = canvas.parentElement?.clientHeight || 500;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouse = { x: -1000, y: -1000 };
    };

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    const nodeCount = Math.floor(Math.min(width, 1200) / 28);
    let nodes: NodePoint[] = [];

    const colors = [
      "rgba(54, 163, 255, 0.8)",   // Electric blue
      "rgba(23, 75, 255, 0.7)",    // Deep Star blue
      "rgba(255, 255, 255, 0.85)",  // Pure light star
      "rgba(229, 9, 20, 0.75)",    // Star Red accent
    ];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const isRed = Math.random() < 0.12; // Red accent nodes
        const isBright = Math.random() < 0.25;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.65,
          vy: (Math.random() - 0.5) * 0.65,
          radius: isRed ? 3.2 : isBright ? 2.8 : Math.random() * 1.8 + 1,
          color: isRed
            ? "rgba(229, 9, 20, 0.9)"
            : colors[Math.floor(Math.random() * colors.length)],
          glow: isRed || isBright,
        });
      }
    };

    initNodes();

    let packetProgress = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      packetProgress += 0.008;
      if (packetProgress > 1) packetProgress = 0;

      // Draw connecting fiber lines
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Move node
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce on boundary
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Connect to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);

            // Highlight lines connected to red or electric nodes
            if (nodeA.color.includes("229, 9, 20") || nodeB.color.includes("229, 9, 20")) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${alpha * 0.9})`;
            } else {
              ctx.strokeStyle = `rgba(54, 163, 255, ${alpha})`;
            }
            ctx.lineWidth = 1;
            ctx.stroke();

            // Traveling light pulse on active lines
            if (dist < 100 && (i + j) % 5 === 0) {
              const packetX = nodeA.x + (nodeB.x - nodeA.x) * ((packetProgress + i * 0.1) % 1);
              const packetY = nodeA.y + (nodeB.y - nodeA.y) * ((packetProgress + i * 0.1) % 1);

              ctx.beginPath();
              ctx.arc(packetX, packetY, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = "rgba(0, 242, 255, 0.9)";
              ctx.shadowColor = "#36A3FF";
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        // Mouse attraction / gentle repel
        if (interactive && mouse.x > 0) {
          const mdx = nodeA.x - mouse.x;
          const mdy = nodeA.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 160) {
            const force = (160 - mdist) / 160;
            nodeA.x += (mdx / mdist) * force * 1.5;
            nodeA.y += (mdy / mdist) * force * 1.5;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeA.color;

        if (nodeA.glow) {
          ctx.shadowColor = nodeA.color;
          ctx.shadowBlur = 10;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={className || "w-full h-full block pointer-events-auto"}
    />
  );
};

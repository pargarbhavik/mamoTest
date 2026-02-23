// 3D Proximity Square Network - Premium Version
(function () {

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    function init() {

        const container = document.getElementById("hero-3d-background");
        if (!container) return;

        const canvas = document.createElement("canvas");
        container.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        resize();
        window.addEventListener("resize", resize);

        const gradientColors = [
            "#35F729",
            "#78E588",
            "#2CD73A",
            "#03C0C7"
        ];

        const dots = [];
        const spacing = 100;

        // Create 3 depth layers
        for (let z = 0; z < 3; z++) {
            for (let x = 0; x < window.innerWidth; x += spacing) {
                for (let y = 0; y < window.innerHeight; y += spacing) {

                    dots.push({
                        x: x + Math.random() * 30,
                        y: y + Math.random() * 30,
                        baseX: x,
                        baseY: y,
                        depth: z + 1, // depth layer
                        active: false,
                        opacity: 0
                    });
                }
            }
        }

        const mouse = {
            x: -9999,
            y: -9999
        };

        window.addEventListener("mousemove", (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener("mouseleave", () => {
            mouse.x = -9999;
            mouse.y = -9999;
        });

        function draw() {

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {

                // 3D parallax effect
                const parallaxX = (mouse.x - canvas.width / 2) * 0.0005 * dot.depth;
                const parallaxY = (mouse.y - canvas.height / 2) * 0.0005 * dot.depth;

                dot.x = dot.baseX + parallaxX;
                dot.y = dot.baseY + parallaxY;

                const dx = dot.x - mouse.x;
                const dy = dot.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 160) {
                    dot.opacity += 0.05;
                    dot.active = true;
                } else {
                    dot.opacity -= 0.03;
                    dot.active = false;
                }

                dot.opacity = Math.max(0, Math.min(1, dot.opacity));

                if (dot.opacity > 0.02) {
                    // Reduce box opacity for subtler effect
                    ctx.globalAlpha = dot.opacity * 0.5;
                    const size = 4 + dot.depth;
                    ctx.fillStyle = gradientColors[Math.floor(Math.random() * gradientColors.length)];
                    ctx.fillRect(dot.x - size/2, dot.y - size/2, size, size);
                } else {
                    ctx.globalAlpha = 0.10;
                    ctx.fillStyle = "#cccccc";
                    ctx.beginPath();
                    ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalAlpha = 1;
            });

            // Draw connections
            dots.forEach(dotA => {

                if (dotA.opacity < 0.2) return;

                dots.forEach(dotB => {

                    if (dotB.opacity < 0.2 || dotA === dotB) return;

                    const dx = dotA.x - dotB.x;
                    const dy = dotA.y - dotB.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {

                        const gradient = ctx.createLinearGradient(
                            dotA.x, dotA.y,
                            dotB.x, dotB.y
                        );

                        gradient.addColorStop(0, "#35F729");
                        gradient.addColorStop(0.33, "#78E588");
                        gradient.addColorStop(0.66, "#2CD73A");
                        gradient.addColorStop(1, "#03C0C7");

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 1;
                        ctx.globalAlpha = 0.4;
                        

                        ctx.beginPath();
                        ctx.moveTo(dotA.x, dotA.y);
                        ctx.lineTo(dotB.x, dotB.y);
                        ctx.stroke();

                        ctx.globalAlpha = 1;
                    }
                });

            });

            requestAnimationFrame(draw);
        }

        draw();
    }

})();
var Drip = (function () {
    'use strict';

    var canvas,
        ctx,
        shapes = [{}, {}, {}, {}, {}, {}, {}, {}],
        i,
        width,
        height,
        ySpeed = 1,
        createShape = function () {
            var y,
                rad;

            shapes.forEach(function (shape, index) {
                shape.points = [];
                shape.alpha = 1 - (index / shapes.length);
                shape.hue = (index % 5 === 0 ? 58 : 349) + ~~(Math.random() * 10 - 5);
                shape.saturation = 100;
                shape.lightness = 20;
                for (i = 0; i < 21; ++i) {
                    y = (i % 2 === 0 ? Math.random() * 20 : Math.random() * (height * .25)) + (index * (height / (shapes.length - 1)));
                    rad = Math.random() * 50;
                    shape.points.push({
                        x: i * 20,
                        ox: i * 20,
                        y: y,
                        oy: y,
                        ooy: y,
                        rad: rad,
                        orad: rad,
                        angle: Math.PI * Math.random(),
                        speed: ((Math.PI / 180) + ((Math.PI / 180) * Math.random())) * .5
                    });
                }
            });
            shapes.reverse();
        },
        draw = function () {
            ctx.clearRect(0, 0, width, height);
            var toReorder;
            shapes.forEach(function (shape, index) {
                drawDrip(shape.points, shape.color, shape.alpha, shape.hue, shape.saturation, shape.lightness);
                var allDown = true,
                    maxY = 0;

                shape.points.forEach(function (point) {
                    point.angle += point.speed;
                    point.y = point.oy + (Math.sin(point.angle) * point.rad);
                    point.oy += ySpeed;
                    maxY = Math.max(point.y, maxY);
                    if (point.y < height) {
                        allDown = false;
                    }
                });
                shape.alpha = 1 - (Math.min(maxY, height) / height);
                if (allDown) {
                    shape.points.forEach(function (point) {
                        point.y -= maxY;
                        point.oy -= maxY;
                        toReorder = index;
                    });
                }
            });
            if (toReorder !== undefined) {
                shapes.push(shapes.splice(toReorder, 1)[0]);
            }

            requestAnimationFrame(draw);
        },
        drawDrip = function (points, color, alpha, h, s, l) {
            ctx.fillStyle = 'hsl(' + h + ', ' + (s * alpha) + '%, ' + ((l * alpha) + 7) + '%)';
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(points[0].x, points[0].y);

            for (i = 1; i < points.length - 2; i++) {
                var xc = (points[i].x + points[i + 1].x) / 2;
                var yc = (points[i].y + points[i + 1].y) / 2;

                ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc);
            }

            ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
            ctx.lineTo(width, 0);
            ctx.lineTo(0, 0);
            ctx.fill();
        },

        resizeHandler = function () {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            var xr = width / 400;
            var yr = height / 400;

            ySpeed = 1 * yr;
            shapes.forEach(function (shape, index) {
                shape.points.forEach(function (point) {
                    point.x = point.ox * xr;
                    point.oy = point.ooy * yr;
                    point.rad = point.orad * yr;
                });
            });
        },

        Drip = {
            init: function (_canvas) {
                canvas = _canvas;
                width = canvas.getAttribute('width');
                height = canvas.getAttribute('height');
                ctx = canvas.getContext('2d');
                createShape();
                window.addEventListener('resize', resizeHandler);
                resizeHandler();
                draw();
            }
        };

    return Drip;
}());

Drip.init(document.getElementById('drip'));
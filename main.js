//attach js logic after DOM is ready event is fired
document.addEventListener("DOMContentLoaded", function(event) {
    var ekgElement=document.getElementById("ekg");
    var ctx = ekgElement.getContext('2d'),
        w = ekgElement.width,
        h = ekgElement.height,
        px = 0, opx = 0, speed = 1,
        py = h /2, opy = py,
        scanBarWidth = 20;

    ctx.strokeStyle = '#00bd00';
    ctx.lineWidth = 3;

    setInterval(function(e) {
        // py = Math.floor((Math.random() * 50) + 1);

        if (py==150) {
            py=Math.floor((Math.random() * 350) + 1);
            console.log(py);
        } else {
            py = 150;
        }
    }, 100);
    loop();

    function loop() {

        px += speed;

        ctx.clearRect(px,0, scanBarWidth, h);
        ctx.beginPath();
        ctx.moveTo(opx, opy);
        ctx.lineTo(px, py);
        ctx.stroke();

        opx = px;
        opy = py;

        if (opx > w) {
            px = opx = -speed;
        }

        requestAnimationFrame(loop);
        console.log("loop gecalled");
    }

    console.log("DOM fully loaded and parsed");
});
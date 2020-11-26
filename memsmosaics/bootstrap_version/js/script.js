var speed = 10, // the box will move by 10 pixels on every step
    direction = -1, // 1 = move right; -1 = move left
    boxElement = document.getElementById('diamond1');

    if (boxElement) {
        boxElement.addEventListener('mouseover', function () {
            // Calculate and store some of the box coordinates:

            // Recalculate position:
            boxElement.style.left = (boxLeftPos + speed * direction) + 'px';
        });
    }
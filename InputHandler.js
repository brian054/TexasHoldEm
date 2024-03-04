// Nothing right now

// Maybe create InputHandler class to clean this up
// Handle Input - you don't want this in the update method since it adds a new event listener every frame, 
// document.addEventListener('keyup', function(event) {
//     // switch or nah???
//     if (event.code === "KeyW" || event.code === "KeyS") {
//         playerDY = 0;
//     } 
//     if (event.code === "KeyA" || event.code === "KeyD") {
//         playerDX = 0;
//     }
// });

// document.addEventListener('keydown', function(event) {
//     if (event.code === "KeyW") {
//         playerDY = -(playerSpeed);
//     } 
//     if (event.code === "KeyA") {
//         playerDX = -(playerSpeed);
//     }
//     if (event.code === "KeyS") {
//         playerDY = playerSpeed;
//     }
//     if (event.code === "KeyD") {
//         playerDX = playerSpeed;
//     }
// });

// document.addEventListener('mousedown', function(event) {
//     console.log("mouse down");
//     cheatBarFillingBool = true;
// });

// document.addEventListener('mouseup', function(event) {
//     console.log("mouse up");
//     cheatBarFillingBool = false;
// });
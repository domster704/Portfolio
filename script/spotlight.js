document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.querySelector(".spotlight");
    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('mousedown', e => updateSpotlight(e));
    window.addEventListener('mouseup', e => updateSpotlight(e));

    /**
     * Updates the position of the spotlight element based on the mouse event.
     *
     * @param {MouseEvent} event - The mouse event object.
     */
    function updateSpotlight(event) {
        // Calculate the x and y coordinates relative to the window size
        const x = event.clientX / window.innerWidth * 100;
        const y = event.clientY / window.innerHeight * 100;

        // Update the background of the spotlight element with a radial gradient
        spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(29, 78, 216, 0.15) 0%, rgba(0, 0, 0, 0.00) 80.00%)`;
    }
});

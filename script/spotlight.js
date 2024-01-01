document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.querySelector(".spotlight");
    window.addEventListener('mousemove', e => updateSpotlight(e));
    window.addEventListener('mousedown', e => updateSpotlight(e));
    window.addEventListener('mouseup', e => updateSpotlight(e));

    function updateSpotlight(event) {
        spotlight.style.background = `radial-gradient(circle at ${parseInt(event.clientX / window.innerWidth * 100)}% ${parseInt(event.clientY / window.innerHeight * 100)}%, rgba(29, 78, 216, 0.15) 0%, rgba(0, 0, 0, 0.00) 80.00%)`;
    }
});

var timeLine = gsap.timeline();  // Create the timeline

timeLine.from(".child-nav h3", {
    y: -100, // Start the h3 elements from 100px above
    opacity: 0, // Start with opacity 0
    duration: 1, // Duration for the animation
    stagger: 0.2 // Stagger the elements with a delay of 0.2 seconds between each one
});

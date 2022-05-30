gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  smoothTouch: 0.000001,
});

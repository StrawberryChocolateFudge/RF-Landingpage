import { gsap } from "gsap";

export function CoinbounceAnim() {
  gsap.set(".coinBounce_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };
  gsap.set("#g6o2", { scaleX: 0, transformOrigin: "center" });
  gsap.set("#g6m1, #g6o1", { opacity: 0 });
  gsap.set("#g6m2 > line:nth-of-type(1)", {
    strokeDasharray: 488,
    strokeDashoffset: 488 * 3,
  });
  gsap.set("#g6m2 > line:nth-of-type(2)", {
    strokeDasharray: 319,
    strokeDashoffset: 319 * 3,
  });

  //REPEATED
  gsap.to("#g6", { y: -30, duration: 2, ...repeatedSine, delay: -3 });

  const coinBounce = gsap.timeline({ paused: true }).to("#g6m1", {
    motionPath: {
      path: "#g6p1",
      align: "#g6p1",
      autoRotate: false,
      alignOrigin: [0.5, 0.51],
    },
    duration: 5,
    ease: "none",
  });

  const g6C = gsap
    .timeline({ paused: true })
    .to("#g6m1", { opacity: 1 })
    .fromTo(
      coinBounce,
      { progress: 0.25 },
      { progress: 0.65, duration: 0.5, ease: "sine.in" },
      "<"
    )
    .to("#g6m1", { rotate: "+=105", duration: 0.5, ease: "none" }, "<")
    .to(
      "#g6o2",
      { scaleX: 1, duration: 0.1, repeat: 1, yoyo: true, ease: "none" },
      ">-.1"
    )
    .fromTo(
      coinBounce,
      { progress: 0.65 },
      { progress: 1, duration: 0.75, ease: "sine.out" },
      "<+.1"
    )
    .to("#g6m1", { rotate: "+=105", duration: 0.7, ease: "none" }, "<")
    .to("#g6m1", { opacity: 0 }, "<+.25");

  const g6 = gsap
    .timeline({})
    .fromTo(
      g6C,
      { progress: 0 },
      {
        progress: 1,
        duration: g6C.duration(),
        ease: "none",
        repeat: -1,
        repeatDelay: 1.5,
      }
    )
    .to("#g6o1", { opacity: 1 }, "<+.5");
}

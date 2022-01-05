import { gsap } from "gsap";
export function permapinAnim() {
  gsap.set(".permapin_animation_container svg", { opacity: 1 });

  const repeatedSine = { repeat: -1, yoyo: true, ease: "sine.inOut" };

  gsap.set("#g5o2", { opacity: 0 });
  gsap.set("#g5mm8", { transformOrigin: "50% 50%" });

  //REPEATED
  gsap.to("#g5", { y: -30, duration: 2, ...repeatedSine, delay: -4 });

  const g5 = gsap
    .timeline({
      defaults: { duration: 1.5, ease: "none" },
      paused: false,
      repeat: -1,
      yoyo: true,
    })
    .to(
      "#g5mm4 > *",
      { scaleY: 3.2, transformOrigin: "50% 0%", duration: 1.5 },
      "<"
    )
    .to("#g5mm5", { y: 615, duration: 1.5 }, "<")
    // .to("#g5mm6", { y: 300, duration: 1.5 }, "<")
    .to("#g5mm8", { scaleY: 0.1, duration: 1.5 }, "<")
    .to("#g5mm9", { y: 175, duration: 1.1 }, "<+.1")
    .to("#g5m1, #g5o2", { y: 115, duration: 0.45 }, ">+.3")
    .to("#g5mm5", { y: 730, duration: 0.45 }, "<")
    .to("#g5mm4 > *", { scaleY: 3.6, duration: 0.45 }, "<")
    .to("#g5o2", { opacity: 1, duration: 0.45 }, "<")
    .to("#g5mm9", { y: 225, duration: 0.45 }, "<");
}

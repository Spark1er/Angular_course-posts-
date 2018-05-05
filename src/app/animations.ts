import {
  animate,
  transition,
  trigger,
  state,
  style,
  keyframes,
  animation,
  useAnimation
} from "@angular/animations";

export var bounceOutLeftAnimation = animation(
  animate(
    "0.5s ease-out",
    keyframes([
      style({ offset: 0.2, opacity: 1, transform: "translateX(20px)" }),
      style({ offset: 1, opacity: 0, transform: "translateX(-100%)" })
    ])
  )
);

export var slide = trigger("slide", [
  state("void", style({ opacity: 0 })),

  transition(":enter", [animate(500)]),

  transition(":leave", useAnimation(bounceOutLeftAnimation))
]);

export var fade = trigger("fade", [
  state("void", style({ opacity: 0 })),

  transition(":enter, :leave", [animate(500)])
]);

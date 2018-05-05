import {
  animate,
  transition,
  trigger,
  state,
  style
} from "@angular/animations";

export var fade = trigger("fade", [
  state("void", style({ opacity: 0 })),

  transition(":enter", [animate(500)]),
  transition(":leave", [
    animate("0.5s ease-in", style({ transform: "translateX(-1000px)", opacity:0 }))
  ])
]);

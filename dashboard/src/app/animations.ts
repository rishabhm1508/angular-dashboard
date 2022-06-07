import {
    animate,
    animation,
    query,
    sequence,
    stagger,
    style
  } from "@angular/animations";
  
  export const SidebarOpenAnimation = animation([
    style({ left: "-{{menuWidth}}" }),
    query(".menu-item", [style({ transform: "translateX(-{{menuWidth}})" })]),
    sequence([
      animate("200ms", style({ left: "0" })),
      query(".menu-item", [
        stagger(50, [animate("{{animationStyle}}", style({ transform: "none" }))])
      ])
    ])
  ]);

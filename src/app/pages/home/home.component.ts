import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Component, Inject } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements AfterViewInit {
  lottieOptions: {
    [key: string]: AnimationOptions;
  } = {
    profile: {
      path: "./assets/lotties/profile.json",
      autoplay: false,
      loop: true,
    },
    work: {
      path: "./assets/lotties/work.json",
      autoplay: false,
      loop: true,
    },
  };

  constructor(@Inject(DOCUMENT) private document: Document){}

  ngAfterViewInit(): void {
    ['profile', 'work'].forEach(key => {
      const element: Element = this.document.querySelector(`#${key}`) as Element;
      const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.playAnimation(key);
          return;
        }
        this.stopAnimation(key);
      }, {
        root: null,
        threshold: 1,
      });

      observer.observe(element);
    });
  }

  animationItems: {
    [key: string]: AnimationItem;
  } = {};

  animationCreated(animationItem: AnimationItem, key: string): void {
    this.animationItems[key] = animationItem;
  }

  playAnimation(key: string): void {
    if (this.animationItems[key]) {
      this.animationItems[key].play();
    }
  }

  stopAnimation(key: string): void {
    if (this.animationItems[key]) {
      this.animationItems[key].pause();
    }
  }
}

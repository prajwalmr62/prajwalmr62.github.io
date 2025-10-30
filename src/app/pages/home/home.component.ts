import { DOCUMENT } from "@angular/common";
import { AfterViewInit, Component, Inject } from "@angular/core";
import { AnimationItem } from "lottie-web";
import { LottieComponent } from "ngx-lottie";
import { InfoCardComponent } from "src/app/components/info-card/info-card.component";
import { SkillBoardComponent } from "src/app/components/skill-board/skill-board.component";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    imports: [
        InfoCardComponent,
        LottieComponent,
        SkillBoardComponent,
    ]
})
export class HomeComponent implements AfterViewInit {
  // ngx-lottie v12 expects options shaped like this; use a flexible type to avoid
  // coupling to a specific library version in the component.
  lottieOptions: Record<string, any> = {
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
      const element = this.document.querySelector(`#${key}`);
      if (!element) {
        return;
      }

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

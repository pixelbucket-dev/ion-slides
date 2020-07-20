import { Component, h } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
})
export class AppHome {
  private slide1!: HTMLElement;
  private slide2!: HTMLElement;
  private slide3!: HTMLElement;

  componentDidLoad() {
    let counter1 = 0;
    let counter2 = 0;
    let counter3 = 0;
    setInterval(() => {
      this.slide1.innerHTML = `<h1><span>Slide 1 update ${counter1}</span></h1>`;

      counter1 += 1;
    }, 500);

    setInterval(() => {
      this.slide2.innerHTML = `<h1><span>Slide 2 update ${counter2}</span></h1>`;

      counter2 += 1;
    }, 500);

    setInterval(() => {
      this.slide3.innerHTML = `<h1><span>Slide 3 update ${counter3}</span></h1>`;

      counter3 += 1;
    }, 500);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <ion-content>
          <ion-slides
            pager={true}
            options={{
              simulateTouch: true,
              noSwipingClass: "ignore-swiping",
            }}
          >
            <ion-slide>
              <h1>
                <span ref={(el) => (this.slide1 = el)}>Slide 1</span>
              </h1>
            </ion-slide>

            <ion-slide>
              <h1>
                <span ref={(el) => (this.slide2 = el)}>Slide 2</span>
              </h1>
            </ion-slide>

            <ion-slide>
              <h1>
                <span ref={(el) => (this.slide3 = el)}>Slide 3</span>
              </h1>
            </ion-slide>
          </ion-slides>
        </ion-content>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>,
    ];
  }
}

import {AfterViewInit, Component, ElementRef, HostListener, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {NgScrollbar} from "ngx-scrollbar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(NgScrollbar, {static: true}) scrollbarRef: NgScrollbar;
  @ViewChild('contact', {read: ElementRef}) contactElement;
  private _scrollSubscription = Subscription.EMPTY;
  public transformBox: number;
  public navbarColor: string;
  public navbarDisplay: string;
  public opacityClass: string;

  ngOnInit(): void {
    this.navbarDisplay = "1";
    this.opacityClass = 'navbar navbar-expand-lg navbar-light align-items-end';
  }

  ngAfterViewInit(): void {
    this._scrollSubscription = this.scrollbarRef.verticalScrolled.subscribe(e => {
      this.setScrollAnimations(e)
    });
  }

  @HostListener('window:scroll', ['$event'])
  async setScrollAnimations(event) {
    console.log(event.target.scrollTop)
    console.log(window.innerHeight)
    if (event.target.scrollTop > 100 && event.target.scrollTop < window.innerHeight) {
      this.opacityClass = 'navbar navbar-expand-lg navbar-light align-items-end opacity-none';
      this.navbarColor = 'rgb(68,70,82)';
    } else if (event.target.scrollTop >= window.innerHeight && event.target.scrollTop < this.contactElement.nativeElement.offsetTop - 60) {
      this.navbarColor = 'rgb(68,70,82)';
      this.opacityClass = 'navbar navbar-expand-lg navbar-light align-items-end';
    } else {
      this.navbarColor = 'rgb(255,255,255)';
      this.opacityClass = 'navbar navbar-expand-lg navbar-light align-items-end';
    }
    this.transformBox = - event.target.scrollTop / (window.innerHeight/2) * 50;

  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }


  styleNavbar(): string {
    return this.opacityClass;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

}

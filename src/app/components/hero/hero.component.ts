import {Component, ElementRef, HostListener, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {NgScrollbar} from "ngx-scrollbar";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  faLinkedin = faLinkedin

  @Input() transformBox = 0;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }

  getBoxTransformValue(): Object {
    return {transform: 'translate(-50%,' + this.transformBox + '%)'};
  }
}

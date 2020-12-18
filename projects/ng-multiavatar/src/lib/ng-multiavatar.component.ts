import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
const multiavatar = require('@multiavatar/multiavatar');

export type AvatarConfig = {
  part: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12' | '13' | '14' | '15'
  theme: 'A' | 'B' | 'C';
}

@Component({
  selector: 'ng-multiavatar',
  template: `
    <div class="multiavatar-svg" [ngStyle]="{'height': size}" [innerHTML]="svg"></div>
  `,
  styles: [
  ]
})
export class NgMultiavatarComponent implements OnInit {

  @Input() name = 'Binx Bond';
  @Input() size = '150px';
  @Input() background = true;
  @Input() config: AvatarConfig;

  svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const svgCode = multiavatar(this.name, !this.background, this.config);
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }

}
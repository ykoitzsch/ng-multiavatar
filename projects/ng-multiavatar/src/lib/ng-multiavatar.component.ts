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
    <div class="multiavatar-svg" [innerHTML]="svg"></div>
  `,
  styles: [
  ]
})
export class NgMultiavatarComponent implements OnInit {

  @Input() seed = 'Binx Bond';
  @Input() hasBackground = true;
  @Input() config: AvatarConfig;

  svg: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const svgCode = multiavatar(this.seed, !this.hasBackground, this.config);
    this.svg = this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }

}

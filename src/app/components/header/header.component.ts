import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('visible') visible: any = '';

  constructor() { }

  onHover() {
    this.visible.nativeElement.style.visibility = 'visible';
  }

  onLeave() {
    this.visible.nativeElement.style.visibility = 'hidden';
  }

  ngOnInit(): void {
  }

}

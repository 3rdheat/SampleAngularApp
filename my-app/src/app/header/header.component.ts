import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() onNavigate = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Select(value: string){
    this.onNavigate.emit(value);
  }

}

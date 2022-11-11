import { Component, OnInit } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  notice:string = "<p>juan</p>";
  constructor() { }

  ngOnInit(): void {
  }
  bold(){
    this.notice += "<b>";
    let script = document.createElement("<p></p>");
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(script)
  }

}

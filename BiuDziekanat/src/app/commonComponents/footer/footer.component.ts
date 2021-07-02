import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private _authorId: string;
  private _authorName: string;
  
  public get authorId(): string {
    return this._authorId;
  }
  public set authorId(value: string) {
    this._authorId = value;
  }
  public get authorName(): string {
    return this._authorName;
  }
  public set authorName(value: string) {
    this._authorName = value;
  }

  constructor() {
    this._authorId = "s13406";
    this._authorName = "Michał Giedryś";
   }

  ngOnInit(): void { }
}

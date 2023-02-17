import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title:"Chapter One | A Greater Purpose",
      url: "/chapter1"},
   {
      title:"Chapter Two | The Empyrean Hunt",
      url: "/chapter2"
    },
    {
      title:"Chapter Three | Paradigms and Conjecture",
      url: "/chapter3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

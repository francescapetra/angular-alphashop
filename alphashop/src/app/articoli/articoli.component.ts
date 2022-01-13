import { Component, OnInit } from '@angular/core';

export class Articoli{

  constructor(

  public codart: string,
  public descrizione: string,
  public um: string,
  public pzcart: number,
  public peso: number,
  public prezzo: number,
  public isactive: boolean,
  public data: Date,
  ) { }

}

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli=[

    new Articoli('014600301','Barilla Farina 1kg','pz',24,1, 1.09, true, new Date() ),
    new Articoli('017852002','Barilla Pasta 500gr','pz',45,0.5,0.95, true, new Date() ),
    new Articoli('015236556','Findus Fior Di Nasello 300gr','pz',12,0.3,5.50, true, new Date() ),
    new Articoli('015525211','Findus Croccole 400gr','pz',22,0.4, 3.50, true, new Date() ),

  ];


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {

  articoli=[

    {codart : '014600301', descrizione : 'Barilla Farina 1kg', um :'pz', pzcart : 24, peso :'1', prezzo : 1.09},
    {codart : '017852002', descrizione : 'Barilla Pasta 500gr', um :'pz', pzcart : 45, peso :'0.5', prezzo : 0.95},
    {codart : '015236556', descrizione : 'Findus Fior Di Nasello 300gr', um :'pz', pzcart : 12, peso :'0.3', prezzo : 5.50},
    {codart : '015525211', descrizione : 'Findus Croccole 400gr', um :'pz', pzcart : 22, peso :'0.4', prezzo : 3.50},

  ];


  constructor() { }

  ngOnInit(): void {
  }

}

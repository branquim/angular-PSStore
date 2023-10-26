import { ChangeDetectorRef, Component, ViewChild, ViewContainerRef } from '@angular/core';
import {dataFake} from '../../data/dataFake'
import { CardComponent } from '../../components/card/card.component'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('cardContainer', { read: ViewContainerRef })
  entry!: ViewContainerRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    for(const item of dataFake){
 
      const cardContainer = this.entry.createComponent(CardComponent)
   
      cardContainer.instance.gameType = item.gameType
      cardContainer.instance.gamePrice = item.gamePrice
      cardContainer.instance.gameLabel = item.gameLabel
      cardContainer.instance.gameCover = item.gameCover
    }
    
    this.changeDetectorRef.detectChanges();

  }

}

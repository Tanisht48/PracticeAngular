import { Component } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
// @Injectable({
//   providedIn: 'root'
// })

export class HeaderComponent {
   title : string = '';

   private messageSub = new Subject<string>();
   message$ = this.messageSub.asObservable()

   sendMessage(){
    console.log(11111111111111);
    this.messageSub.next('Hello From The header are u in there');
    
   }
}

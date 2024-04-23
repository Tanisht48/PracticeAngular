import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoggerService } from '../logger.service';

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
   constructor(private logger : LoggerService ) {}
   sendMessage(){
   
    this.logger?.Log('this.message$');
    this.messageSub.next('Hello From The header are u in there');
    }
}

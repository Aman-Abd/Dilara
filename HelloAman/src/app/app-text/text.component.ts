import { Component} from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: [ './text.component.css'],
})

export class TextComponent{
  title = 'ToDo List';
  subtitle = 'Component #2';
}

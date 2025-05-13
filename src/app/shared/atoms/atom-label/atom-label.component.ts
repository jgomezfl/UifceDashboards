import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-label',
  // standalone: true,
  // imports: [],
  templateUrl: './atom-label.component.html',
  styleUrl: './atom-label.component.scss'
})
export class AtomLabelComponent {
  @Input() text: string = '';
  @Input() size: 'title' | 'subtitle' = 'title';
}

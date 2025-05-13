import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-atom-button',
  // standalone: true,
  // imports: [],
  templateUrl: './atom-button.component.html',
  styleUrl: './atom-button.component.scss'
})
export class AtomButtonComponent {
  @Input() text: string = 'Botón';
  @Input() color: string = 'primary'; // Opciones: primary, accent, warn
  @Input() type: 'button' | 'submit' = 'button';
}

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-atom-input',
  // standalone: true,
  // imports: [],
  templateUrl: './atom-input.component.html',
  styleUrl: './atom-input.component.scss'
})
export class AtomInputComponent {
  @Input() label: string = ''; 
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() control!: FormControl;

  hide: boolean = true;

  toggleVisibility() {
    this.hide = !this.hide;
  }
}

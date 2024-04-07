// Angular.
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RXJS.
import { debounceTime, Subject } from 'rxjs';



@Component({
  imports: [ FormsModule, ],
  selector: 'app-input',
  standalone: true,
  styles: [ ],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

  debouncer: Subject<string> = new Subject();
  textInput = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    this.debouncer.pipe(debounceTime(3000)).subscribe({
      next: (value: string) => {
        this.onDebounce.emit(value);
      }
    });
  }

  emitValue(textInput: string): void {
    this.onValue.emit(textInput);
  }

  searchFromFormEvent(textInput: string): void {
    this.debouncer.next(textInput);
  }
}

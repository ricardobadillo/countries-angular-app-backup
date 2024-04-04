// Angular.
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RXJS.
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  imports: [ FormsModule, ],
  standalone: true,
  templateUrl: './input.component.html',
  selector: 'app-input',
  styles: [ ]
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Observable manual.
  debouncer: Subject<string> = new Subject();

  inputText: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

  constructor() { }

  keyPressed(event: any) {
    this.debouncer.next(this.inputText);
  }

  search() {
    this.onEnter.emit(this.inputText);

  }
}

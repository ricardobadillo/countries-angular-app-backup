import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
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

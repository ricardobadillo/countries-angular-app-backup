// Angular.
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

// RXJS.
import { debounceTime, Subject, Subscription } from 'rxjs';



@Component({
  imports: [ FormsModule, ],
  selector: 'app-input',
  standalone: true,
  styles: [ ],
  templateUrl: './input.component.html',
})
export class InputComponent implements OnDestroy, OnInit {

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public initialValue = '';

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    this.debouncerSubscription = this.debouncer.pipe(debounceTime(500)).subscribe({
      next: (value: string) => this.onDebounce.emit(value),
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(textInput: string): void {
    this.onValue.emit(textInput);
  }

  searchFromFormEvent(textInput: string): void {
    this.debouncer.next(textInput);
  }
}

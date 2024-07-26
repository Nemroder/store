import { Component, Input, SimpleChanges,  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true}) duration = 0;
  @Input({ required: true}) message = '';
  
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    console.log('constructor');
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration)
    if (duration){
      this.doSomething();
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('change duration')
  }
}

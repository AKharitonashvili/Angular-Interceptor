import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-user-id-range',
  templateUrl: './select-user-id-range.component.html',
  styleUrls: ['./select-user-id-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectUserIdRangeComponent implements OnInit {
  @Input() public form: FormGroup;
  @Output() submit = new EventEmitter<void>();

  public rangeArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public get from(): FormControl {
    return this.form.get('from') as FormControl;
  }

  constructor() {}

  ngOnInit(): void {
    this.from.setValue(this.rangeArray[0]);
  }
}

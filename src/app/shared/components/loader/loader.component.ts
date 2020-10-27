import { OnInit, Component, OnDestroy, Input } from '@angular/core';
import { LoaderModel } from '../../models/config.model';
@Component({
  selector: 'hack-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() config: LoaderModel;
  constructor() {}
  ngOnInit() {}
  ngOnDestroy(): void {}
}

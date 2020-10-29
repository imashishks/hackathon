import { OnInit, Component, OnDestroy, Input } from '@angular/core';
import { LoaderModel } from '../../models/config.model';
@Component({
  selector: 'hack-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() config: LoaderModel;
  private defaultConfig = {
    show: true,
    showFullScreen: true,
  };
  constructor() {}
  ngOnInit() {
    this.config = { ...this.defaultConfig, ...this.config };
  }
  ngOnDestroy(): void {}
}

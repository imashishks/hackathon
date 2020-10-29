export interface ButtonModel {
  type: string;
  disabled: boolean;
}

export interface LoaderModel {
  show: boolean;
  width?: string;
  height?: string;
  showFullScreen?: boolean;
}

export interface GreetingsModel {
  header?: Array<string>;
  subHeader?: string;
  direction?: string;
}

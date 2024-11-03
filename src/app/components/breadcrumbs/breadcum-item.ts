export class BreadcrumbItem {
  public text: string;
  public link: string;
  public isActive: boolean;

  constructor(text: string, link: string, isActive: boolean) {
    this.text = text;
    this.link = link;
    this.isActive = isActive;
  }
}

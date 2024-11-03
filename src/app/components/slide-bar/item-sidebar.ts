export class ItemSidebar {
  public id: number = 0;
  public icon: string = ""
  public link: string = "";
  public text: string = "";
  public items: ItemSidebar[] = [];

  constructor(id: number, icon: string, link: string, text: string, items: ItemSidebar[]) {
    this.id = id;
    this.icon = icon;
    this.link = link;
    this.text = text;
    this.items = items;
  }
}

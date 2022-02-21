
export class Item  {

    public id:number | undefined;
    public name:string | undefined;
    public description :string | undefined;
    public features:string | undefined;
    public price:number | undefined;
    public keywords: string | undefined;
    public url:string | undefined;
    public category :number | undefined;
    public subcategory :number | undefined;
  
    
    constructor(init?: Partial<Item>) {
        Object.assign(this, init);
    }
}

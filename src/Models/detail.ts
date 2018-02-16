export class Detail{

    Title:string;
    Id: number;
    Category: string;
	Content: string;
	Abstract: string;

	constructor(item:Detail){
		this.Title = item.Title;
		this.Id = item.Id;
		this.Content = item.Content;
		this.Category = item.Category;
		this.Abstract = this.abstract();
	}
	public static getAbstract(content):string{

		let length = content.length;
		if(length > 100)
			length = 100;
		return content.substring(0,100).concat("...");
	}

	abstract(){
		let length = this.Content.length;
		if(length > 100)
			length = 100;
		return this.Content.substring(0,100).concat("...");
	}
}
export class Person{
    public name: string; 
    public age: number;
    public height: number;

    constructor(name: string = 'meitar', age:number = 2, height:number = 2.1){
      this.age = age;
      this.name = name;
      this.height = height;
    }

}
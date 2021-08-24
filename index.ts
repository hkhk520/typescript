console.log("测试，ts文件转成js文件");

// typescript不区分整形和浮点型，都属于number类型
var a:number = 123;
console.log("a =>",a);
a = 12.3;
console.log("a =>",a);

var b:string = "123";


// 定义数组的第一种方法  arr1:number[]
let arr1:number[] = [1,2,3,4];  // 数组里面的值只能都是number
let arr2:string[] = ["js","ts","vue","react"]; // 数组里面的值只能都是string
let arr3:boolean[] = [true, false]; // 数组里面的值只能都是boolean
console.log(arr1,arr2,arr3);
// 定义数组的第二种方法  arr4:Array<number>
let arr4:Array<number> = [5,6,7,8];
let arr5:Array<string> = ["kai","learn","ts"];
console.log(arr4,arr5);

// 元组类型（tuple）， 是数组的一种，即数组里面的值可以是混合数据类型
let yuanArr:[number,boolean,string,boolean] = [1,false,"520",true];
console.log(yuanArr);

// 枚举类型 enum 只适合用于数字的赋值
enum Flag {success = 1, error = -1}  // 对枚举类型里面的变量进行赋值
var yes:Flag = Flag.success;  // 定义一个变量yes，并指定类型为枚举类型Flag，再进行赋值为枚举类型Flag里面的变量success
console.log(yes);

enum Color {red,orange,green,pink} // 当枚举类型里面的变量没有初始化赋值时，取出的默认是索引值
var p:Color = Color.pink;  // pink的索引值为3
console.log(p);

enum Type {kai,huang = 5,love,you}  // 当前一个变量huang有赋值时，取下一个变量love时，是按照上一个变量huang的值+1
let type:Type = Type.love;  // 6
let kai:Type = Type.kai;  // 0
console.log(type);
console.log(kai);

// any任意类型，相当于js的任意写法
let anyType:any = 123;
anyType = "123";
anyType = true;
anyType = [1,"al",false];

// any类型的使用场景
// var kaiDom = document.querySelector(".kai");
// kaiDom.style.color = "red"  // 虽然这样会报错，但是可以正常设置字体的颜色，但由于该dom对象是object类型，ts没有object类型，所以可以设置为any类型
var kaiDom:any = document.querySelector(".kai");
kaiDom.style.color = "red"  // 虽然这样会报错，但是可以正常设置字体的颜色，但由于该dom对象是object类型，ts没有object类型，所以可以设置为any类型

// undefined类型
var num:undefined;   // 由于定义了number类型的变量，但是没有赋值，所以是undefined，这时就可以把类型写成undefined，就不会报错
console.log(num);

// null类型
var nu:null = null;

// 指定多个类型  | 或者的意思
var moreType:null | undefined | number | boolean | string;
moreType = null;
moreType = undefined;
moreType = 123;
moreType = '123';
moreType = true;

// void 表示没有任何类型，一般用于定义方法时，方法没有返回任何类型
function run1():void{  // 该run方法没有返回任何类型的数据，所以定义为void类型
    console.log("run");  
}
function run2():number{  // 该run方法规定什么类型，就得返回什么类型的值
    return 520  
}
function run3():boolean{  
    return false;
}

// never类型：表示其他类型（包括null、undefined）的子类型，代表从不会出现的值
// 这意味着声明never类型，只能赋值never的值
// var nev:never
// nev = (() => {
//     throw new Error("错误！！")
// })()

// 声明函数的方式
function fun1():number{
    return 520
}
var fun2 = function():string{
    return "hk"
}

// 函数传参
function fun3(name:string, age:number):string{
    return `${name}--${age}`
}
// alert(fun3("黄恺", 23));

let fun4 = function(name:string, age:number):string{
    return `${name}++${age}`
}
// alert(fun4("黄恺", 23));

// 方法里面的可选参数  age?:number  注意：可选参数必须配置在参数最后面
function fun5(name:string, age?:number):string{
    if(age){
        return `${name}=======${age}`
    }else{
        return `${name}+++++++年龄保密`
    }
}
// alert(fun5("kai"))
// alert(fun5("kai555",555))

// 方法里面的默认参数
function fun6(name:string, age:number = 20):string{
    if(age){
        return `${name}=======${age}`
    }else{
        return `${name}+++++++年龄保密`
    }
}
// alert(fun6("kai"))
// alert(fun6("kai555",555))

// 剩余参数 用解构赋值来实现
function fun7(...result:number[]):number{
    let sum:number = 0;
    for(let i:number = 0; i<result.length; i++){
        sum += result[i]
    }
    return sum;
}
// console.log("fun7 =>",fun7(1,2,3,4,5,6));

function fun8(a:number, b:number, ...result:number[]):number{
    let sum:number = a + b;
    for(let i:number = 0; i<result.length; i++){
        sum += result[i]
    }
    return sum;
}
// console.log("fun8 =>",fun8(3,4,5,6));


// ts的函数重载，即函数同名，但是类型不同，或者参数类型不同
function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any{
    if(typeof str === 'string'){
        return "我叫" + str
    }else{
        return "我的年龄是" + str
    }
}
// console.log(getInfo(20));     // 正确的写法
// console.log(getInfo('hk'));    // 正确的写法
// console.log(getInfo(false));  // 错误的写法

function getInfo1(name:string):string;
function getInfo1(name:string, age:number):string;
function getInfo1(name:any, age?:any):any{
    if(age){
        return "我叫" + name + "，年龄是" + age
    }else{
        return "我叫" + name
    }
}
// console.log(getInfo1('hk', 20));  // 正确的写法
// console.log(getInfo1('hk'));  // 正确的写法
// console.log(getInfo1('hk', false));  // 错误的写法
// console.log(getInfo1(123));  // 错误的写法


// typescript里面定义属性的时候给我们提供了 三种修饰符
// public：公有                在当前类里面、子类、类外面都可以访问
// protected：保护类型          在当前类里面、子类里面可以访问，在类外部没法访问
// private：私有               在类里面可以访问，子类、类外部都没法访问
// 属性如果不加修饰符  默认就是  公有（public）
// 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现
class Person{
    name:string;  // 省略了public
    // public name:string;  
    // protected name:string;  // 保护类型
    // private name:string;  // 私有
    static age:number = 20;

    constructor(name:string){
        this.name = name
    }

    // 多态方法
    run():void{
        console.log("name ===>",this.name);  // 在当前类里面使用
    }

    // 静态方法
    static kai():void{
        console.log("静态方法！！");
        // console.log("静态方法里面不能使用非静态属性",this.name);
        console.log("静态方法里面只能使用静态属性",this.age);
    }
}

// 继承的写法
class Children extends Person{
    constructor(name:string){
        super(name)
    }

    run():void{
        console.log(`${this.name}在跑步`)
    }

    work():string{
        return `${this.name}在工作`  // 在子类里面使用
    }
}

// let person1 = new Person("黄恺");
// person1.run();
// let children1 = new Children("kai");
// children1.run();
// alert(children1.work());
// children1.name   // 在类外面使用
// Person.kai();   // 调用静态方法
// alert(Person.age);   // 使用静态属性

// typescript中的抽象类，它是提供其他类继承的基类，不能直接被实例化
// 用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
// abstract抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准， 标准，Animal这个类要求它的子类必须包含eat方法
abstract class Animal {  // 抽象类
    public name:string;
    constructor(name:string) {
        this.name = name
    }
    abstract eat():any   // 抽象方法
}
// var animal1 = new Animal("动物");   // 抽象类，不能直接被实例化  错误的
class Dog extends Animal {
    constructor(name:string) {
        super(name)
    }
    // abstract抽象方法只能放在抽象类里面
    // 抽象类和抽象方法用来定义标准， 标准，Animal这个类要求它的子类必须包含eat方法
    eat(){
        console.log(this.name + "在吃");
    }
}
let dog = new Dog("狗狗");
dog.eat();


// 接口的使用  关键字 interface
interface FullName{
    firstName:string
    lastName:string
}
function printName(name:FullName):void{
    console.log(name.firstName + name.lastName);
}
printName({
    firstName: "黄",
    lastName: "恺"
})
// 当在函数里面直接传时，只能包含接口里面的参数，否则报错
// printName({
//     age: 20,
//     firstName: "黄",
//     lastName: "恺"
// })

let nameObj = {
    age: 20,
    firstName: "黄",
    lastName: "恺"
}
printName(nameObj)  // 定义在外部的对象 ，可包含其他参数

// 接口 可选属性  用 ? 来实现
interface Info{
    phone:number
    sex?:string   // 可选属性，不一定要有
}
function getSome(message:Info):void{
    console.log(message);
}
getSome({
    phone: 18813211305,
    // sex: "520"  // 可选属性，不一定需要
});

// 函数类型的接口：对方法传入的参数 以及返回值进行约束
interface Encrypt{
    (key:string, value:string):string
}
let encrypt:Encrypt = function (key:string, value:string):string{
    return key + '====' + value
}
console.log(encrypt("name","kai"));


// 可索引的接口 
// 数组类型的接口
interface UserArr{
    [index:number]:string   // index 表示数组的索引下标，数组的值为string类型
}
let userArr:UserArr = ['520',"520"]
console.log(userArr);

// 对象类型的接口
interface UserObj{
    [index:string]:string   // index 表示对象的索引key，对象的value为string类型
}
let userObj:UserObj = {name: "520kai", key: "5555"}
console.log(userObj);

// 类类型接口：对类的约束  和  抽象类有点相似
interface Animal1{
    name:string;
    run(str:string):void;
}
class Duck implements Animal1 {
    name:string
    constructor(name:string){
        this.name = name
    }
    run(){
        console.log(this.name);
    }
}
let duck = new Duck("鸭子");
duck.run()

class Duck1 implements Animal1 {
    name:string
    constructor(name:string){
        this.name = name
    }
    run(str:string){
        console.log(this.name+str);
    }
}
let duck1 = new Duck1("鸭子1");
duck1.run("在跑")


// 接口的继承 和 类的继承 的实现
interface Parent{
    run():void
}
interface Children1 extends Parent{  // 接口的继承 
    eat():void
}
class Ren {
    name:string
    constructor(name:string) {
        this.name = name
    }
    coding(){
        console.log(this.name + "在coding");
    }
}
class Ren1 extends Ren implements Children1  {    // 接口的继承 和 类的继承
    constructor(name:string){
        super(name)
    }
    eat(){
        console.log("eat");
    }
    run(){
        console.log("run");
    }
}
var ren1 = new Ren1("kaikai")
ren1.run()
ren1.coding()


// 泛型就是解决 类 接口 方法的复用性、以及对不待定数据类型的支持，还可以进行数据的类型校验
// 泛型： 可以支持不特定的数据类型  要求：传入的参数和返回的参数是一样的类型 ,一般用T表示泛型
function getData<T>(value:T):T{
    return value
}
getData<number>(123)
getData<string>('123')

// 泛型类的写法
class getDatass<T> {
    public list:T[] = []
    constructor(list:T[]){
        this.list = list
    }
    print(value:T):T{
        return value
    }
}
let arr = [1,2,3]
let data = new getDatass<number>(arr)
console.log(data.print(520));


// 泛型接口的写法
/**  
 *  一般不这么写
    interface Config{
        <T>(value:T):T;
    }

    let config1:Config = function<T>(value:T):T{
        return value
    }
    console.log(config1<string>("sdaskai"));

 */
interface Config<T>{
    (value:T):T;
}
function getConfig<T>(value:T):T{
    return value
}
let getConfig1:Config<string> = getConfig;
console.log(getConfig1("123"));


// 类作为参数来约束数据传入的类型
class Params {
    name:string | undefined;
    age:number | undefined
}

class MysqlDb {
    add(user:Params):boolean{  // 类作为参数来约束数据传入的类型
        console.log("user ===>",user);
        
        return true
    }
}
let params = new Params();
params.name = "kaikai";
params.age = 20;

let mysqlDb = new MysqlDb();
mysqlDb.add(params);

// 用泛型封装的 类作为参数 的写法
class MysqlDb1<T> {
    add(user:T):boolean{
        console.log("user =>",user);
        
        return true
    }
    updated(info:T,id:number):boolean {
        console.log('info =>',info);
        console.log('id =>',id);
        
        return true
    }
}

class User {
    public name: string | undefined
    public age: number | undefined
    public status: number | undefined
    constructor(params: {
        name: string | undefined
        age: number | undefined
        status?: number | undefined
    }) {
        this.name = params.name;
        this.age = params.age;
        this.status = params.status
    }
}
let user = new User({
    name: "kaihuang",
    age: 20
})
user.status = 1;
let mysqlDb1 = new MysqlDb1<User>();
mysqlDb1.add(user)

class Info22 {
    title: string | undefined;
    desc: string | undefined
    constructor(params: {
        title: string | undefined;
        desc: string | undefined
    }) {
        this.title = params.title;
        this.desc = params.desc
    }
}
let info22 = new Info22({
    title: "泛型封装",
    desc: "用泛型封装的 类作为参数 的写法"
})
let mysqlDb2 = new MysqlDb1<Info22>();
mysqlDb2.updated(info22,2)


// 封装一个操作数据库的一些方法的接口，这样就可以定义多个类并指定该接口
interface DBI<T>{
    add(info:T):boolean;
    update(info:T, id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[]
}

class KaiMysql<T> implements DBI<T> {
    constructor(){
        console.log("连接数据库成功！！");
    }
    add(info: T): boolean {
        console.log("info =>",info);
        
        return true
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
}

let kaiMysql = new KaiMysql<Info22>();
kaiMysql.add(info22)


// 命名空间  解决重复名字带来的冲突  作用：组织代码，避免命名冲突
namespace AA{   // 在命名空间里面，都是私有的，需要用export暴露出去
    interface Animal1{
        name:string;
        run(str:string):void;
    }
    export class Duck implements Animal1 {
        name:string
        constructor(name:string){
            this.name = name
        }
        run(){
            console.log(this.name);
        }
    }
    
    export class Duck1 implements Animal1 {
        name:string
        constructor(name:string){
            this.name = name
        }
        run(str:string){
            console.log(this.name+str);
        }
    }
}
let aDuck = new AA.Duck("AA aDuck");
aDuck.run();
let aDuck1 = new AA.Duck1("AA aDuck");
aDuck1.run("跑跑");


// 装饰器：就是一个方法，能够被附加到类声明，方法， 访问符，属性或参数上
// 普通装饰器，无带参数的
function decorator(target:any){
    target.prototype.str = "动态扩展属性和方法";
    target.prototype.run = function(){
        console.log("动态扩展属性和方法   ===>");
    }
}

// 装饰器的使用
@decorator
class Decorator {
    constructor(){

    }
}
// 要加any
let text1:any = new Decorator();
console.log(text1.str);
text1.run()

// 带参数的装饰器
function decorator1(params:string){
    return function(target:any){  // target代表Decorator1这个类
        target.prototype.str = params
    }
}

@decorator
@decorator1("带参数的装饰器")   // 先执行这个decorator1，再执行这个decorator
class Decorator1 {
    constructor() {
        
    }
}
let text2:any = new Decorator1();
console.log(text2.str);

// 装饰器修改Decorator2这个类
function decorator2(target:any){   // target就是Decorator2这个类

    return class extends target {  // 装饰器修改Decorator2这个类
        apiStr = "修改后的apiStr";
        updateApiStr(){
            this.apiStr = '方法里面的修改后的apiStr';
            console.log(this.apiStr);
        }
    }
}

@decorator2
class Decorator2 {
    apiStr:string | undefined

    updateApiStr(){
        console.log(this.apiStr);
    }
}
let text3:any = new Decorator2();
text3.updateApiStr()


// 属性装饰器  不能向Decorator3这个类添加属性
function decorator3(params:string){
    return function(target:any, attr:any){
        // target：Decorator3这个类
        // attr：Decorator3这个类里面的url属性 
        
        // 修改Decorator3这个类里面的url属性的值
        target[attr] = params;
    }
}

class Decorator3 {
    @decorator3("http:kai.com")
    url: string | undefined
    log(){
        console.log(this.url);
    }
}
let text4 = new Decorator3();
text4.log();


// 方法装饰器
function decorator4(params:string){
    return function(target:any, methodName:any, methodDesc:any){
        // target：Decorator4这个类
        // methodName：修饰的方法名
        // methodDesc：修饰的方法的描述
        console.log(target);
        console.log(methodName);
        console.log(methodDesc);  
        console.log(methodDesc.value);    // methodDesc.value就是修饰的方法run

        target.url = "http://www.kai.com";   // 向Decorator4这个类添加属性
        target.eat = function(){   // 向Decorator4这个类添加方法
            console.log("向Decorator4这个类添加方法");
        }


        // 修改Decorator4类里面的run方法
        var oMethod = methodDesc.value;  // 保存修改之前的run方法
        // 修改run方法
        methodDesc.value = function(...args:any[]){

            // 把传过来的参数转换成字符类型
            args = args.map(value => {
                return String(value)
            });

            oMethod.apply(this,args)
        }
    }
}
class Decorator4 {
    @decorator4("kaikai.com")
    run(...args:any[]){
        console.log("原先的run方法");
        console.log(args);
    }
}
let text5:any = new Decorator4();
console.log('text5.url ===>',text5.url);
text5.eat()
text5.run(520,"kai")


// 方法的形参的装饰器
function decorator5(params:string){
    return function(target:any, methodName:any, paramsIndex:any){
        // target：Decorator4这个类
        // methodName：修饰的方法名
        // paramsIndex：修饰的方法形参的下标
        console.log("target",target);
        console.log("methodName",methodName);
        console.log("paramsIndex",paramsIndex);

        target.api = "qqqqqqqqqqqqm";   // 向Decorator5这个类添加属性
        target.eat = function(){   // 向Decorator5这个类添加方法
            console.log("向Decorator5这个类添加方法");
        }
    }
}

class Decorator5 {
    getData(kai:number, @decorator5("xxxx") name:string){

    }
}
let text6:any = new Decorator5();
console.log(text6.api);
text6.eat()
















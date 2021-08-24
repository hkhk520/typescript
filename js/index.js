"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log("测试，ts文件转成js文件");
// typescript不区分整形和浮点型，都属于number类型
var a = 123;
console.log("a =>", a);
a = 12.3;
console.log("a =>", a);
var b = "123";
// 定义数组的第一种方法  arr1:number[]
var arr1 = [1, 2, 3, 4]; // 数组里面的值只能都是number
var arr2 = ["js", "ts", "vue", "react"]; // 数组里面的值只能都是string
var arr3 = [true, false]; // 数组里面的值只能都是boolean
console.log(arr1, arr2, arr3);
// 定义数组的第二种方法  arr4:Array<number>
var arr4 = [5, 6, 7, 8];
var arr5 = ["kai", "learn", "ts"];
console.log(arr4, arr5);
// 元组类型（tuple）， 是数组的一种，即数组里面的值可以是混合数据类型
var yuanArr = [1, false, "520", true];
console.log(yuanArr);
// 枚举类型 enum 只适合用于数字的赋值
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {})); // 对枚举类型里面的变量进行赋值
var yes = Flag.success; // 定义一个变量yes，并指定类型为枚举类型Flag，再进行赋值为枚举类型Flag里面的变量success
console.log(yes);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["orange"] = 1] = "orange";
    Color[Color["green"] = 2] = "green";
    Color[Color["pink"] = 3] = "pink";
})(Color || (Color = {})); // 当枚举类型里面的变量没有初始化赋值时，取出的默认是索引值
var p = Color.pink; // pink的索引值为3
console.log(p);
var Type;
(function (Type) {
    Type[Type["kai"] = 0] = "kai";
    Type[Type["huang"] = 5] = "huang";
    Type[Type["love"] = 6] = "love";
    Type[Type["you"] = 7] = "you";
})(Type || (Type = {})); // 当前一个变量huang有赋值时，取下一个变量love时，是按照上一个变量huang的值+1
var type = Type.love; // 6
var kai = Type.kai; // 0
console.log(type);
console.log(kai);
// any任意类型，相当于js的任意写法
var anyType = 123;
anyType = "123";
anyType = true;
anyType = [1, "al", false];
// any类型的使用场景
// var kaiDom = document.querySelector(".kai");
// kaiDom.style.color = "red"  // 虽然这样会报错，但是可以正常设置字体的颜色，但由于该dom对象是object类型，ts没有object类型，所以可以设置为any类型
var kaiDom = document.querySelector(".kai");
kaiDom.style.color = "red"; // 虽然这样会报错，但是可以正常设置字体的颜色，但由于该dom对象是object类型，ts没有object类型，所以可以设置为any类型
// undefined类型
var num; // 由于定义了number类型的变量，但是没有赋值，所以是undefined，这时就可以把类型写成undefined，就不会报错
console.log(num);
// null类型
var nu = null;
// 指定多个类型  | 或者的意思
var moreType;
moreType = null;
moreType = undefined;
moreType = 123;
moreType = '123';
moreType = true;
// void 表示没有任何类型，一般用于定义方法时，方法没有返回任何类型
function run1() {
    console.log("run");
}
function run2() {
    return 520;
}
function run3() {
    return false;
}
// never类型：表示其他类型（包括null、undefined）的子类型，代表从不会出现的值
// 这意味着声明never类型，只能赋值never的值
// var nev:never
// nev = (() => {
//     throw new Error("错误！！")
// })()
// 声明函数的方式
function fun1() {
    return 520;
}
var fun2 = function () {
    return "hk";
};
// 函数传参
function fun3(name, age) {
    return name + "--" + age;
}
// alert(fun3("黄恺", 23));
var fun4 = function (name, age) {
    return name + "++" + age;
};
// alert(fun4("黄恺", 23));
// 方法里面的可选参数  age?:number  注意：可选参数必须配置在参数最后面
function fun5(name, age) {
    if (age) {
        return name + "=======" + age;
    }
    else {
        return name + "+++++++\u5E74\u9F84\u4FDD\u5BC6";
    }
}
// alert(fun5("kai"))
// alert(fun5("kai555",555))
// 方法里面的默认参数
function fun6(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "=======" + age;
    }
    else {
        return name + "+++++++\u5E74\u9F84\u4FDD\u5BC6";
    }
}
// alert(fun6("kai"))
// alert(fun6("kai555",555))
// 剩余参数 用解构赋值来实现
function fun7() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
// console.log("fun7 =>",fun7(1,2,3,4,5,6));
function fun8(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
function getInfo(str) {
    if (typeof str === 'string') {
        return "我叫" + str;
    }
    else {
        return "我的年龄是" + str;
    }
}
function getInfo1(name, age) {
    if (age) {
        return "我叫" + name + "，年龄是" + age;
    }
    else {
        return "我叫" + name;
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    // 多态方法
    Person.prototype.run = function () {
        console.log("name ===>", this.name); // 在当前类里面使用
    };
    // 静态方法
    Person.kai = function () {
        console.log("静态方法！！");
        // console.log("静态方法里面不能使用非静态属性",this.name);
        console.log("静态方法里面只能使用静态属性", this.age);
    };
    // public name:string;  
    // protected name:string;  // 保护类型
    // private name:string;  // 私有
    Person.age = 20;
    return Person;
}());
// 继承的写法
var Children = /** @class */ (function (_super) {
    __extends(Children, _super);
    function Children(name) {
        return _super.call(this, name) || this;
    }
    Children.prototype.run = function () {
        console.log(this.name + "\u5728\u8DD1\u6B65");
    };
    Children.prototype.work = function () {
        return this.name + "\u5728\u5DE5\u4F5C"; // 在子类里面使用
    };
    return Children;
}(Person));
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
// var animal1 = new Animal("动物");   // 抽象类，不能直接被实例化  错误的
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    // abstract抽象方法只能放在抽象类里面
    // 抽象类和抽象方法用来定义标准， 标准，Animal这个类要求它的子类必须包含eat方法
    Dog.prototype.eat = function () {
        console.log(this.name + "在吃");
    };
    return Dog;
}(Animal));
var dog = new Dog("狗狗");
dog.eat();
function printName(name) {
    console.log(name.firstName + name.lastName);
}
printName({
    firstName: "黄",
    lastName: "恺"
});
// 当在函数里面直接传时，只能包含接口里面的参数，否则报错
// printName({
//     age: 20,
//     firstName: "黄",
//     lastName: "恺"
// })
var nameObj = {
    age: 20,
    firstName: "黄",
    lastName: "恺"
};
printName(nameObj); // 定义在外部的对象 ，可包含其他参数
function getSome(message) {
    console.log(message);
}
getSome({
    phone: 18813211305,
    // sex: "520"  // 可选属性，不一定需要
});
var encrypt = function (key, value) {
    return key + '====' + value;
};
console.log(encrypt("name", "kai"));
var userArr = ['520', "520"];
console.log(userArr);
var userObj = { name: "520kai", key: "5555" };
console.log(userObj);
var Duck = /** @class */ (function () {
    function Duck(name) {
        this.name = name;
    }
    Duck.prototype.run = function () {
        console.log(this.name);
    };
    return Duck;
}());
var duck = new Duck("鸭子");
duck.run();
var Duck1 = /** @class */ (function () {
    function Duck1(name) {
        this.name = name;
    }
    Duck1.prototype.run = function (str) {
        console.log(this.name + str);
    };
    return Duck1;
}());
var duck1 = new Duck1("鸭子1");
duck1.run("在跑");
var Ren = /** @class */ (function () {
    function Ren(name) {
        this.name = name;
    }
    Ren.prototype.coding = function () {
        console.log(this.name + "在coding");
    };
    return Ren;
}());
var Ren1 = /** @class */ (function (_super) {
    __extends(Ren1, _super);
    function Ren1(name) {
        return _super.call(this, name) || this;
    }
    Ren1.prototype.eat = function () {
        console.log("eat");
    };
    Ren1.prototype.run = function () {
        console.log("run");
    };
    return Ren1;
}(Ren));
var ren1 = new Ren1("kaikai");
ren1.run();
ren1.coding();
// 泛型就是解决 类 接口 方法的复用性、以及对不待定数据类型的支持，还可以进行数据的类型校验
// 泛型： 可以支持不特定的数据类型  要求：传入的参数和返回的参数是一样的类型 ,一般用T表示泛型
function getData(value) {
    return value;
}
getData(123);
getData('123');
// 泛型类的写法
var getDatass = /** @class */ (function () {
    function getDatass(list) {
        this.list = [];
        this.list = list;
    }
    getDatass.prototype.print = function (value) {
        return value;
    };
    return getDatass;
}());
var arr = [1, 2, 3];
var data = new getDatass(arr);
console.log(data.print(520));
function getConfig(value) {
    return value;
}
var getConfig1 = getConfig;
console.log(getConfig1("123"));
// 类作为参数来约束数据传入的类型
var Params = /** @class */ (function () {
    function Params() {
    }
    return Params;
}());
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (user) {
        console.log("user ===>", user);
        return true;
    };
    return MysqlDb;
}());
var params = new Params();
params.name = "kaikai";
params.age = 20;
var mysqlDb = new MysqlDb();
mysqlDb.add(params);
// 用泛型封装的 类作为参数 的写法
var MysqlDb1 = /** @class */ (function () {
    function MysqlDb1() {
    }
    MysqlDb1.prototype.add = function (user) {
        console.log("user =>", user);
        return true;
    };
    MysqlDb1.prototype.updated = function (info, id) {
        console.log('info =>', info);
        console.log('id =>', id);
        return true;
    };
    return MysqlDb1;
}());
var User = /** @class */ (function () {
    function User(params) {
        this.name = params.name;
        this.age = params.age;
        this.status = params.status;
    }
    return User;
}());
var user = new User({
    name: "kaihuang",
    age: 20
});
user.status = 1;
var mysqlDb1 = new MysqlDb1();
mysqlDb1.add(user);
var Info22 = /** @class */ (function () {
    function Info22(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return Info22;
}());
var info22 = new Info22({
    title: "泛型封装",
    desc: "用泛型封装的 类作为参数 的写法"
});
var mysqlDb2 = new MysqlDb1();
mysqlDb2.updated(info22, 2);
var KaiMysql = /** @class */ (function () {
    function KaiMysql() {
        console.log("连接数据库成功！！");
    }
    KaiMysql.prototype.add = function (info) {
        console.log("info =>", info);
        return true;
    };
    KaiMysql.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    KaiMysql.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    KaiMysql.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return KaiMysql;
}());
var kaiMysql = new KaiMysql();
kaiMysql.add(info22);
// 命名空间  解决重复名字带来的冲突  作用：组织代码，避免命名冲突
var AA;
(function (AA) {
    var Duck = /** @class */ (function () {
        function Duck(name) {
            this.name = name;
        }
        Duck.prototype.run = function () {
            console.log(this.name);
        };
        return Duck;
    }());
    AA.Duck = Duck;
    var Duck1 = /** @class */ (function () {
        function Duck1(name) {
            this.name = name;
        }
        Duck1.prototype.run = function (str) {
            console.log(this.name + str);
        };
        return Duck1;
    }());
    AA.Duck1 = Duck1;
})(AA || (AA = {}));
var aDuck = new AA.Duck("AA aDuck");
aDuck.run();
var aDuck1 = new AA.Duck1("AA aDuck");
aDuck1.run("跑跑");
// 装饰器：就是一个方法，能够被附加到类声明，方法， 访问符，属性或参数上
// 普通装饰器，无带参数的
function decorator(target) {
    target.prototype.str = "动态扩展属性和方法";
    target.prototype.run = function () {
        console.log("动态扩展属性和方法   ===>");
    };
}
// 装饰器的使用
var Decorator = /** @class */ (function () {
    function Decorator() {
    }
    Decorator = __decorate([
        decorator
    ], Decorator);
    return Decorator;
}());
// 要加any
var text1 = new Decorator();
console.log(text1.str);
text1.run();
// 带参数的装饰器
function decorator1(params) {
    return function (target) {
        target.prototype.str = params;
    };
}
var Decorator1 = /** @class */ (function () {
    function Decorator1() {
    }
    Decorator1 = __decorate([
        decorator,
        decorator1("带参数的装饰器") // 先执行这个decorator1，再执行这个decorator
    ], Decorator1);
    return Decorator1;
}());
var text2 = new Decorator1();
console.log(text2.str);
// 装饰器修改Decorator2这个类
function decorator2(target) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiStr = "修改后的apiStr";
            return _this;
        }
        class_1.prototype.updateApiStr = function () {
            this.apiStr = '方法里面的修改后的apiStr';
            console.log(this.apiStr);
        };
        return class_1;
    }(target));
}
var Decorator2 = /** @class */ (function () {
    function Decorator2() {
    }
    Decorator2.prototype.updateApiStr = function () {
        console.log(this.apiStr);
    };
    Decorator2 = __decorate([
        decorator2
    ], Decorator2);
    return Decorator2;
}());
var text3 = new Decorator2();
text3.updateApiStr();
// 属性装饰器  不能向Decorator3这个类添加属性
function decorator3(params) {
    return function (target, attr) {
        // target：Decorator3这个类
        // attr：Decorator3这个类里面的url属性 
        // 修改Decorator3这个类里面的url属性的值
        target[attr] = params;
    };
}
var Decorator3 = /** @class */ (function () {
    function Decorator3() {
    }
    Decorator3.prototype.log = function () {
        console.log(this.url);
    };
    __decorate([
        decorator3("http:kai.com")
    ], Decorator3.prototype, "url", void 0);
    return Decorator3;
}());
var text4 = new Decorator3();
text4.log();
// 方法装饰器
function decorator4(params) {
    return function (target, methodName, methodDesc) {
        // target：Decorator4这个类
        // methodName：修饰的方法名
        // methodDesc：修饰的方法的描述
        console.log(target);
        console.log(methodName);
        console.log(methodDesc);
        console.log(methodDesc.value); // methodDesc.value就是修饰的方法run
        target.url = "http://www.kai.com"; // 向Decorator4这个类添加属性
        target.eat = function () {
            console.log("向Decorator4这个类添加方法");
        };
        // 修改Decorator4类里面的run方法
        var oMethod = methodDesc.value; // 保存修改之前的run方法
        // 修改run方法
        methodDesc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // 把传过来的参数转换成字符类型
            args = args.map(function (value) {
                return String(value);
            });
            oMethod.apply(this, args);
        };
    };
}
var Decorator4 = /** @class */ (function () {
    function Decorator4() {
    }
    Decorator4.prototype.run = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("原先的run方法");
        console.log(args);
    };
    __decorate([
        decorator4("kaikai.com")
    ], Decorator4.prototype, "run", null);
    return Decorator4;
}());
var text5 = new Decorator4();
console.log('text5.url ===>', text5.url);
text5.eat();
text5.run(520, "kai");
// 方法的形参的装饰器
function decorator5(params) {
    return function (target, methodName, paramsIndex) {
        // target：Decorator4这个类
        // methodName：修饰的方法名
        // paramsIndex：修饰的方法形参的下标
        console.log("target", target);
        console.log("methodName", methodName);
        console.log("paramsIndex", paramsIndex);
        target.api = "qqqqqqqqqqqqm"; // 向Decorator5这个类添加属性
        target.eat = function () {
            console.log("向Decorator5这个类添加方法");
        };
    };
}
var Decorator5 = /** @class */ (function () {
    function Decorator5() {
    }
    Decorator5.prototype.getData = function (kai, name) {
    };
    __decorate([
        __param(1, decorator5("xxxx"))
    ], Decorator5.prototype, "getData", null);
    return Decorator5;
}());
var text6 = new Decorator5();
console.log(text6.api);
text6.eat();

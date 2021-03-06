## Java 是什么

高级编程语言

低级语言 （汇编语言 单词表示计算机指令 add加法 sub减法） => 汇编器 => 机器语言

高级语言（以人类的思维方式） => 编译器 => 机器语言

## Java 的三大内容

1. JavaSE(Java Standard Edition) 标准版（基础）
2. JavaEE(Java Enterprise Edition) 企业版
3. JavaME(Java Micro Edition) 微型版

## Java 的语言特色
有十大特性，以下两点最重要
- 面向对象
  - 一切皆是对象
- 可移植性（跨平台性）
  - 一次编译，到处执行
Java 可以在不同平台运行，主要依靠 Java 虚拟机，针对不同的操作系统有不同的版本
## Java 的编译和执行过程
![Java 编译过程](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/dc58d516d0a5dbe34c5f75bb72c23b84d5800c1e.png)
![Java 运行过程](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/b214ec348b1bc28ff7606462a90c29fc061bd67a.png)
Java 主要包括编译和执行两个阶段，编译阶段主要在检查是不是有语法错误，从而生成 Java 虚拟机可以使用的字节码文件，到了执行阶段 Java 虚拟机可以帮我们启动类加载器，去找到字节码文件从而解释成操作系统可以解释的二进制代码，最后输出程序的结果。
## Java 开发环境搭建
[Java JDK 下载](https://www.oracle.com/java/technologies/downloads/)

在 Java/jdk-18/bin 里面，重点关注两个 javac.exe(负责程序的编译) java.exe(负责程序的执行)

### JDK、JRE、JVM 三者之间的关系
- JRE：(Java Runtime Environment) Java 运行时环境
- JVM：(Java Virtual Machine) Java 虚拟机
- JDK:（Java Development Kit）Java 开发工具包

  JDK => JRE => JVM

## 第一个程序的开发
新建一个文件名为 HelloWord.java 的文件
```java
public class HellWord { . // 类后面的名字必须和文件名一样，注意大小写
    public static void main(String[] args) {
        System.out.println("hello word");
    }
}
```
## Java 程序运行
```shell
# 运行以下命令
java HelloWord.java
```
IDEA 里面的 src 目录用来写我们的源码

![执行过程](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5a034787f3c9768f3ebf976d38adf16713113b19.png){:height="50%" width="50%"}
1. 运行命令：java Test
2. java.exe 启动 JVM
3. JVM 启动类加载器 ClassLoader
4. 类加载器在磁盘上搜索 Test class 文件
5. JVM 把 Test class 文件 解释为二进制代码
6. 操作系统执行二进制代码
### 类加载器是如何寻找源文件的？
1. 默认情况下是从当前目录寻找字节码文件
2. 如果想在指定的路径下寻找，需要配置 java 的环境变量 classpath
## Java 的注释和程序解释
### 注释是什么？有什么用？
**注意：**
1. 注释出现在 java 的源代码中，用来解释程序
2. 注释不会编译到 .class 字节码文件中，只有源代码才会被编译到字节码文件中

### Java 注释有哪几种
1. 单行注释 //
2. 多行注释 /**/
3. javadoc 注释:
   专业的 java 注释，被 javadoc.exe 生成 java 的帮助文档
```java
/**
* javadoc 注释
*/
```
```java
// public 表示公开的
// class 表示这是一个类
// HelloWord 是我们起的一个类名
public class HelloWord // 定义了一个公开的类
{
    // 类体
    // 类体中不可以直接写 java 语句，除了声明变量
    /*
      public 表示公开的
      static 表示静态的
      void 表示一个空的返回值
      main 是 Java 中的 main 方法
      String[] args 是 main 方法的一个形式参数
      main 方法是 java 语法规则中规定的程序的入口，里面的所有不允许更改，除了 args 参数名
    */
    public static void main(String[] args) { // 定义了公开的静态的没有返回值的 main 方法
        // 这里面的内容叫做 方法体
        // 方法体中写的代码叫做 java 语句。java 语句必须以半角的分号结尾。
        // 方法体内可以写多条 java 语句
        // 下面这条语句的功能是：向控制台输出字符串
        // 在 java 当中字符串必须用半角的双引号引起来
        System.out.println("hello word");
    }
}
```
## 标识符、变量和数据类型的使用
### 标识符
```java
public class Identifier {
    public static void main(String[] args) {
    }
}
```
1. 什么是标识符？
  - 在 java 源程序中凡是程序员自己有权利命名的单词就是标识符
2. 标识符是可以标识哪些元素？
  - 类名； 方法名； 接口名；常量名；变量名
3. 有哪些命名规则？（不遵守，编译器就会去报错）
  - 标识符必须由数字、字母、下划线、美元符号构成，而且，数字不能作为开头
  - 标识符不可以是 java 中的关键字
  - 严格区分大小写
  - 理论上标识符没有长度的限制
4. 命名规范有哪些？
  - 最好是见名知意
  - 遵守驼峰式的命名规范，一高一低
  - 类名、接口名：首字母大写，之后每个单词的首字母大写；变量名、方法名:首字母小写，之后的每个单词的首字母大写；常量名：每个字母都要大写
### 关键字
![基本的关键字](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/0e7c9a4c4658499f5684ff8544e2f9bf912b28d7.png)

## 变量的基本概念
### 变量是什么？
- 变量：用于程序中可能被反复访问或者需要修改的值，本质上是内存中的一块空间
- 变量：是内存中存储数据的最基本单元
- 变量：由 数据类型、名称、字面值 三部分组成

**备注：数据类型**
- 数据类型决定变量在内存中开辟多大的空间
- 不同的数据类型的变量，在内存中开辟不同大小的空间

和 JS 类似
## 变量的声明和初始化
- 语句是执行逐行进行的
- 变量是可以被反复访问的，通过这个变量的名字定位到内存的位置
```java
public class Identifier {
    public static void main(String[] args) {
      //  同时声明和初始化
      int i = 10;
      i = 100;
      System.out.println(i); // 打印出 100
      //多个变量同时声明
      int a,b,c; // eg 变量记得初始化
    }
}
```
## 变量的作用域
1. 在同一个作用域内，变量不可以重名
2. 变量的作用域：指的是变量的有效范围，出了大括号，就无效
## 变量的分类
根据变量声明的位置，把变量分为两大类：
- 局部变量：在方法体内声明的变量
- 成员变量：在方法体外，类体之内声明的变量
```java
public class Identifier {
    static int i = 100; //  成员管理 存储在 堆内存中
    public static void main(String[] args) {
      int i = 10; // 局部变量 存储在 栈内存中
    }
}
```
- 在不同的作用域内变量名可以相同
- java 中变量的访问，遵守就近原则

## 数据类型基本概念
### 数据类型的作用
- 数据类型决定了变量在内存中开辟多大的空间
- 不同的数据类型的变量，在内存中开辟不同大小的空间
### 数据类型的分类
数据类型分为：基本数据类型和引用数据类型
![数据类型分类图](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/456a2145f847ae9924330480e774551c27ebad17.png)
![基本数据类型所占空间](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/c3cf121d8ea747814187400be8c80a0c78abab88.png)

## 整型
1. 整数的数据类型
  - byte | Byte
  - short | Short
  - int | Integer
  - long | Long
2. 成员变量声明之后，jvm会对其进行默认的初始化
3. 除了布尔数据类型，基本的数据类，对应了一个包装类，有成员属性 MAX_VALUE MIN_VALUE
4. java 中出现的整数，默认的数据类型是 int， 要想**使用 long 数据类型，需要在数字后面加上 L/l**
```java
public class DataType {
  static int a;
  public static void main (String[] args){
    int b = 10;
    System.out.println(b);
    // int 类型的最大值和最小值
    System.out.println(Integer.MAX_VALUE);
    System.out.println(Integer.MIN_VALUE);
    long n = 2147483648L;
    float m = 3.14f;
    float j = (float)3.14; // 强制转换成 f
  }
}
```
## 浮点型
1. 浮点型数据有哪两种类型
  - float    单精度  4byte
  - double    双精度  8byte
  - java 中基本数据类型的默认值均是向 0 去靠拢
2. java 中出现的所有浮点型数据，默认的数据类型是 double, 如果想要使用 float 数据类型，需要在数字后面加上 f/F
3. 高精度数据赋值给低精度的变量时，需要做强制类型转换
4. 低精度数据赋值给高精度变量时，jvm 会自动完成类型的转换
5. 整型数据转换规律同上
## 布尔类型
1. 布尔类型的取值有哪些 ture false
2. 在 java 中 布尔值的默认类型时 false
3. boolean 数据类型的储存用了一个字节，1 表示 true, 0 表示 false
4. 布尔类型经常和条件控制语句一起使用
## 字符型
1. 字符型数据类型，可以储存任意类型的字符
2. 字符型数据需要用单引号引起来，字符串数据需要用双引号引起来
3. java 中反斜杠 \ 转义字符
4. System.out.print 和 System.out.println 有区别：
  - System.out.print 仅仅是输出
  - System.out.println 换行输出
```java
public class DataType {
  public static void main (String[] args){
    char c1 = 'a';
  }
}
```
## 算数运算符
```shell
+ - * / % ++ --
```
当自加运算符和赋值同时出现时，需要遵守的规则
- 若自加运算符出现在变量的后面，先将变量的值赋值给左边变量，再对变量自身加 1
- 若自加运算符出现在变量的前面，先完成变量自身加 1 的动作，再将结果赋值给左边的变量
```java
public class DataType {
  public static void main (String[] args){
    int c = 10;
    int d = c++;
    System.out.println(c); // 11
    System.out.println(d); // 10
  }
}
```
## 关系运算符
```shell
  > < <= <= != ==
```
## 逻辑运算符
```
&  |  !
^  逻辑异或 两边的算子只有不一样的时候，结果才为真
&&  短路与
||  短路或
```
## 赋值运算符
```
=
+= -= /= *= %=
```
## 循环语句
### while 语句
```
while(布尔表达式) {
  java 语句;
  ...
  java 语句;
}
```
> while 语句可能一次也不执行
### do while 语句
```
do { // 对于 do-while 语句 不管三七二十一，先去执行一遍 do 里面的内容，再去 判断 while 里面的内容
java 语句;
...
java 语句;
} while(布尔表达式);
```
> do-while 语句至少执行一次


### break 语句
- 使用场景：某些循环语句中，执行到一定程度后，不需要执行后面的循环
- break 语句可以使用在循环语句中，用来终止当前循环，从而提高程序的执行效率
- break 表示中断
### continue 语句
- 使用情景：某一次循环，满足某个条件后，不需要执行后面的语句
- continue 语句使用在循环语句中，用来终止本次循环，从而提高程序的执行效率
```java
public class BreakTest {
  public static void main (String[] args){
    for(int i = 1; i <= 10; i++){
      if(i == 5){
        break;
      }
    System.out.println(i); // 1 2 3 4
    }
    for(int i = 1; i <= 10; i++){
      if(i == 5){ // 终止本次循环
        continue;
      }
    System.out.println(i); // 1 2 3 4 6 7 8 9 10
    }
  }
}
```
## 数组
 数组是可以存储相同数据类型的数据的集合。数组本质上是一种变量。

 1. 数组的四要素
 数据类型、数组名称、数组元素、数组下标
 1. 数组的声明语法
   数组类型[] 数组名称;  int[] array;
   数据类型 数组名称[]; int array[];
 2. 数组的初始化语法
    - 分配内存
    数组名称 = new [数组大小]
    - 赋值
    数组名称[数组下标] = 数据
  > 注意： 数组有固定的大小，一旦被创建，无法修改大小
## 方法的引入（类似 JS 的函数）
本质：一段具有特定功能的代码片段，可以被重复的使用
> 注意：方法是定义在类体中，而不是方法体中,类中可以定义多个方法

语法结构
```
[访问修饰符| public static]  返回值数据类型| int  方法名| sum  形式参数列表| (int a, int b) {
  方法体
}
```
- 访问修饰符可以没有，是一个可选项，系统默认给出

```java
public class MethodTest {
  public static void main (String[] args){
    int a = 10;
    int b = 20;
    int c = MethodTest.sum(a, b);
    System.out.println(a + "+" + b + "=" + c);
  }

  public static int sum (int a, int b){
    int c = m + n;
    return c;
  }

}
```
> 一部分的基础知识就不作记笔记了，语言都具有共同性的

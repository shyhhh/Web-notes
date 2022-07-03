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
![执行过程](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/5a034787f3c9768f3ebf976d38adf16713113b19.png)
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
注意：
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

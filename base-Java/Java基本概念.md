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
```shell
# 运行以下命令
java HelloWord.java
```
IDEA 里面的 src 目录用来写我们的源码

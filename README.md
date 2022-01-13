
![Todo-list](./README-for/img1.png)
<hr>

# Description

This project was created as a to-do list, where you can see the completed tasks and those that still need to be done. The entire project was implemented with
 **REACT**, according to the  
 `React + Redux - Professional Development UDEMY` course.

# Objective
 The goal of creating this project was to look at various elements and practice in JavaScript and React.
+ working with ___React___ ***elements*** and ***components***
+ work with ***JSX***
+ practice of using ***keys*** and ***collections***
+ work with ***processing*** ***events***
+ working with ***classes*** and ***functions***
+ implementation of ***search*** with ***insensitive*** **case**

```JS
addItem = (text) => {
    const newItem = this.createTodoItem(text)
    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }
```
# How to use
If you want to add a case to your sheet, write it in the `What needs to do` row and press the `Add` key.

![how to add sth](https://media2.giphy.com/media/SlVGIwrr5ukYJcOgaF/giphy.gif?cid=790b7611314c6b94efed1f6921a401d5380cb84ed3cc7aa6&rid=giphy.gif&ct=g)

If you want to look at active cases, that is, those that need to be done, click on the `Active` button.

![how to see active things](https://media3.giphy.com/media/tb7eKJICLMjYIyJe0q/giphy.gif?cid=790b7611b592655f3a1f9e92a8d956eed00a4a4a9dd73fc0&rid=giphy.gif&ct=g)

If you want to see the completed tasks, press the `Done` button. (To mark the task as done, click on it).

![hoe to see done things](https://media0.giphy.com/media/GmWWeuGS5nemUVC2LA/giphy.gif?cid=790b7611e2823e1fd6eb2b3c9918650ff7b573db77f34b64&rid=giphy.gif&ct=g)

Шf you want to search for a case among a bunch of others, enter a query in the `type to search` field. (case insensitive)

![how to search sth](https://media2.giphy.com/media/c4SG50SLABZj4BLDuj/giphy.gif?cid=790b76115dfce7bc0ac260be3970c988048e389448e2744d&rid=giphy.gif&ct=g)

# Download instructions
![download instruction](./README-for/img4.png)
1. Copy the link you can find by clicking on the green `code` button.
2. Write in terminal: `git clone link`.
3. The project will be copied to the selected folder.



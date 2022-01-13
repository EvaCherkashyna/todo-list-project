
![Todo-list](./README-for/img1.png)
<hr>

# Description
Этот проэкт был создан как список дел, где ты можешь посмотреть выполненые дела, и те которые еще предстоит сделать. Весь проэкт реализирован с помощью **REACT**, по курсу 
 `React + Redux - Профессиональная Разработка UDEMY`.

# Objective
 The goal of creating this project was to look at various elements and practice in JavaScript and React.
+ работа с ___React___  ***элементами*** и ***компонентами***
+ работа с ***JSX***
+ практика использования ***ключей*** и ***коллекций***
+ работа с ***обработкой*** ***событий***
+ работа с ***классами*** и ***фунциями***
+ реализация ***поиска*** с ***нечуствительным*** **регистром**

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
если вы хотите добавить дело к вашему листу напишите это в графе What needs to do  и нажмите клавишу `Add`

![how to add sth](https://media2.giphy.com/media/SlVGIwrr5ukYJcOgaF/giphy.gif?cid=790b7611314c6b94efed1f6921a401d5380cb84ed3cc7aa6&rid=giphy.gif&ct=g)

если вы хотите посмотреть на активные дела, тоесть те что нужно сделать, кликните по кнопке `Active`

![how to see active things](https://media3.giphy.com/media/tb7eKJICLMjYIyJe0q/giphy.gif?cid=790b7611b592655f3a1f9e92a8d956eed00a4a4a9dd73fc0&rid=giphy.gif&ct=g)

если вы хотите посмотреть сделаные дела нажмите кнопу `Done` (Чтоб пометить дело как сделаное, кликните по нем )
![hoe to see done things](https://media0.giphy.com/media/GmWWeuGS5nemUVC2LA/giphy.gif?cid=790b7611e2823e1fd6eb2b3c9918650ff7b573db77f34b64&rid=giphy.gif&ct=g)

если вы хотите найти ваше дело среди кучи других дел, дайте запрос в поле `type to search`(регистр не учитываеться)

![how to search sth](https://media2.giphy.com/media/c4SG50SLABZj4BLDuj/giphy.gif?cid=790b76115dfce7bc0ac260be3970c988048e389448e2744d&rid=giphy.gif&ct=g)

# Download instructions
![download instruction](./README-for/img4.png)
1. Copy the link you can find by clicking on the green `code` button.
2. Write in terminal: `git clone link`.
3. The project will be copied to the selected folder.



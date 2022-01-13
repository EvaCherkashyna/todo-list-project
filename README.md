
![Todo-list](./README-for/img1.png)
<hr>

# Description
Этот проэкт был создан как список дел, где ты можешь посмотреть выполненые дела, и те которые еще предстоит сделать. Весь проэкт реализирован с помощью REACT, по курсу 
 `React + Redux - Профессиональная Разработка UDEMY`.

# Objective
 The goal of creating this project was to look at various elements and practice in JavaScript and React.
+ работа с ___React___  ***элементами*** и ***компонентами***
+ работа с ***JSX***
+ практика использования ***ключей*** и ***коллекций***
+ работа с ***обработкой*** ***событий***
+ работа с ***классами*** и ***фунциями***

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
If you 



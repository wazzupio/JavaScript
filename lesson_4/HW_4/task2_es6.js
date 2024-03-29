/*
2.Сделайте в стиле es5, а затем в стиле es6 (по
аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования):
    а) конструктор Post, который принимает параметры author, text, date и сохраняет
    их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/
"use strict";

// в стиле es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(editText) {
        this.text = editText;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

let post1 = new Post('vova', 'hello', '22.10.12');
console.log(post1);
post1.edit('qq')
console.log(post1);

let post2 = new AttachedPost('marina', 'wow', '5.8.13');
console.log(post2);
post2.edit('aloha');
post2.makeTextHighlighted();
console.log(post2);





  //   function checkConstant() {
  //       let value = +prompt("Введите число");
  //       if (value < 10) {
  //       console.log("константа меньше 10");
  //       } else {
  //       console.log("константа не меньше 10");
  //       }
  //   }
    
  //   // Пример вызова функции
  //   checkConstant(); // Выведет "константа меньше 10"

    
    

  //   function ShowAlert(x) {

  //       alert(x)

  //   }
  // ShowAlert("Привет, Мир")
  



  // function js() {

  //   console.log("JavaScript");

  // }
  // js()




  // let text = "text lorem";

  // function checkLorem() {

  //   let text = "this is text have are lorem";

  //   if(text.includes("lorem")){
  //       console.log("У вас ошибка в тексте");
  //   }else{
  //       console.log(`Содержимое переменной: ${text}`);
  //   }


  // }
  // checkLorem()

    // Создание объекта man с информацией о человеке
  let man = {
    name: "John",
    surname: "Doe",
    age: 30,
    height: 180,
    username: "johndoe123",
    password: "qwerty",
    Balance: 1000
  };

  // Добавление свойства с информацией об адресе
  man.address = "123 Main Street, City";


  // Проверка пароля
  let enteredPassword = "qwerty";
  if (enteredPassword === man.password) {
    console.log(`Добро пожаловать, ${man.name} ${man.surname}. Ваш логин: ${man.username}`);
  } else {
    console.log(`Указанный пароль ${enteredPassword} не правильный. Попробуйте еще раз.`);
  }


    // Переписать на цикл while
  let num = 0;
  while (num < 3) {
    console.log(`4ucno: ${num}`);
    num++;
  }

  // Вывод чисел от 1 до 10 с помощью цикла
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
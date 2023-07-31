




    function checkConstant() {
        let value = +prompt("Введите число");
        if (value < 10) {
        console.log("константа меньше 10");
        } else {
        console.log("константа не меньше 10");
        }
    }
    
    // Пример вызова функции
    checkConstant(); // Выведет "константа меньше 10"

    
    

    function ShowAlert(x) {

        alert(x)

    }
  ShowAlert("Привет, Мир")
  



  function js() {

    console.log("JavaScript");

  }
  js()




  let text = "text lorem";

  function checkLorem() {

    let text = "this is text have are lorem";

    if(text.includes("lorem")){
        console.log("У вас ошибка в тексте");
    }else{
        console.log(`Содержимое переменной: ${text}`);
    }


  }
  checkLorem()
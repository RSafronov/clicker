var click = 0;

function sumClick() {
if (click+1 <= 3) {
  click=click+1;
  alert("Вы кликнули " +click+ "раз(а)");
  } else {
    alert("Перебор");
  }
}

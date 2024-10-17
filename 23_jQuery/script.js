/*jQuery — это библиотека JavaScript.
* можно быстрее и короче чем JS
* */
$(document).ready(function (){
  const skillset = $('.skillset'); // получение ссылки на элемент. Работает как querySelectorALL!! потом уже по индексам коллекции
    // чтобы навыки были скрыты, а потом появились
    skillset.hide(1000); // скрыть, задержка
    skillset.show(1000); // показать

   /* skillset.hide(1000);
    skillset.fadeIn(1000);*/

    const projects = $('.projects');
    projects.hide();
    $('.project-button').click(function (){
        //projects.show(500);
        $(this).next().toggle(); // $(this) = event.target - происходит на событии
        $(this).toggleClass('active');

        $(this).text('Projects viewed');
    })

    skillset.on('mouseenter', function (){
        $('h2').css('color', 'blue');
    });

    skillset.on('mouseleave', function (){
        $('h2').css({'color': 'white', 'border': '1px solid brown', 'box-shadow': 'inset 0px 0px 10px rgba(0,0,0,0.5)'});
        $('h2').css('padding','5px 20px 5px 40px');
    });

    skillset.prepend('<button> RED BUTTON</button>'); // в начале новая кнопка
    $('button').css({'color':'red', 'font-size':'1em'});
    $('button').click(function (){
        skillset.empty();
    })
})

//$().addClass() -> classList().add()
//$().removeClass() -> classList().remove()
//$().html() -> innerHtml
//$().val() -> input.value
// $().css() -> elem.style...... изменить стили
//$().attr()
//append() prepend() before() after()
//remove() empty()


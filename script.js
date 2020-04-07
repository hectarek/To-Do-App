var addButton = $('addButton');

var list = $('todoList');


addButton.click(()=>{


    if ($("userInput").text()) {
        
        var todoList = $('#todoList')
        var newLi = todoList.add('li').addClass('list-group-item').addClass('p-3').addClass('hvr-back-pulse')

        newLi.html($(userInput).text(('<img class="smallCheck mx-2" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png" alt="checkmark"> ' + ' <span>' + userInput + '</span>') 
        ))
    }

    $('userInput').text("")

})


list.click((e)=>{

    var self = $(this)

    for (let i=0; i < list.children.length; i++) {
        if (self == list.children[i]) {
            self.remove()
        }
    }
        
})


var addButton = $('#addButton');

var list = $('#todoList');


addButton.click( function(){

        var userInput = $("#userInput").val();

        if (userInput) {
        list.append('<li></li>')
        
        $('li').last()
        .addClass('list-group-item').addClass('p-3').addClass('hvr-back-pulse')
        .html('<img class="smallCheck mx-2" src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png" alt="checkmark"> ' + ' <span>' + userInput + '</span>') 
        }

    $('#userInput').val('')

})

//The issue is in what is being clicked on.
//Right now it is deleting the entire list. 

list.on('click', 'li', function(event) {

    var self = $(this)

    // var lis = list.children();

    console.log(event);

    self.css('text-decoration', 'line-through');

    setTimeout(function() {

        $(self).remove();

    }, 500);
        
})

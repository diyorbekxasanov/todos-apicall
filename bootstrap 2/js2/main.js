$(document).ready(function () {

    $("#btn").click(function () {
        let todo = [];
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/todos",
            type: "GET",
            success: function (data) {
                todo = data
            },
            error: function (err) {
                console.log(err)
            },
            beforeSend: function () {
                $("#btn").attr("disabled", "disabled")
                $("#spn").addClass("spinner-border spinner-border-sm")
            },
            complete: function () {
                $("#btn").removeAttr("disabled", "disabled")
                $("#spn").addClass("spinner-border spinner-border-sm d-none")
            },
            async: false
        })
        console.log(todo)
        let i=0
        for (let v of todo) {
            let card =
                            `<div class="card my-2">                                                    
                                <div class="card-body height d-flex align-items-center py-4" >
                                    <span class="mr-3">${v.id} </span>
                                    <input type="checkbox" ${v.completed ? "checked" : ""}></input>
                                    <p class="m-0 px-2"> ${v.title} </p>
                                </div>                              
                            </div>`
        
                        
                    i++
            $("#row").before(card)                

        }
        $(".height").css("height","0")
        $("#itog").html(i)
    })

})
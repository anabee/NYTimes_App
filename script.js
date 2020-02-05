$(document).ready(function(){

    var queryURL = "";

    $(".btn").on("click",function(event){
        event.preventDefault();
        var searchTerm = $("#searchTermInput").val(); //we get input
        var number= $("#numRecordsInput").val(); //we get input
        var start= $("#startYearInput").val(); //we get input
        var end=$("#endYearInput").val(); //we get input

        if(searchTerm == null || number == null){
            return;
        }

        var tempURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
        var tempKey = "api-key=3wqCFMa1jfQYolIR9Fr8c0AI4Y4Niziz";
        var tempBDate = "begin_date=" + start  +"0101";
        var tempEDate = "end_date=" + end + "1231";
    })
    

    // begin_date=20120101&end_date=20121231

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.docs;
        for (i=0; i < number; i++){
            var tempBox = $("<div>").text(i+1);
            var tempTitle = $("<p>").text(results[i].headline.main);
            var tempAuthor = $("<p>").text(results[i].byline.original);
        }
    });

})
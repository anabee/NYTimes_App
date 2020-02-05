$(document).ready(function(){

    

    $("#searchBtn").on("click",function(event){
        event.preventDefault();
        var queryURL = "";
        var searchTerm = $("#searchTermInput").val(); //we get input
        var number= $("#numRecordsInput").val(); //we get input
        var start= $("#startYearInput").val(); //we get input
        var end=$("#endYearInput").val(); //we get input


        var tempURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
        var tempKey = "api-key=3wqCFMa1jfQYolIR9Fr8c0AI4Y4Niziz";
        var tempBDate = "begin_date=" + start  +"0101";
        var tempEDate = "end_date=" + end + "1231";

        queryURL = tempURL + searchTerm; 

        if (start != null){
            queryURL += "&" +start;
        }
        if(end != null){
            queryURL += "&" + end;
        }

        queryURL += "&" + tempKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            var results = response.response.docs;
            console.log(results);
            for (i=0; i < number; i++){
                var tempHead = $("<div>");
                tempHead.attr("class", "articleResults");
                var tempBox = $("<div>").text(i+1);
                tempBox.attr("class", "articleNumber");
                var tempTextContent = $("<div>");
                tempTextContent.attr("class", "articleTextContent");
                var tempTitle = $("<p>").text(results[i].headline.main);
                tempTitle.attr("class", "articleHeadlines");
                var tempAuthor = $("<p>").text(results[i].byline.original);
                tempAuthor.attr("class", "articleAuthor");
    
                tempTextContent.append(tempTitle,tempAuthor);
                tempHead.append(tempBox, tempTextContent);
    
                $(".articles").append(tempHead);
            }
        });

        $("#submitBtn").on("click",function(){
            $(".form-control").val("");
            $(".articles").empty();
        })
    })
    


})
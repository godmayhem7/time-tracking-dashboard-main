document.querySelectorAll("a")[1].style.color="white"

let asLength = document.querySelectorAll("a").length

for(let i=0;i<asLength;i++){
    document.querySelectorAll("a")[i].addEventListener("click",function(){
        this.style.color="white"
        if (this===document.querySelectorAll("a")[0]){
            document.querySelectorAll("a")[1].style.color="hsl(235, 45%, 61%)"
            document.querySelectorAll("a")[2].style.color="hsl(235, 45%, 61%)"

            document.querySelectorAll("h2")[0].innerHTML = "5hrs"
            document.querySelectorAll("p")[1].innerHTML="daily - 7hrs"

            document.querySelectorAll("h2")[1].innerHTML = "1hr"
            document.querySelectorAll("p")[2].innerHTML="daily - 2hrs"

            document.querySelectorAll("h2")[2].innerHTML = "0hrs"
            document.querySelectorAll("p")[3].innerHTML="daily - 1hrs"

            document.querySelectorAll("h2")[3].innerHTML = "1hrs"
            document.querySelectorAll("p")[4].innerHTML="daily - 1hrs"

            document.querySelectorAll("h2")[4].innerHTML = "1hrs"
            document.querySelectorAll("p")[5].innerHTML="daily - 3hrs"

            document.querySelectorAll("h2")[5].innerHTML = "0hrs"
            document.querySelectorAll("p")[6].innerHTML="daily - 1hrs"

        }else if (this===document.querySelectorAll("a")[1]){
            document.querySelectorAll("a")[0].style.color="hsl(235, 45%, 61%)"
            document.querySelectorAll("a")[2].style.color="hsl(235, 45%, 61%)"

            document.querySelectorAll("h2")[0].innerHTML = "32hrs"
            document.querySelectorAll("p")[1].innerHTML="weekly - 36hrs"

            document.querySelectorAll("h2")[1].innerHTML = "10hrs"
            document.querySelectorAll("p")[2].innerHTML="weekly - 8hrs"

            document.querySelectorAll("h2")[2].innerHTML = "4hrs"
            document.querySelectorAll("p")[3].innerHTML="weekly - 7hrs"

            document.querySelectorAll("h2")[3].innerHTML = "4hrs"
            document.querySelectorAll("p")[4].innerHTML="weekly - 5hrs"

            document.querySelectorAll("h2")[4].innerHTML = "5hrs"
            document.querySelectorAll("p")[5].innerHTML="weekly - 10hrs"

            document.querySelectorAll("h2")[5].innerHTML = "2hrs"
            document.querySelectorAll("p")[6].innerHTML="weekly - 2hrs"

        }else if (this===document.querySelectorAll("a")[2]){
            document.querySelectorAll("a")[1].style.color="hsl(235, 45%, 61%)"
            document.querySelectorAll("a")[0].style.color="hsl(235, 45%, 61%)"

            document.querySelectorAll("h2")[0].innerHTML = "103hrs"
            document.querySelectorAll("p")[1].innerHTML="monthly - 128hrs"

            document.querySelectorAll("h2")[1].innerHTML = "23hrs"
            document.querySelectorAll("p")[2].innerHTML="monthly - 29hrs"

            document.querySelectorAll("h2")[2].innerHTML = "13hrs"
            document.querySelectorAll("p")[3].innerHTML="monthly - 19hrs"

            document.querySelectorAll("h2")[3].innerHTML = "11hrs"
            document.querySelectorAll("p")[4].innerHTML="monthly - 18hrs"

            document.querySelectorAll("h2")[4].innerHTML = "21hrs"
            document.querySelectorAll("p")[5].innerHTML="monthly - 23hrs"

            document.querySelectorAll("h2")[5].innerHTML = "7hrs"
            document.querySelectorAll("p")[6].innerHTML="monthly - 11hrs"
        }
        
    })
}



for(let i=0; i < 14; i++){
    document.querySelectorAll("img")[i].addEventListener("mouseover",function(){
        if (this.getAttribute("src")==="images/icon-ellipsis.svg"){
            this.setAttribute("src","images/colored-eclipsis.svg")
        }
    }) 

    document.querySelectorAll("img")[i].addEventListener("mouseleave",function(){
        if (this.getAttribute("src")==="images/colored-eclipsis.svg"){
            this.setAttribute("src","images/icon-ellipsis.svg")
        }
    })
}

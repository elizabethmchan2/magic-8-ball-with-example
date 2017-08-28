var answers = ["It is certain", "It is decidely so","Without a doubt", "Yes definitely","You may rely on it","As I see it, yes", "Most likely", "Outlook good", "yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

document.getElementById("ball").addEventListener("click", function(){
    setTimeout(function(){document.getElementById("tri").setAttribute("position","0 0 2")
        var element = Math.floor(Math.random()*(answers.length-1))
        // console.log(element)
        var response = answers[element]
        document.getElementById("text").setAttribute("draw", "background: blue")
        document.getElementById("text").setAttribute("textwrap", "textAlign: center; x: 128; y: 128; font: 50px serif ;lineHeight: 50px; text: " + response)
        
        // document.getElementById("text").setAttribute("visible", true)
    }, 1200);
    
    setTimeout(function(){
        document.getElementById("tri").setAttribute("position","0 0 1.5")}, 3000)
})
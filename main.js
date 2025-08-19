function wow() {
        let text;
            let x = document.getElementById("code").value;
            switch(x) {
                case "newsof7s":
                        text = "<h3> Happy Summer! Ready for Grade 8? </h3>";
                        break;
                case "kittenexplosion":
                        text= "<iframe height='576' width='864' src='https://forms.gle/LuVAdvBKgkWUbNau9'> </iframe>" ;
                        break;
                case "watchmebackflip":
                        text = "<iframe height='576' width='864' src='videohome.html'> </iframe>";
                        break;
                case "":
                        text = "<p> Please enter a code. </p>"
                        break;
                default:
                        text = "<p> Your secret code has expired. </p>";
                        break;
}     document.getElementById("start").innerHTML = text;
}

function video() {
        let text = "";
        let x = document.getElementById("code").value;
        switch(x.charAt(0)) {
                case "0":
                        text = ".txt";
                        break;
                case "1":
                        text = ".jpg";
                        break;
                case "2":
                        text = ".mp4";
                        break;
                case "3":
                        text =  ".html";
                        break;
        }
        window.location.replace("video/" + x + text);
}
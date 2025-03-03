function wow() {
        let text;
            let x = document.getElementById("code").value;
            switch(x) {
                case "newsof7s":
                        text = "<h3> Its March Break Bro </h3>";
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

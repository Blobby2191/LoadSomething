function wow() {
        let text;
            let x = document.getElementById("code").value;
            switch(x) {
                case "newsof7s":
                    text = "<h3> Merry Christmas </h3> <p> Christmas Break has just started! There will be no school until the 6th of January.</p>";
                    break;
                case "kittenexplosion":
                    text= "<a href='https://teams.live.com/meet/9331670844949?p=nhZ1NcPOYaQ5ZUadrM'> Click here </a>" ;
                    break;
                case null:
                    text = "<p> Please enter a code. </p>"
                    break;
                default:
                    text = "<p> Your secret code has expired. </p>";
                    break;
}     document.getElementById("start").innerHTML = text;
}
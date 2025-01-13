function wow() {
        let text;
            let x = document.getElementById("code").value;
            switch(x) {
                case "newsof7s":
                    text = "<h3> Merry Christmas </h3> <p> Christmas Break has just started! There will be no school until the 6th of January.</p> <b> Upcoming tests: Test V, Test VI (Semester Exam) / Special days: Back to School (6 Jan) </b>";
                    break;
                case "kittenexplosion":
                    text= "<iframe height='432' width='288' src='https://forms.gle/LuVAdvBKgkWUbNau9'> </iframe>" ;
                    break;
                case null:
                    text = "<p> Please enter a code. </p>"
                    break;
                default:
                    text = "<p> Your secret code has expired. </p>";
                    break;
}     document.getElementById("start").innerHTML = text;
}

// Andrew Cook
// ITMD441 Undergrade Student


//1. Change the main headline to "Uplift Your Branch with Stellar Marketing"
(function() {
    document.getElementsByTagName("h1")[0].innerText = "Uplift Your Brand with Stellar Marketing";
})();

//2. Change the line of text below the hero headline to the following test
    //Utilize cutting-edge strategies from Stellar Marketing to help your business thrive and excel
(function() {
    document.getElementsByTagName("p")[0].innerHTML = 'Utilize cutting-edge strategies from Stellar Marketing to help your business <b style="font-style: italic;">thrive</b> and <b style="font-style:italic;">excel</b>'
})();

//3. Change the image in the background to the one below:
(function() {
    let imageUrl = "https://picsum.photos/id/683/1280/720";
    document.getElementById("hero").style.backgroundImage = `url(${imageUrl})`;
})();

//4. Change the background color of the nav bar to the same color that is used in the footer
(function() {
    let backgroundColorClass = document.getElementsByTagName('footer')[0].classList[0];
    document.getElementsByTagName("header")[0].classList.replace("bg-blue-600", backgroundColorClass);
})();

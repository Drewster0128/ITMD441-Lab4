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

//5. Remove the "Get Started" CTA from the hero.
(function() {
    let hero = document.getElementById("hero");
    let cta = hero.getElementsByTagName("a")[0];
    hero.removeChild(cta);
})();

//6. Center align the heading for services, solutions, and contact
(function() {
    let sectionHeadings = document.getElementsByTagName("h2");
    Array.from(sectionHeadings).map((sectionHeading) => {
        sectionHeading.classList.add("text-center");
    });
})();

//7. In the services section change the icons color to #47C714
(function() {
    let color = "#47C714";
    let serviceIcons = Array.from(document.getElementsByClassName("material-symbols-outlined"));
    serviceIcons.map((icon) => {
        icon.style.color = color;
    });
})();

//8. Replace digital marketing icon to ads click
(function() {
    document.getElementsByClassName("material-symbols-outlined")[0].innerText = "ads_click";
})();

//9. In the specialized marketing solution section make a change to the layout of the tiles so that at >= 1024px they are 4 across instead of 2 across
(function() {
    let productCardsDiv = document.querySelector('div[data-section="product_cards"]');
    productCardsDiv.classList.add("lg:grid-cols-4");
})();

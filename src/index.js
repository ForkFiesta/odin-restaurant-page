import "./styles.css";
import paperBackground from "./img/grunge-paper-background.jpg";





function manageNavigation(){

    const homeButtom = document.querySelector("#logo");
    const menuButton = document.querySelectorAll("#menu");
    const aboutButton = document.querySelector("#about");


    menuButton.forEach(element => {
        element.addEventListener("click", ()=>{
            const contentSection = document.querySelector("#content");
            removeContent(contentSection);
            addMenuItems(contentSection);


        })
    });

    homeButtom.addEventListener("click", ()=>{
        location.reload();
    })
}


function removeContent(contentSection){
    contentSection.style.backgroundImage = "none";
    contentSection.style.backgroundColor="black";
    while (contentSection.firstChild){
        contentSection.removeChild(contentSection.firstChild);
    }
}


function addMenuItems(contentSection){

    // Adjust content section to flex display with Black Elegant Font
    // on a aged paper background
    const backgroundImage = document.createElement("img");
    backgroundImage.src = paperBackground;
    contentSection.style.backgroundImage = `url(${backgroundImage.src})`;
    contentSection.style.display = "flex";
    contentSection.style.flexDirection = "column";
    contentSection.style.justifyContent = "baseline";
    contentSection.style.alignItems = "center";
    contentSection.style.color = "black";
    contentSection.style.gap = "10px";
    contentSection.style.fontFamily = "Tangerine";


    const menuTitle = document.createElement('h1');
    menuTitle.classList.add("menuTitle");
    menuTitle.innerHTML = "Our Menu"
    contentSection.appendChild(menuTitle);

    //create div for grid 
    const gridContainer = document.createElement('div');
    gridContainer.classList.add("menu-grid");

    //appetizer header spans 2 columns
    const appetizerTitle = document.createElement('p');
    appetizerTitle.classList.add("appetizerTitle")
    appetizerTitle.innerHTML = "<strong>Appetizers</strong>";
    gridContainer.appendChild(appetizerTitle);

    const menuItem1 = document.createElement('p');
    const priceItem1 = document.createElement('p');
    const menuItem1Description = document.createElement('p');

    menuItem1.classList.add("menuItem");
    priceItem1.classList.add("priceItem");
    menuItem1Description.classList.add("itemDescription");

    menuItem1.innerHTML = "Golden Caviar Blini";
    priceItem1.innerHTML = "$350";
    menuItem1Description.innerHTML = "<em>Beluga caviar topped with 24-karat gold flakes on warm, buttered blinis, served with crème fraîche.</em>";


    gridContainer.appendChild(menuItem1);
    gridContainer.appendChild(priceItem1);
    gridContainer.appendChild(menuItem1Description);


    const menuItem2 = document.createElement('p');
    const priceItem2 = document.createElement('p');
    const menuItem2Description = document.createElement('p');

    menuItem2.classList.add("menuItem");
    priceItem2.classList.add("priceItem");
    menuItem2Description.classList.add("itemDescription");


    menuItem2.innerHTML = "Wagyu Beef Tartare";
    priceItem2.innerHTML = "$250";
    menuItem2Description.innerHTML = "<em>Hand-chopped A5 Wagyu beef with quail egg, black truffle oil, and caper emulsion, served with gold-dusted brioche.</em>";


    gridContainer.appendChild(menuItem2);
    gridContainer.appendChild(priceItem2);
    gridContainer.appendChild(menuItem2Description);


    contentSection.appendChild(gridContainer);



    

}

manageNavigation();

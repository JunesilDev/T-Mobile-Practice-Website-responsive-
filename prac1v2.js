const menuToggle = document.getElementById("menuToggle");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navRight = document.getElementById("navRight");
const menuOpenRight = document.getElementById("menuOpenRight");
const menuOverlay = document.getElementById("menuOverlay"); // add this

menuToggle.addEventListener("click", function () {
    mobileMenu.classList.add("open");
    navRight.style.display = "none";
    menuToggle.style.display = "none";
    menuOpenRight.style.display = "flex";

    menuOverlay.classList.add("show");   
    document.body.style.overflow = "hidden";
    mobileMenu.scrollTop = 0;   
});

closeMenu.addEventListener("click", function () {
    mobileMenu.classList.remove("open");
    navRight.style.display = "flex";
    menuToggle.style.display = "flex";
    menuOpenRight.style.display = "none";

        menuOverlay.classList.remove("show");     
    document.body.style.overflow = "";        
});

menuOverlay.addEventListener("click", function () {
    closeMenu.click();
});

const dropdownMenus = document.querySelectorAll(".dropdown-menu");

dropdownMenus.forEach(function(dropdownMenu) {
    dropdownMenu.addEventListener("click", function () {
        const mainSelection = dropdownMenu.closest(".main-selection");
        const selectionContents = mainSelection.nextElementSibling;
        const heading = mainSelection.querySelector(".selection-heading");

        dropdownMenus.forEach(function(otherMenu) {
            if (otherMenu !== dropdownMenu) {
                const otherMain = otherMenu.closest(".main-selection");
                const otherContent = otherMain.nextElementSibling;
                otherContent.classList.remove("show");
                otherMain.querySelector(".selection-heading").classList.remove("active");

                const otherArrowDown = otherMenu.querySelector(".arrow-down");
                const otherArrowUp = otherMenu.querySelector(".arrow-up");
                otherArrowDown.style.display = "block";
                otherArrowUp.style.display = "none";
            }
        });
        selectionContents.classList.toggle("show");
        heading.classList.toggle("active");

        const arrowDown = dropdownMenu.querySelector(".arrow-down");
        const arrowUp = dropdownMenu.querySelector(".arrow-up");

        if (selectionContents.classList.contains("show")) {
            arrowDown.style.display = "none";
            arrowUp.style.display = "block";
        } else {
            arrowDown.style.display = "block";
            arrowUp.style.display = "none";
        }
    });
});

const bttnContactSupport = document.querySelector(".bttn-contact-support");
const selectionContents2 = document.querySelector(".selection2-contents");
const arrowUp2 = bttnContactSupport.querySelector(".arrow-up");
const arrowDown2 = bttnContactSupport.querySelector(".arrow-down");

bttnContactSupport.addEventListener("click", function () {
    selectionContents2.classList.toggle("show2");

    if (selectionContents2.classList.contains("show2")) {
        arrowDown2.style.display = "none";
        arrowUp2.style.display = "block";
    } else {
        arrowDown2.style.display = "block";
        arrowUp2.style.display = "none";
    }
});

function initCarousel(trackId, leftBtnId, rightBtnId) {
    const track = document.getElementById(trackId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    if (!track || !leftBtn || !rightBtn) return;

    function cardScrollAmount(){ 
        const card = track.querySelector('.bd-cards');
        if (!card) return track.clientWidth * 0.9;
        const style = getComputedStyle(track);
        const gap = parseFloat(style.columnGap || style.gap || 16);
        return card.getBoundingClientRect().width + gap;
    }

    function updateButtons(){
        const maxScroll = track.scrollWidth - track.clientWidth;
        leftBtn.disabled = track.scrollLeft <= 4;
        rightBtn.disabled = track.scrollLeft >= maxScroll - 4;
    }

    leftBtn.addEventListener('click', () => {
        track.scrollBy({ left: -cardScrollAmount(), behavior: 'smooth'});
    });

    rightBtn.addEventListener('click', () => {
        track.scrollBy({ left: cardScrollAmount(), behavior: 'smooth'});
    });

    track.addEventListener('scroll', updateButtons, { passive: true});
    window.addEventListener('resize', updateButtons);
    updateButtons();
}

initCarousel('track', 'leftBtn', 'rightBtn');
initCarousel('track1', 'leftBtn1', 'rightBtn1');

const fb2Box = document.querySelectorAll(".fb2-box");

fb2Box.forEach(fb2Box => {
    const fb2bContens = fb2Box.querySelector(".fb2b-contents");
    const fb2bUl = fb2Box.querySelector(".fb2b-ul");
    const arrowDown3 = fb2Box.querySelector(".arrow-down3");
    const arrowUp3 = fb2Box.querySelector(".arrow-up3");

    fb2bContens.addEventListener("click", () => {
        fb2bUl.classList.toggle("show");

        if (fb2bUl.classList.contains("show")) {
            arrowDown3.style.display = "none";
            arrowUp3.style.display = "inline";
        } else {
            arrowDown3.style.display = "inline";
            arrowUp3.style.display = "none";
        }
    });
});

const navDropdowns = document.querySelectorAll(".main-nav2 .contents-left, .main-nav2 .contents-right");

navDropdowns.forEach(function(dropdown) {
    const menu = dropdown.querySelector(".contents-menu");
    const arrowUpNav2 = dropdown.querySelector(".arrow-up-nav2");
    const arrowDownNav2 = dropdown.querySelector(".arrow-down-nav2");

    dropdown.addEventListener("mouseenter", function () {
        if (menu) {
            menu.style.display = "flex";
        }
        if (arrowUpNav2) {
            arrowUpNav2.style.display = "inline";
        }
        if (arrowDownNav2) {
            arrowDownNav2.style.display = "none";
        }
    });

    dropdown.addEventListener("mouseleave", function () {
        if (menu) {
            menu.style.display = "none";
        }
        if (arrowUpNav2) {
            arrowUpNav2.style.display = "none";
        }
        if (arrowDownNav2) {
            arrowDownNav2.style.display = "inline";
        }
    });
});

const accountBtn = document.querySelector(".account-btn");
const accountMenu = document.querySelector(".account-menu");

const arrowDownNav3 = document.querySelector(".arrow-down-nav3");
const arrowUpNav3 = document.querySelector(".arrow-up-nav3");

accountBtn.addEventListener("click", function () {
    if (accountMenu.style.display === "block") {
        accountMenu.style.display = "none";
        arrowDownNav3.style.display = "inline";
        arrowUpNav3.style.display = "none";
    } else {
        accountMenu.style.display = "block";
        arrowDownNav3.style.display = "none";
        arrowUpNav3.style.display = "inline";
    }
});
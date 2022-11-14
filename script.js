

// CUSTOM SIZE FOR CLOCK WHEN ZOOMING OUT
var clock_container = document.querySelector('.container');
window.addEventListener('resize', () => {
    const browserZoomLevel = Math.round(window.devicePixelRatio * 100 - 100);

    // scale the clock_container
    if (window.innerWidth > 1000){
        if (browserZoomLevel){
            clock_container.style.transform = "scale(" + browserZoomLevel / 100 + ")";
        }
        if (browserZoomLevel / 100 <= 0){
            clock_container.style.transform = "scale(0.2)";
        }
        if (browserZoomLevel >= 100){
            clock_container.style.transform = "scale(1)";
        }
    }
    else{
        clock_container.style.transform = "scale(1)";
    }
  })



// POLL
let website = "flipclock.tk"
var current_poll = "flipclock_new_zoom";


// DISPLAY NONE FLIP CLOCKS
document.getElementsByClassName('flip_container')[0].style.display = "none";
document.getElementsByClassName('flip_container')[1].style.display = "none";

// DISPLAY DEFAULT CLOCKS
document.getElementById('hours').style.display = "block";
document.getElementById('minutes').style.display = "block";



// GET COOKIES
const user_status = ('; '+document.cookie).split(`; status=`).pop().split(';')[0];
const date_subscribed = ('; '+document.cookie).split(`; date_subscribed=`).pop().split(';')[0];
const lifetime_status = true



setInterval(showTime, 1000);
function showTime() {
    // console.log('chechking')

	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();

	if (hour > 12) {
		hour -= 12;
	}
	if (hour == 0) {
		hour = 12;
	}


    // NO FLIP ANIMATION
    function defaultClock(){
        hour = hour < 10 ? "" + hour : hour;
        min = min < 10 ? "0" + min : min;

        document.getElementById("hours").innerHTML = hour;
        document.getElementById("minutes").innerHTML = min;

        document.getElementById('minutes').style.display = "block";
        document.getElementById('hours').style.display = "block";
    }

    // FLIP ANIMATION
    function flipClock(){
        if (min < 10){
            document.querySelector(".hidden_0").classList.remove("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "18vw";
        }
        else{
            document.querySelector(".hidden_0").classList.add("hide");
            document.getElementsByClassName("flip_container")[1].style.marginLeft = "0";
        }

        flip(document.querySelector("[data-hour-tens]"), hour)
        flip(document.querySelector("[data-minute-tens]"), min)

        document.getElementsByClassName('flip_container')[0].style.display = "block";
        document.getElementsByClassName('flip_container')[1].style.display = "block";

        document.getElementById('hours').style.display = "none";
        document.getElementById('minutes').style.display = "none";
    }

    flipClock();
}
showTime();

// FLIP ANIMATIONS MAIN FUNCTION
function flip(flipCard, newNumber) {
    const topHalf = flipCard.querySelector(".top")
    const startNumber = parseInt(topHalf.textContent)
    if (newNumber === startNumber) return

        const bottomHalf = flipCard.querySelector(".bottom")
        const topFlip = document.createElement("div")
        topFlip.classList.add("top-flip")
        const bottomFlip = document.createElement("div")
        bottomFlip.classList.add("bottom-flip")

        top.textContent = startNumber
        bottomHalf.textContent = startNumber
        topFlip.textContent = startNumber
        bottomFlip.textContent = newNumber

        topFlip.addEventListener("animationstart", e => {
            topHalf.textContent = newNumber
        })
        topFlip.addEventListener("animationend", e => {
            topFlip.remove()
        })
        bottomFlip.addEventListener("animationend", e => {
            bottomHalf.textContent = newNumber
            bottomFlip.remove()
        })
    flipCard.append(topFlip, bottomFlip)
}



// MENU
// TIME ZONE
function defaultTimeZone() {
    let time = new Date();
    let hour = time.getHours();
    
    am_pm = "AM";
    
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    document.getElementById("ampm").innerHTML = am_pm;
}

function time_zone(){
    var time_zone_element = document.getElementById("ampm");
    var time_zone = new Date();
    time_zone_element.innerHTML = time_zone.toLocaleString('en-US', { hour: 'numeric', hour12: true }).slice(2, 5);
}



// console.clear();



// IF USER PAID FOR PRO PLUS SUBSCRIPTION


// console.log("FEATURES: \n • Themes \n • Time Zone \n • Flip Animation");

// ALLOW THEMES / FLIP ANIMATION / TIME ZONES
document.querySelector('#pro_plus_subscription').style.display = "block";

// TIME ZONE
setInterval(time_zone,1000)
time_zone();






// MENU
const menu = document.getElementById('menu_toggle');
const hiddenDiv = document.getElementsByClassName('menu2')[0];
const themesContainer = document.getElementsByClassName('themes_container')[0];
const subscriptionToggle1 = document.getElementsByClassName('subscription')[0];
const subscriptionToggle2 = document.getElementsByClassName('subscription')[1];

// LIVE ----------------------------------------------------------------
const fullSc = document.querySelector('.full');
// const fullSc_old = document.querySelector('.fullscreen_old');


// FULL SCREEN
fullSc.onclick = function DoFullscreen (event) {
	if (document.fullscreenElement) {
	  document.exitFullscreen()
	} else {
	  document.documentElement.requestFullscreen();
	}
}
// LIVE ----------------------------------------------------------------






// DIFF MENU FOR MOBILE AND DESKTOP
menu.onclick = function ToggleThing (event) {
    if (hiddenDiv.style.display == 'none') {
        hiddenDiv.style.display = 'flex'
    } else {
        hiddenDiv.style.display = 'none'
    }
}

subscriptionToggle1.onclick = function ToggleThing (event) {
    if (themesContainer.style.display == 'none') {
        themesContainer.style.display = 'flex'
    } else {
        themesContainer.style.display = 'none'
    }
}

subscriptionToggle2.onclick = function ToggleThing (event) {
    if (themesContainer.style.display == 'none') {
        themesContainer.style.display = 'flex'
    } else {
        themesContainer.style.display = 'none'
    }
}




// CHANGED FOR TESTING ----------------------------------------------------------------
// const toggleSwitchOld = document.querySelector('.theme-switch-old input[type="checkbox"]');
// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }   
// }
// toggleSwitchOld.addEventListener('change', switchTheme, false);
// CHANGED FOR TESTING ----------------------------------------------------------------


// LIGHT MODE / DARK MODE / THEMES

// remove localStorage THEME on reload
window.onbeforeunload = function() {
    localStorage.removeItem('current_theme');
}


const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }    

    // THEME 1
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme1") {
        document.body.style.setProperty('--background', '#0F140F');
        document.body.style.setProperty('--holder', '#1A1F1A');
        document.body.style.setProperty('--text', '#C4EBC1');
    } 
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme1') {
        document.body.style.setProperty('--background', '#E8FFE8');
        document.body.style.setProperty('--holder', '#D6F5D6');
        document.body.style.setProperty('--text', '#546654');
    }

    // THEME 2
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme2") {
        document.body.style.setProperty('--background', '#131315');
        document.body.style.setProperty('--holder', '#1B1C20');
        document.body.style.setProperty('--text', '#C5C8F8');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme2') {
        document.body.style.setProperty('--background', '#EFF2FF');
        document.body.style.setProperty('--holder', '#E4E7FE');
        document.body.style.setProperty('--text', '#222843');
    }

    // THEME 3
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme3") {
        document.body.style.setProperty('--background', '#1B1616');
        document.body.style.setProperty('--holder', '#271E1E');
        document.body.style.setProperty('--text', '#EF6666');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme3') {
        document.body.style.setProperty('--background', '#FFF4F4');
        document.body.style.setProperty('--holder', '#FFEDED');
        document.body.style.setProperty('--text', '#FF8F8F');
    }

    // THEME 4
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme4") {
        document.body.style.setProperty('--background', '#16120B');
        document.body.style.setProperty('--holder', '#221E17');
        document.body.style.setProperty('--text', '#FFAC45');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme4') {
        document.body.style.setProperty('--background', '#FFF7EC');
        document.body.style.setProperty('--holder', '#FFEED6');
        document.body.style.setProperty('--text', '#FDC97B');
    }

    // THEME 5
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme5") {
        document.body.style.setProperty('--background', '#131519');
        document.body.style.setProperty('--holder', '#1A1E23');
        document.body.style.setProperty('--text', '#CCE1FF');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme5') {
        document.body.style.setProperty('--background', '#F5F9FF');
        document.body.style.setProperty('--holder', '#E4EFFF');
        document.body.style.setProperty('--text', '#2C3440');
    }

    // THEME 6
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme6") {
        document.body.style.setProperty('--background', '#0D0F11');
        document.body.style.setProperty('--holder', '#14161A');
        document.body.style.setProperty('--text', '#FFD458');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme6') {
        document.body.style.setProperty('--background', '#FFFDF4');
        document.body.style.setProperty('--holder', '#FFF8E1');
        document.body.style.setProperty('--text', '#FFDB57');
    }

    // THEME 7
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme7") {
        document.body.style.setProperty('--background', '#1A171C');
        document.body.style.setProperty('--holder', '#221D23');
        document.body.style.setProperty('--text', '#E3CEEC');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme7') {
        document.body.style.setProperty('--background', '#FCF5FF');
        document.body.style.setProperty('--holder', '#F8E8FF');
        document.body.style.setProperty('--text', '#574260');
    }

    // THEME 8
    if (document.documentElement.getAttribute('data-theme') == 'dark' && localStorage.getItem("current_theme") == "theme8") {
        document.body.style.setProperty('--background', '#181B19');
        document.body.style.setProperty('--holder', '#1E2320');
        document.body.style.setProperty('--text', '#BEEBD2');
    }
    if (document.documentElement.getAttribute('data-theme') == 'light' && localStorage.getItem('current_theme') == 'theme8') {
        document.body.style.setProperty('--background', '#F5FFFA');
        document.body.style.setProperty('--holder', '#E6F8EE');
        document.body.style.setProperty('--text', '#5F8873');
    }
}
toggleSwitch.addEventListener('change', switchTheme, false);



// THEME 1
document.querySelector(".theme1").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme1");
    document.body.style.setProperty('--background', '#0F140F');
    document.body.style.setProperty('--holder', '#1A1F1A');
    document.body.style.setProperty('--text', '#C4EBC1');
});

// THEME 2
document.querySelector(".theme2").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme2");
    document.body.style.setProperty('--background', '#131315');
    document.body.style.setProperty('--holder', '#1B1C20');
    document.body.style.setProperty('--text', '#C5C8F8');
});

// THEME 3
document.querySelector(".theme3").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme3");
    document.body.style.setProperty('--background', '#1B1616');
    document.body.style.setProperty('--holder', '#271E1E');
    document.body.style.setProperty('--text', '#EF6666');
});

// THEME 4
document.querySelector(".theme4").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme4");
    document.body.style.setProperty('--background', '#16120B');
    document.body.style.setProperty('--holder', '#221E17');
    document.body.style.setProperty('--text', '#FFAC45');
});

// THEME 5
document.querySelector(".theme5").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme5");
    document.body.style.setProperty('--background', '#131519');
    document.body.style.setProperty('--holder', '#1A1E23');
    document.body.style.setProperty('--text', '#CCE1FF');
});

// THEME 6
document.querySelector(".theme6").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme6");
    document.body.style.setProperty('--background', '#0D0F11');
    document.body.style.setProperty('--holder', '#14161A');
    document.body.style.setProperty('--text', '#FFD458');
});

// THEME 7
document.querySelector(".theme7").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme7");
    document.body.style.setProperty('--background', '#1A171C');
    document.body.style.setProperty('--holder', '#221D23');
    document.body.style.setProperty('--text', '#E3CEEC');
});


// THEME 8
document.querySelector(".theme8").addEventListener("click", function() {
    localStorage.setItem("current_theme", "theme8");
    document.body.style.setProperty('--background', '#181B19');
    document.body.style.setProperty('--holder', '#1E2320');
    document.body.style.setProperty('--text', '#BEEBD2');
});














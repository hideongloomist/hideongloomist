function changeCSS(cssFile, cssLinkIndex) {

    var old_link = document.getElementsByTagName("link").item(cssLinkIndex);

    var new_link = document.createElement("link");
    new_link.setAttribute("rel", "stylesheet");
    new_link.setAttribute("type", "text/css");
    new_link.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(new_link, old_link);
}
function onChangeSlider() {
    var checkBox = document.getElementById("slider");
    if (checkBox.checked == true){
        changeCSS('./css/dark.css', 0)
    } else {
        changeCSS('./css/light.css', 0)
    }
}

const getPreferredScheme = () => window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? turnDarkMode() : 'light';

function turnDarkMode(){
    var checkBox = document.getElementById("slider");
    checkBox.click();
}
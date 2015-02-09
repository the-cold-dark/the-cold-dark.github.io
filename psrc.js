// Copyright 1999, Brandon Gillespie
// use wherever, keep this copyright notice with the code.

browser = navigator.appName;
browserv = parseInt(navigator.appVersion);
if ((browser == "Netscape" || browser == "Microsoft Internet Explorer") &&
    browserv >= 3)
    supportlevel = browserv;
else
    supportlevel = 2;

var imgover = [];
pageName = "";
base = "";

function def_img(tok, x, y, src) {
    imgover[tok] = [new Image(x, y), new Image(x, y)];
    imgover[tok][0].src = base + src + ".gif";
    imgover[tok][1].src = base + src + "-on.gif";
}
    
if (supportlevel >= 3) {
    def_img("cbar-download",  122,  25, "images/cbar-download");
    def_img("cbar-reference", 117,  25, "images/cbar-reference");
    def_img("cbar-servers", 91,  25, "images/cbar-servers");
    def_img("cbar-contact", 89,  25, "images/cbar-contact");
    def_img("cbar-info", 81,  25, "images/cbar-info");
}

function imgOver(tok) {
    if (supportlevel < 3)
        return;
    document[tok].src = imgover[tok][1].src;
}

function imgOut(tok) {
    if (supportlevel < 3)
        return;
    if (pageName && pageName == tok)
        return;
    document[tok].src = imgover[tok][0].src;
}

function hilitePage(tok) {
    pageName = tok;
    imgOver(pageName);
}


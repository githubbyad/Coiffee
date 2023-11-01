// declarations
const currentURL = window.location.href;
const htmlTag = document.querySelector(`html`);
const liveEditorPage = `hpeditor.`;
const defaultApp = `.ONE`;
const homeId = `1`;

// get paramerter value from URL
const getParamValue = name => {

    let url = location.href;
    let urlx = new URL(url);
    let pm = urlx.searchParams.get(name);
    if (pm == null) {
        return null;
    }
    return pm;

}

// add live-editor
if (window.location.href.includes(liveEditorPage)) {
    let getSite = getParamValue("site");
    let tooltip1 = document.createElement("script");
    let tooltip2 = document.createElement("script");
    let ufields = document.createElement("script");
    tooltip1.src = "/JQuery/ToolTip/js/spinners/spinners.js";
    tooltip2.src = "/JQuery/ToolTip/js/tipped/tipped.js";
    ufields.src = `https://${getSite}/ufields.js`;
    document.querySelector("html").insertAdjacentElement("beforeend", tooltip1);
    document.querySelector("html").insertAdjacentElement("beforeend", tooltip2);
    document.querySelector("html").insertAdjacentElement("beforeend", ufields);
}

document.addEventListener("DOMContentLoaded", () => {

    // loader
    if (document.querySelector(".cf-loader") && document.querySelector(".mainbody")) {
        if (document.querySelector(".hpx-main")) {
            document.querySelector(".cf-loader").remove();
            document.querySelector(".mainbody").classList.remove("invisible");
        } else {
            setTimeout(() => {
                document.querySelector(".cf-loader").classList.add("loaderFaded");
                document.querySelector(".mainbody").classList.remove("invisible");
            }, 1500);
            setTimeout(() => document.querySelector(".cf-loader").remove(), 2000);
        }
    }

    // add sticky menu
    if (window.screen.width > 1024 && !document.querySelector(".hpx-main")) {

        // declarations
        const menuBar = document.querySelector("div[data-menu='sticky']");
        const windowHeight = window.screen.height * 0.7;

        // add menuCopy
        menuBar && menuBar.insertAdjacentHTML("afterend", `<menuSticky class="menuStickyUp">${menuBar.outerHTML}</menuSticky>`);

        // class changes on menuCopy
        if (document.querySelector("menuSticky")) {
            const menuSticky = document.querySelector("menuSticky");
            menuSticky.querySelector(".cus-menu-bar").classList.remove("py-3");

            // show sticky menu when scroll down
            window.addEventListener("scroll", () => {
                if (window.scrollY > windowHeight) {
                    menuSticky.classList.add("menuStickyDown");
                    menuSticky.classList.remove("menuStickyUp");
                } else {
                    menuSticky.classList.remove("menuStickyDown");
                    menuSticky.classList.add("menuStickyUp");
                }
            });
        }

    }

    // active menu
    if (document.querySelector(".nav-link")) {

        const activeMenu = currentURL.split("#").pop();
        document.querySelectorAll(".nav-link").forEach(menu => {

            // remove home menu on mobile homepage
            if (menu.getAttribute("id") == "cus-home-menu" && window.screen.width < 992) {
                const currentSubmenu = ReadSubmenu();
                currentSubmenu == homeId && menu.classList.add("d-none");
                menu.parentElement.tagName == "LI" && menu.parentElement.classList.add("d-none");

            }

            // when loading site
            if (menu.href.split("#").pop() == activeMenu) {
                document.querySelectorAll(".nav-link").forEach(menuClear => {
                    menuClear.classList.remove("text-theme");
                    menu.href == menuClear.href && menuClear.classList.add("text-theme")
                });
                menu.classList.add("text-theme");
            }

            // menu click
            menu.addEventListener("click", () => {
                document.querySelectorAll(".nav-link").forEach(menuClear => {
                    menuClear.classList.remove("text-theme");
                    menu.href == menuClear.href && menuClear.classList.add("text-theme")
                });
                menu.classList.add("text-theme");
            });

        });

    }


    // go to top scrolling
    const goTop = document.querySelector(".cus-scroll-top");

    if (goTop) {
        window.addEventListener("scroll", () => (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) ? (goTop.style.bottom = '20px') : (goTop.style.bottom = "-100px"));
        goTop.addEventListener('click', () => window.scrollTo(0, 0));
    }

    // dark-light theme
    const themeToogle = theme => {
        htmlTag.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    localStorage.getItem("theme") && themeToogle(localStorage.getItem("theme")); /*  get theme from localStorage */

    if (document.querySelector(".cus-dark-light-theme")) { /* change theme onclick */
        const cusDarkLightTheme = document.querySelector('.cus-dark-light-theme');
        cusDarkLightTheme.querySelector(`i[data-theme="dark"]`).addEventListener("click", () => themeToogle("dark"));
        cusDarkLightTheme.querySelector(`i[data-theme="light"]`).addEventListener("click", () => themeToogle("light"));
    }

    // logo url changes on homepage
    if (document.querySelector(".cus-logo")) {
        document.querySelectorAll(".cus-logo").forEach(lg => {
            (lg.href == currentURL || `${lg.href}#` == currentURL) && (lg.href = "#"); /* checking homepage */
        });

    }

    // scrolling effect for big image
    if (document.querySelector(".cus-image-scroller") && window.screen.width > 992) {

        document.querySelectorAll(".cus-image-scroller").forEach(b => {
            const bigImageMid = b.offsetTop + (b.offsetHeight * 0.3);
            let windowScroll = window.scrollY;
            let imageTop = b.offsetTop - 70;
            let bgPosition = -((windowScroll - imageTop) * 0.7);

            let imageSrc = b.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];

            let image = new Image();
            image.src = imageSrc;
            image.onload = function () {
                let height = image.height * 0.66;
                b.style.minHeight = `${height}px`;
            };

            b.style.backgroundPosition = `50% 0`;

            window.addEventListener("scroll", () => {

                windowScroll = window.scrollY;

                if (windowScroll < bigImageMid && windowScroll > imageTop) {

                    bgPosition = -((windowScroll - imageTop) * 0.7);
                    b.style.backgroundPosition = `50% ${bgPosition}px`;

                }
            });
        })

    }


});


// iframe src changes and resize
const changeFrameSRC = frame => {
    let appSrv = readCookie("AppServer"); /* get appServer */
    appSrv = appSrv ?? `https://bulletlink.${defaultApp.toLocaleLowerCase()}`;
    if (frame.src.includes("&pform")) { /* if src is blank */
        frame.src = appSrv + frame.getAttribute("data-url");
        setTimeout(() => iFrameResize({ log: true }, frame), 1000); /* resize iFrame */
    }
}


// resize map as per contact-us form
const resizeMap = map => {
    const contactFrame = document.querySelector("iframe[data-url*='pform=ContactUs']");
    if (contactFrame) {
        if (window.screen.width < 992) {
            map.style.height = "400px";
        } else {
            let mapInter = setInterval(() => {
                map.style.height = contactFrame.style.height;
            }, 1000);
            setTimeout(() => clearInterval(mapInter), 7000);
        }
    }
}

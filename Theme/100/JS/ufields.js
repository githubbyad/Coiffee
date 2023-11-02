// LiveEditor Scripts & Styles
if (window.location != window.parent.location || window.location.href.includes("hpeditor.")) {

    // declarations
    const rootSite = `coiffee.com`;
    const leScripts = document.createElement(`script`);
    const leStyles = document.createElement(`link`);
    leScripts.src = `https://${rootSite}/lescripts.js`;
    leStyles.type = `text/css`;
    leStyles.rel = `stylesheet`;
    leStyles.href = `https://${rootSite}/lestyles.css`;

    // adding files from root
    document.querySelector(`head`).insertAdjacentElement(`beforeend`, leStyles);
    document.querySelector(`head`).insertAdjacentElement(`beforeend`, leScripts);
}

// add LiveEditor button in site-manager
document.addEventListener("DOMContentLoaded", () => {
    const lbs = { res: "responsibility", he: "hpeditor", package: ".a", services: "sp", text: "Live Editor" };
    if (window.location.href.includes(`/${lbs.res}.`) && document.querySelector(`.lb-button`) && window.location == window.parent.location) {

        const url = new URL(location.href);
        const siteRef = url.searchParams.get("site");
        const le = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" style="margin-right:0.5rem" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>`;

        document.querySelector(`.lb-button`).insertAdjacentHTML(`afterbegin`, `<a class="sm-hp" href="/${lbs.he}${lbs.package + lbs.services}?site=${siteRef}">${le} ${lbs.text}</a>`);
    
    }
});

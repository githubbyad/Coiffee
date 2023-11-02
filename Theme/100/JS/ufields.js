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

// BEGIN: Live Builder(hpeditor)

// declarations
const liveEditor = "Live Editor";
const lb = { res: "responsibility", he: "hpeditor" };
const le = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" style="margin-right:0.5rem" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>`;
const fullScreenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-arrows-fullscreen me-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/></svg> Full Screen`;
const exitFullScreenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-fullscreen-exit me-2" viewBox="0 0 16 16"><path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5zm5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5zM0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5zm10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4z"/></svg> Exit Full Screen`;

// Functions
const classIdExist_addClass = (a, b) => document.querySelector(a) && document.querySelector(a).classList.add(b);

const classIdExist_displayNone = c => (document.querySelector(c)) && (document.querySelectorAll(c).forEach(ca => ca.style.display = 'none'));

function classIdExist_displayBlock(d) {
    if (document.querySelector(d)) {
        document.querySelectorAll(d).forEach(da => {
            da.style.display = 'block';
        });
    }
}

const toggleScreen = (f, e) => {
    document.querySelector(f) && document.querySelector(f).classList.toggle("d-none");
    document.querySelector(e) && document.querySelector(e).classList.toggle("d-none");
}

const addPlaceHolder = (id, text) => document.querySelector(`#${id}`) && (document.querySelector(`#${id}`).placeholder = `Write ${text}`);

const addSelectText = (id, text, num) => {
    if (document.querySelector(`#${id} option`)) {
        if (num) {
            document.querySelector(`#${id} option:nth-child(${num})`).innerText = `-- Select ${text} --`;
            document.querySelector(`#${id} option:nth-child(${num}`).setAttribute("disabled", true);
        } else {
            document.querySelector(`#${id} option`).innerText = `-- Select ${text} --`;
            document.querySelector(`#${id} option`).setAttribute("disabled", true);
        }
    }
}

const headerSet = y => document.querySelector('#form_header_wrapper span').innerText = y;

const setTicketSubject = s => document.querySelector('#subject').value = s;

const setPlaceHolder = (b, m) => document.querySelector(b).setAttribute('placeholder', m);

const removeDeleteLink = () => document.querySelectorAll('.input a').forEach(d => (d.innerText == 'delete') && (d.style.display = 'none'));


const doNotComporessPNG = () => {

    document.querySelectorAll('input[type="file"]').forEach(c => {

        c.addEventListener('change', () => {

            const ar = ['png', 'gif', 'ico'];
            (ar.includes(c.value.toLowerCase().split('.').pop())) ? (document.querySelector('#compressimages').value = 'No') : (document.querySelector('#compressimages').value = 'Yes');

        });

    });

}

const stringInURL = str => {
    if (window.location.href.includes(str)) {
        return true;
    }
}

function onlyMenuSelect() {
    if ($('#menu option').length == 2) {
        $('#menu option:nth-child(2)').filter(function () {
            return ($(this).text() != '');
        }).prop('selected', true);
    }
}

function menuSelect() {
    let pa = window.location.href.split('$$').pop();
    let qs = pa.replace(/@@/g, "'").replace(/_/g, " ");
    let menuSubMenuPair = qs.replace("&&", " - ");
    let subMenu = menuSubMenuPair.split(" - ")[1];
    headerSet(subMenu);
    document.querySelector("#menu") && (document.querySelector("#menu").value = menuSubMenuPair);
}

function categorySelect() {
    let fpurl = location.href;
    let fpurlx = new URL(fpurl);
    let fpsite = fpurlx.searchParams.get("fpc");
    let fpcc = fpsite.replace(/@@/g, "'").replace(/A_M_P/g, "&").replace(/_/g, " ");
    $('#category option').filter(function () {
        return ($(this).text() == fpcc);
    }).prop('selected', true);
}

function createTicket(h, s, m) {
    if (stringInURL(h)) {
        setTicketSubject(setTicketSubject);
        setPlaceHolder('#message', m);
        headerSet(s);
    }
}

function issueDateSelect() {
    if (stringInURL("&isdate")) {
        let dates = getParam('isdate');
        let years = dates.split('_').pop();
        let days = dates.split('_' + years).shift().split('_').pop();
        let months = dates.split('_' + years).shift().split('_').shift();
        let idate = years + '-' + months + '-' + days;
        document.querySelector('#issue_date').value = idate;
    }
}

const clearEndingDate = () => document.querySelector('#ending_date').value = '';

function hideField(f) {
    document.querySelectorAll('.label.col.col-4').forEach(b => {
        if (b.innerText.replace(/\n/g, "$") == f) {
            b.parentElement.parentElement.style.display = 'none';
        }
    });
}

function hideFieldText(f) {
    document.querySelectorAll('.label.col.col-4').forEach(b => {
        if (b.innerText == f) {
            b.style.display = 'none';
        }
    });
}

function centerBodyField(s, p) {
    document.querySelectorAll('.label.col.col-4').forEach(a => {
        if (a.innerText == s) {
            a.nextElementSibling.style.marginLeft = p;
        }
    });
}

const hideAllHighlights = () => document.querySelectorAll('.label.col.col-4').forEach(ha => (ha.innerText.includes('Add to Highlight')) && (ha.parentElement.parentElement.style.display = 'none'));

const classIdExistAll_displayNone = d => (document.querySelector(d)) && document.querySelectorAll(d).forEach(x => x.style.display = 'none');

const showField = f => document.querySelectorAll('.label.col.col-4').forEach(b => (b.innerText == f) && (b.parentElement.parentElement.style.display = 'block'));

const fieldChange = (a, b) => document.querySelectorAll('.label.col.col-4').forEach(c => (c.innerText == a) && (c.innerText = b));

const fieldChange2 = (a, b) => document.querySelectorAll('.label.col.col-4').forEach(c => (c.innerText.includes(a)) && (c.innerText = b));

function hideLightBulb(h) {
    document.querySelectorAll('.label.col.col-4').forEach(c => {
        if (c.innerText == h) {
            if (c.nextElementSibling.nextElementSibling.children[0].lastElementChild) {
                c.nextElementSibling.nextElementSibling.children[0].lastElementChild.style.display = 'none';
            }
        }
    });
}

const hideCropImage = () => document.querySelectorAll('a[href="/crop-image.html"]').forEach(a => a.style.display = 'none');


function setIntervalLimited(callback, interval, x) {
    for (let i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }
}

function createCookie(name, value, days) {

    let expires;
    if (days) {

        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();

    } else expires = "";

    document.cookie = name + "=" + value + expires + "; path=/";

}

function readCookie(name) {

    let nameEQ = name + "=";
    let c;
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {

        c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

    }
    return null;

}

function OpenLbPopup(pageUrl, window_type, fwidth, fheight) {

    if (!document.getElementById(`LB_Popup_button`)) {

        const msg = `<iframe id="f-mfp-iframe" class="f-mfp-iframe hpe-iframe" style="visibility:hidden;opacity:0;" allowfullscreen="" src="${pageUrl}" frameborder="0"></iframe>`;
        let lngl = 'sp';
        let pext = `.a${lngl}`;

        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='LB_Popup_button' type='button' data-bs-toggle='modal' data-bs-target='#LB_Popup' style='display:none;'></button>
            <div class='LB_Popup_box modal left fade' id='LB_Popup' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='LB_PopupLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable mx-auto'>
                    <div class='modal-content'>
                        <div class='hpx-loader'></div>
                        <button type='button' class='LB_Popup_close btn-close position-absolute d-none' data-bs-dismiss='modal' aria-label='Close'>
                            <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-x-lg' viewBox='0 0 16 16'>
                                <path fill-rule='evenodd' d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'/>
                                <path fill-rule='evenodd' d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'/>
                            </svg>
                        </button>
                        <div class='modal-body text-center hp-x-popup2' style='white-space: pre-wrap;'>${msg}</div>
                    </div>
                </div>
                <style>.modal-dialog-scrollable .modal-content {max-height: none;overflow:visible;}.modal-body {padding:0;} .LB_Popup_close{right:-1rem;z-index:999;top:-1rem;background-color:#0d6efd;border-radius:50px;padding:.5rem;opacity:1;box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);background-image:none;color:#fff;display:flex;justify-content:center;align-items:center;font-weight:700;font-size:18px}.LB_Popup_close:hover{color:#fff;background-color: red;opacity:1} @media (min-width:992px) {#LB_Popup .modal-dialog {max-width: 85vw;}} @media (max-width:991px) {#LB_Popup .modal-dialog {max-width: 85vw;}} .f-mfp-iframe {width:100%;min-height:90vh;height:90vh;}#f_loader{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%)}#f_loader i{font-size:4rem;color:#0d6efd;opacity:0.8}#LB_Popup{z-index:9999999;background: rgba(0,0,0,0.7);}</style>
            </div>
        `);

        document.getElementById(`LB_Popup_button`).click();
        document.getElementsByClassName(`LB_Popup_close`)[0].addEventListener(`click`, function () {
            document.getElementById(`LB_Popup_button`).remove();
            document.getElementsByClassName(`LB_Popup_box`)[0].remove();
        });

        setTimeout(() => document.querySelector(`.modal-content .hpx-loader`).classList.add(`hpe-loader-start`), 1000);

        // after loading iframe
        document.querySelector('#f-mfp-iframe').addEventListener("load", () => {
            document.querySelector(`.modal-content .hpx-loader`).setAttribute(`style`, `visibility:hidden;opacity:0;`);
            document.getElementsByClassName(`hpe-iframe`)[0].setAttribute(`style`, `visibility:visible;opacity:1;`);
            if (document.getElementsByClassName(`hpe-iframe`)[0].getAttribute(`data-hide-close`) == null) {
                document.getElementsByClassName(`LB_Popup_close`)[0].classList.remove(`d-none`);
            }
            if (document.getElementById('f-mfp-iframe').contentWindow.location.href.includes(`/acknowledge${pext}`)) {
                document.getElementById('f-mfp-iframe').contentWindow.document.getElementById(`form2`).setAttribute(`style`, `display:none`);
            }
            setTimeout(function () {
                if (document.getElementById('f-mfp-iframe').contentWindow.location.href.includes(`/login${pext}`)) {
                    document.getElementsByClassName(`hpe-iframe`)[0].setAttribute(`style`, `opacity:0;`);
                    top.window.location.reload(true);
                }
            }, 3000);
        });

    }

}

var eraseCookie = name => createCookie(name, "", -1);

window.hpe_cancel = function () {
    document.getElementById(`LB_Popup`).classList.add(`hp-sslide2`);
    document.getElementsByClassName(`hpe-iframe`)[0].setAttribute(`style`, `visibility:hidden;opacity:0;`);
    setTimeout(function () {
        document.getElementsByClassName(`LB_Popup_close`)[0].click();
    }, 500);
}

window.hpe_reload = function () {
    document.getElementById(`LB_Popup`).classList.add(`hp-sslide2`);
    document.getElementsByClassName(`hpe-iframe`)[0].setAttribute(`style`, `visibility:hidden;opacity:0;`);
    setTimeout(function () {
        document.getElementsByClassName(`LB_Popup_close`)[0].click();
        window.location = window.location.href;
    }, 500);
}

window.hpe_hide_close = function () {
    document.getElementsByClassName(`LB_Popup_close`)[0].classList.add(`d-none`);
    document.getElementsByClassName(`hpe-iframe`)[0].setAttribute(`data-hide-close`, `yes`);
}

function confirmdelete(msg, url) {
    if (!document.getElementById('f_confirm_delete_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='f_confirm_delete_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_delete' style='display:none;'></button>
            <div class='f_confirm_delete_box modal fade' id='f_confirm_delete' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_deleteLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div class='modal-content'>
                        <div class='modal-header' style='display:none'>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body text-center' style='white-space: pre-wrap;'>${msg}</div>
                        <div class='modal-footer d-flex justify-content-center border-0'>
                            <button type='button' class='f_confirm_delete_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Delete</button>
                            <button type='button' class='f_confirm_delete_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button>
                        </div>
                    </div>
                </div>
                <style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style>
            </div>
        `);
        let lhrx = location.href;
        let lhurlx = new URL(lhrx);
        let wsite = lhurlx.searchParams.get(`site`);
        let wd = `_${wsite.split('.').shift()}`;
        if (wsite.includes(`/`)) {
            wd = `_${wsite.split('.').shift()}_${wsite.split('/').pop()}`;
            wd = wd.replace(/-/g, '_');
        }
        document.getElementById('f_confirm_delete_button').click();
        document.getElementsByClassName('f_confirm_delete_close')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_delete_yes')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
            if (url) {
                createCookie(`hpe_delete2${wd}`, `Yes`);
                OpenLbPopup(`${url}`, `iframe`);
            }
        });
    }
    return false;
}

function confirmdetaildelete(msg, url, index) {

    if (!document.getElementById('f_confirm_delete_button')) {

        // adding text to card
        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='f_confirm_delete_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_delete' style='display:none;'></button>
            <div class='f_confirm_delete_box modal fade' id='f_confirm_delete' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_deleteLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div class='modal-content'>
                        <div class='modal-header' style='display:none'>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body text-center' style='white-space: pre-wrap;'>${msg}</div>
                        <div class='modal-footer d-flex justify-content-center border-0'>
                            <button type='button' class='f_confirm_delete_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Delete</button>
                            <button type='button' class='f_confirm_delete_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button>
                        </div>
                    </div>
                </div>
                <style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style>
            </div>
        `);

        // declaration
        let lhrx = location.href;
        let lhurlx = new URL(lhrx);
        let wsite = lhurlx.searchParams.get(`site`);
        let wd = `_${wsite.split('.').shift()}`;

        // get site
        if (wsite.includes(`/`)) {

            wd = `_${wsite.split('.').shift()}_${wsite.split('/').pop()}`;
            wd = wd.replace(/-/g, '_');

        }

        // auto click close
        document.getElementById('f_confirm_delete_button').click();
        document.getElementsByClassName('f_confirm_delete_close')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
        });

        // clicking on yes to delete
        document.getElementsByClassName('f_confirm_delete_yes')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_delete_button').remove();
            document.getElementsByClassName('f_confirm_delete_box')[0].remove();
            if (url) {
                createCookie(`hpe_detail_deletex${wd}`, index);
                OpenLbPopup(`${url}`, `iframe`);
            }
        });

    }
    return false;

}

function confirmhide(msg, url, index) {
    if (!document.getElementById('f_confirm_hide_button')) {
        document.getElementsByTagName("body")[0].insertAdjacentHTML(`beforeend`, `
            <button id='f_confirm_hide_button' type='button' data-bs-toggle='modal' data-bs-target='#f_confirm_hide' style='display:none;'></button>
            <div class='f_confirm_hide_box modal fade' id='f_confirm_hide' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='f_confirm_hideLabel' aria-hidden='true'>
                <div class='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
                    <div class='modal-content'>
                        <div class='modal-header' style='display:none'>
                            <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                        </div>
                        <div class='modal-body text-center' style='white-space: pre-wrap;'>${msg}</div>
                        <div class='modal-footer d-flex justify-content-center border-0'>
                            <button type='button' class='f_confirm_hide_yes btn btn-danger me-3 py-2 px-4' data-bs-dismiss='modal'>Hide</button>
                            <button type='button' class='f_confirm_hide_close btn btn-dark py-2 px-4' data-bs-dismiss='modal'>Cancel</button>
                        </div>
                    </div>
                </div>
                <style>@media (min-width:576px){.modal-dialog{max-width:400px}}</style>
            </div>
        `);
        let lhrx = location.href;
        let lhurlx = new URL(lhrx);
        let wsite = lhurlx.searchParams.get(`site`);
        let wd = `_${wsite.split('.').shift()}`;
        if (wsite.includes(`/`)) {
            wd = `_${wsite.split('.').shift()}_${wsite.split('/').pop()}`;
            wd = wd.replace(/-/g, '_');
        }
        document.getElementById('f_confirm_hide_button').click();
        document.getElementsByClassName('f_confirm_hide_close')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_hide_button').remove();
            document.getElementsByClassName('f_confirm_hide_box')[0].remove();
        });
        document.getElementsByClassName('f_confirm_hide_yes')[0].addEventListener('click', function () {
            document.getElementById('f_confirm_hide_button').remove();
            document.getElementsByClassName('f_confirm_hide_box')[0].remove();
            if (url) {
                OpenLbPopup(`${url}`, `iframe`);
            }
        });
    }
    return false;
}

function getParam(name) {

    let url = location.href;
    let urlx = new URL(url);
    let pm = urlx.searchParams.get(name);
    if (pm == null) {
        return null;
    }
    return pm;

}


// actual code start
document.addEventListener(`readystatechange`, event => {
    "use strict";

    // editor button in site manager
    if (event.target.readyState === `interactive`) {

        // declaration
        const dx = {
            lh: location.href,
            xlngl: "sp"
        };
        const pext = `.a${dx.xlngl}`;
        const wurlx = new URL(dx.lh);
        const wbsite = wurlx.searchParams.get(`site`);
        const btipx = 'data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom"';

        // check for main page of site manager
        if (stringInURL(`/${lb.res}${pext}`)) {

            // add live builder button
            document.getElementsByClassName(`lb-button`)[0].insertAdjacentHTML(`afterbegin`, `<a class="sm-hp" href="/${lb.he}${pext}?site=${wbsite}">${le} ${liveEditor}</a>`);

            // tooltip
            if (typeof Tipped !== `undefined`) {

                Tipped.create(`.ld-tt`, {
                    ajax: false,
                    closeButton: false,
                    showOn: `mouseover`,
                    skin: `cloud`,
                    fixed: true,
                    target: `mouse`,
                    maxWidth: 500
                });

            }

        }

        // blank page after submiting
        if (stringInURL("/hpe_home") && stringInURL("site=")) {

            // declaration
            const lhurl = new URL(dx.lh);
            const surlw = lhurl.searchParams.get("site");
            let hwd = '_' + surlw.split('.').shift();

            // get domain name
            if (surlw.includes('/')) {

                hwd = '_' + surlw.split('.').shift() + '_' + surlw.split('/').pop();
                hwd = hwd.replace(/-/g, '_');

            }

            // detail page/event
            if (readCookie('hpe_art_detail_url' + hwd) || readCookie('hpe_event_detail_url' + hwd)) {

                let aurl = "";
                if (readCookie('hpe_art_detail_url' + hwd)) {

                    aurl = readCookie('hpe_art_detail_url' + hwd);

                } else if (readCookie('hpe_event_detail_url' + hwd)) {

                    aurl = readCookie('hpe_event_detail_url' + hwd);

                }
                document.getElementsByClassName(`my-form`)[0].innerHTML = `<h3>Please Wait...</h3><style>h3 {position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);color: gray;font-family: Trebuchet MS;}</style>`;
                eraseCookie('hpe_art_detail_url' + hwd);

                // extracting URL using AJAX
                // object declaration
                const xmlhttp = new XMLHttpRequest();
                let ex_url = "";

                // state change check
                xmlhttp.onreadystatechange = function () {

                    if (xmlhttp.readyState == XMLHttpRequest.DONE) {

                        if (xmlhttp.status == 200) {

                            ex_url = xmlhttp.responseText;
                            var lb_m_url = ex_url.substring(ex_url.lastIndexOf("/") + 1, ex_url.length);
                            window.parent.location = `/${lb.he}${pext}?lb=${lb_m_url}&site=${surlw}`;

                        } else if (xmlhttp.status == 400) {

                            console.log('Extract URL: There was an error 400');

                        } else {

                            console.log('Extract URL: something else other than 200 was returned');

                        }

                    }

                };
                xmlhttp.open("GET", aurl, true);
                xmlhttp.send();

            } else if (readCookie('hpe_detail_deletex' + hwd)) { // Detail Delete

                let i = readCookie('hpe_detail_deletex' + hwd);
                eraseCookie('hpe_detail_deletex' + hwd);
                createCookie(`hpe_detail_deletey${hwd}`);
                window.parent.location = `https://${dx.lh.match(/:\/\/(.[^/]+)/)[1]}/${lb.he}${pext}?lb=index${i}.htm&site=${wbsite}`;

            } else {

                window.parent.hpe_reload();

            }

        }

    }

});


$(document).ready(function () {
    "use strict";

    // only accesiable on desktop
    if (window.screen.width > 1024) {

        // add theme
        let leTheme = "Purple";
        if (localStorage.getItem("le_theme")) {
            leTheme = localStorage.getItem("le_theme");
        } else {
            (typeof SMThemeColor == 'function') && (leTheme = SMThemeColor());
        }
        document.querySelector('body').setAttribute('data-theme', leTheme);

        // declarations
        const dx = {
            lh: location.href,
            lx: `list`,
            lngn: `2.a`,
            lngl: `sp`,
            fx: `form`,
            dlx: `delete`
        };
        const pext = `.a${dx.lngl}`;
        const plist = `${dx.lx}${dx.lngn}${dx.lngl}?`;
        const pfist = `${dx.fx}${dx.lngn}${dx.lngl}?`;
        const pdist = `${dx.dlx}${dx.lngn}${dx.lngl}?`;
        const dl1 = '<center>Do you want to delete this';
        const dl2 = '?<br><br>This operation cannot be undone.</center>';
        const fai = `<i class='fa fa-`;
        const fae = `' aria-hidden='true'></i>`;
        const pencil = `${fai}pencil${fae}`;
        const plus = `${fai}plus${fae}`;
        const minus = `${fai}minus${fae}`;
        const trash = `${fai}trash${fae}`;
        const link = `${fai}external-link${fae}`;
        const info = `${fai}info-circle${fae}`;
        const que = `${fai}question-circle${fae}`;
        const ticket = 'lid=SupportTickets&lid2=&level=1&pform=support_tickets&pkeyname=ticket_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=';
        let btip = `data-bs-toggle="tooltip" data-bs-html="true" data-bs-placement="bottom"`;
        btip = ``;
        const ads = 'lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&pkeyname=ar_customers_ads_id&pkey=';
        const article_pages = 'lid=Pages&lid2=&level=1&pform=pages&pkeyname=sys_information_id&pkey=';
        const gallery = 'lid=Galleries&lid2=&level=1&pform=galleries&pkeyname=sys_information_id&pkey=';

        // LiveEditor Start from here
        if (stringInURL(`${lb.he}.`)) {

            document.querySelector(".hpx-label").innerText = liveEditor;
            document.title = liveEditor;
            const lhurlx = new URL(dx.lh);
            const wsite = lhurlx.searchParams.get("site");
            let wd = `_${wsite.split('.').shift()}`;

            // add style DIV 
            document.querySelector("body").insertAdjacentHTML("beforeend", `<div class="lbStyles"></div>`);

            // remove manage link for coifee
            document.querySelector("#cfbodymain") && (document.querySelector(".hpx-manage") && (document.querySelector(".hpx-manage").style.display = "none"));

            // get domain
            if (wsite.includes('/')) {
                wd = `_${wsite.split('.').shift()}_${wsite.split('/').pop()}`;
                wd = wd.replace(/-/g, '_');
            }

            // add theme link on top with event
            const manageLink = document.querySelector(".hpx-manage");
            const themeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-palette-fill me-2" viewBox="0 0 16 16"><path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`;

            if (manageLink) {
                manageLink.insertAdjacentHTML("afterend", `
                    <div class="hpx-homepage hpx-change-theme">
  	                    <div class="hpx-manage-label">${themeIcon} Theme</div>
                        <div class="hpx-manage-submenu hpx-theme-list">
                            <span data-color="Blue"></span>
                            <span data-color="Purple"></span>
                            <span data-color="Red"></span>
                            <span data-color="Black"></span>
                            <span data-color="Green"></span>
                            <span data-color="Brown"></span>
                            <span data-color="Magenta"></span>
                            <span data-color="Olive"></span>
                            <span data-color="Orange"></span>
                            <span data-color="Yellow"></span>                            
                        </div>
                    </div>
                `);
            }
            document.querySelectorAll(".hpx-manage-submenu.hpx-theme-list span").forEach(t => {
                t.addEventListener("click", e => {
                    const themeColor = e.target.getAttribute("data-color");
                    localStorage.setItem("le_theme", themeColor);
                    document.querySelector('body').setAttribute('data-theme', themeColor);
                })
            });


            if (document.querySelector(".hpx-refresh")) {
                document.querySelector(".hpx-refresh").insertAdjacentHTML("afterend", `
                    <div class="hpx-homepage hpx-full-screen">
  	                    <div class="hpx-manage-label">${fullScreenIcon}</div>
                    </div>
                    <div class="hpx-homepage hpx-exit-full-screen d-none">
  	                    <div class="hpx-manage-label">${exitFullScreenIcon}</div>
                    </div>
                `);
            }

            document.querySelector(".hpx-full-screen") && document.querySelector(".hpx-full-screen").addEventListener("click", () => {
                toggleScreen(".hpx-full-screen", ".hpx-exit-full-screen");
                const docElm = document.documentElement;
                if (docElm.mozRequestFullScreen) { // firefox
                    docElm.mozRequestFullScreen();
                } else if (docElm.requestFullscreen) { // chrome
                    docElm.requestFullscreen();
                }
            });

            document.querySelector(".hpx-exit-full-screen") && document.querySelector(".hpx-exit-full-screen").addEventListener("click", () => {
                toggleScreen(".hpx-full-screen", ".hpx-exit-full-screen");
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    /* IE11 */
                    document.msExitFullscreen();
                }
            });

            // Novice Guide
            // document.querySelector(".hpe-logo").classList.add("hp-novice");
            // document.querySelector(".hp-novice").insertAdjacentHTML(`afterbegin`, `
            // <div class="hp-guide-1">
            //     <h3 class="fw-bold text-black">Step: 1</h3>
            //     <p class="text-gray">Mouseover on any area which will highlight the editor with buttons.</p>
            //     <span>Skip</span>
            //     <span class="bg-primary fw-bold">NEXT</span>
            // </div>`);
            // push state

            // session error
            if (readCookie('hpe_session_error' + wd) == 'Yes' && stringInURL("/login")) {

                eraseCookie('hpe_session_error' + wd);
                alert('<p style="color:red;">Your session has expired.</p>');

            }

            // disable back button
            history.pushState(null, document.title, location.href);
            window.addEventListener('popstate', (event) => history.pushState(null, document.title, location.href));

            // remove unwanted cookies
            eraseCookie('hpe_poll_close' + wd);

            // get full domain      
            const dlb = `https://${dx.lh.match(/:\/\/(.[^/]+)/)[1]}/${lb.he}${pext}?lb=`;
            const hlb = `https://${dx.lh.match(/:\/\/(.[^/]+)/)[1]}/${lb.he}${pext}?site=${wsite}`;

            // new tab links
            let hpx = setInterval(function () {

                if (document.querySelectorAll(".hpx-manage-link").length) {

                    document.querySelectorAll(`.hpx-manage-link, .hpx-homepage > a, .hpx-tickets > a`).forEach(x => x.setAttribute(`onclick`, `return ! window.open(this.href);`));
                    clearInterval(hpx);

                }

            }, 1000);

            // home Link 
            document.querySelector(`.hp-homemenu-child .hp-menulink`) && document.querySelector(`.hp-homemenu-child .hp-menulink`).setAttribute(`href`, `/${lb.he}${pext}?site=${wsite}`);


            // get site manager theme
            //(typeof SMThemeColor == 'function') && document.getElementsByClassName('hpx-main')[0].setAttribute('data-theme', SMThemeColor());


            // get ticket
            if (typeof MyTickets == 'function') {

                const mt = MyTickets();
                if (typeof mt !== 'undefined') {

                    document.querySelector(`.hpx-24x7`).innerHTML = `
                    <div class='hpx-24x7' data-ticket='${MyTickets()}'>
                        <i class='fa fa-question-circle' aria-hidden='true'></i> 24x7 Support
                        <bell>
                            <a title='View My Recent Tickets' href='/${plist}lid=SupportTickets&lid2=&level=0&pkeyname=&pkey=&sortflag=&wpage=&hpath=&smid=&x=&site=${wsite}&hpe=Y#hpe_support' onclick='return ! window.open(this.href);'><i class='fa fa-bell' aria-hidden='true'></i></a>
                        </bell>
                    </div>`;

                }

            }

            // LB loader
            document.querySelector(`.hpx-loader`).style.display = `none`;
            document.querySelector(`.hpx-wrapper`).style.animation = `hpx-wrapper-animation 0.4s linear`;
            document.querySelector(`.hpx-wrapper`).style.visibility = `visible`;

            // if deactivated something
            if (readCookie('hpe_success_delete' + wd)) {

                let dms = readCookie('hpe_success_delete' + wd);
                eraseCookie('hpe_success_delete' + wd);
                alert(dms);

            }

            // if deleted something
            if (readCookie('hpe_delete2' + wd)) {

                eraseCookie('hpe_delete2' + wd);
                alert(`Deleted Sucessfully`);

            }

            // if deleted something from detail page
            if (readCookie('hpe_detail_deletey' + wd)) {

                eraseCookie('hpe_detail_deletey' + wd);
                alert(`Deleted Sucessfully`);

            }

            // home menu ID            
            const mp = (typeof MParameters == 'function') ? MParameters() : '';

            // home submenu ID
            const sp = (typeof SParameters == 'function') ? `index${SParameters()}.htm?hp_editor` : '';

            // wrap #Menu with DIV
            document.querySelectorAll(".hpe-in-menu").forEach((m) => {

                m.classList.remove("hpe-in-menu");
                m.outerHTML = `<div class="hpe-in-menu">${m.outerHTML}</div>`;

            });

            // #Poll count
            if (document.querySelectorAll(".polls1body").length == 1) {

                document.getElementsByClassName("polls1body")[0].setAttribute("data-total", "1");

            }

            // #disable Right Click
            document.oncontextmenu = function () {

                alert(`Right Click is not allowed in <b>${liveEditor}</b>`)
                return false;

            };

            // #disable mouse center button
            window.addEventListener("auxclick", (event) => {

                if (event.button === 1) event.preventDefault();

            });

            // change link into editor link 
            document.querySelectorAll(`a`).forEach(a => {

                if (a.getAttribute('href') != null && !a.getAttribute('href').includes('hp_editor')) {
                    a.removeAttribute('target');
                }

            });

            // change link into editor link (5 Times)
            setIntervalLimited(function () {

                document.querySelectorAll(`a`).forEach(a => {
                    if (a.getAttribute('href') != null && !a.getAttribute('href').includes('hp_editor')) {
                        a.removeAttribute('target');
                    }
                });

            }, 500, 5);

            // #poll - add classes
            document.querySelectorAll(".polls1body").forEach(p => p.classList.add(`hpe-poll${p.getAttribute('id').split('poll').pop()}`));

            // #AdGroup class for verticle ads
            setTimeout(function () {

                document.querySelectorAll('.hpe-i-ad').forEach(a => {
                    if (a.nextElementSibling == null || a.nextElementSibling.classList.contains('hp-x') == false) {
                        a.parentElement.classList.add("had-tr");
                    }
                });
                document.querySelectorAll('.had-tr').forEach(h => {
                    if (h.nextElementSibling != null && h.nextElementSibling.classList.contains('had-tr') == true) {
                        h.firstElementChild.classList.add('hp-show-delete');
                    } else if (h.previousElementSibling != null && h.previousElementSibling.classList.contains('had-tr') == true) {
                        h.firstElementChild.classList.add('hp-show-delete');
                    }
                });

            }, 2000);

            // #weather ad
            if (document.querySelector('.hpe-i-ad')) {

                document.querySelectorAll('.hpe-i-ad').forEach(w => {

                    if (w.getAttribute('data-adnum') == '7') { // AdGroup7

                        w.classList.add('hpe-i-weather');
                        w.classList.remove('hpe-i-ad');

                    }

                });

            }

            // old PhotoGallery (1 to 4)
            for (let p = 1; p <= 4; p++) {

                if (document.querySelector('.PhotoGallery' + p) != null && document.querySelector('.PhotoGallery' + p).firstElementChild.innerText.includes('GetPhoto')) {
                    document.querySelector('.PhotoGallery' + p).classList.add('hpe-old-photog');
                }

            }

            // add d-block and w-100 to #MainContent DIV
            if (document.querySelector("#MainContent")) {

                document.querySelector("#MainContent").setAttribute('data-block', 'd-block');
                document.querySelector("#MainContent").style.width = '100%';

            }

            // add form class
            document.querySelector(`#frame1[src*="pform"]`) && document.querySelector(`#frame1[src*="pform"]`).parentElement.classList.add('hpe-formbody')

            // add Service Package class
            document.querySelector(`#frame1[src*="target_service_package${pext}"]`) && document.querySelector(`#frame1[src*="target_service_package${pext}"]`).parentElement.classList.add('hpe-sp');


            // add Old Directory class
            document.querySelector(`#frame1[src*="target_yellowpage${pext}"]`) && document.querySelector(`#frame1[src*="target_yellowpage${pext}"]`).parentElement.classList.add('hpe-old-directory')


            // add Old Classified View class
            document.querySelector(`#frame1[src*="target_classifieds${pext}"]`) && document.querySelector(`#frame1[src*="target_classifieds${pext}"]`).parentElement.classList.add('hpe-old-classified')

            // add Old Properties class
            document.querySelector(`#frame1[src*="target_property${pext}"]`) && document.querySelector(`#frame1[src*="target_property${pext}"]`).parentElement.classList.add('hpe-old-property')

            // add Old Event class 
            if (document.querySelector(`.eventbody`)) {

                document.querySelector(`.eventbody`).classList.add('hpe-old-event');
                document.querySelector(`.eventbody`).style.width = "100%";

            }

            // add new Event class
            if (stringInURL("hp_editor_eventx_detail")) {

                if (document.querySelector('.hpe-article-detail')) {

                    document.querySelector('.hpe-article-detail').classList.add('hpe-event-detail');
                    document.querySelector('.hpe-event-detail').classList.remove('hpe-article-detail');

                }

            }

            // add 'hp-x' class to add hpe-* classes
            document.querySelectorAll('[class*="hpe-"]').forEach(x => {

                x.classList.add('hp-x');
                if (x.firstElementChild != null && x.firstElementChild.classList.contains('hp-y') == false) {

                    x.insertAdjacentHTML('afterbegin', '<div class="hp-y"></div>');

                }

            });

            // Box 'hp-y' width and height (1st time)
            $('.hp-x').each(function () {

                // add Class for box hover effect
                $(this).mouseover(function () {

                    $(this).stop(true, true).removeClass('hp-ppp');

                }).mouseout(function () {

                    $(this).stop(true, true).addClass('hp-ppp');

                });

                if ($(this).css('float') != 'left') {

                    $(this).addClass('hpe-left');

                }

                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');

                if ($(this).height() < 40) {

                    $(this).children('.hp-y').addClass('hp-smallh');

                } else if ($(this).height() > 999) {

                    $(this).children('.hp-y').addClass('hp-longh');

                }
                if ($(this).width() < 32) {

                    $(this).children('.hp-y').addClass('hp-smallw');

                }
                if ($(this).width() > 300 && $(this).height() > 60) {

                    $(this).addClass('hp-show-lable');

                }
                if ($(this).width() < 65) {

                    $(this).addClass('hp-hide-help');

                } else {

                    $(this).removeClass('hp-hide-help');

                }

                // Box Header
                if ($(this).width() >= 140) {

                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');

                    } else if ($(this).height() <= 75) {

                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');

                    } else if ($(this).height() > 75) {

                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');

                    }
                } else if ($(this).height() <= 54) {

                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');

                }
                if (!$(this).siblings('.hp-x').length) {

                    $(this).addClass('hp-hide-delete');

                }
                if ($(this).parent('.had-tr').length) {

                    $(this).addClass('hp-hide-delete');

                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {

                    $(this).removeClass('hp-hide-delete');

                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {

                    $(this).removeClass('hp-hide-delete');

                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {

                    $(this).removeClass('hp-hide-delete');

                }
                $('.hpe-in-menu').removeClass('hp-hide-delete');
                $(this).removeClass('hpe-left');

            });

            // if Parent are not in same order
            $('.hp-parent').each(function () {

                if ($(this).children('.hp-parent-div1').length > 1) {

                    $(this).children('.hp-parent-div1').addClass('hp-parent-hide-delete');
                    $(this).children('.hp-parent-div1').removeClass('hp-hide-delete');

                }

            });

            // Theme
            // if (typeof SMThemeColor == 'function') {

            //     document.querySelector('body').setAttribute('data-theme', SMThemeColor());

            // }

            // LOGO - #logo
            if ($('.hpe-logo').length) {

                $('.hpe-logo').each(function () {

                    $(this).addClass('hp-ppp');
                    let rw = $(this).attr('data-logo-width');
                    let rwt = `Recommended: ${rw}px`;

                    // if logo image
                    if ($(this).children('#logo').children('img').length) {

                        var hlp = 'Upload logo image with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height.';
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {

                            $(this).children('.hp-y').append(`
                            <div class="hp-z">
                                <div class="hp-span">

                                    <a ${btip} title="Edit Logo" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}pform=options_systems&pkeyname=sys_option_system_id&pkey=1&x=&site=${wsite}&smx=Y&hpe=Y#hpe_logo_img','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                    <a ${btip} title="View Homepage" href="${hlb}">${link}<b class="hp-llable">View</b></a>

                                    <a class="hp-help hp-tt" ${btip} href="javascript:void(0);"  title="${hlp}">${info}<b class="hp-llable">Help</b></a>

                                </div>
                                <header class="hp-hheader">Logo</header>
                                <cpanel></cpanel>
                                <rpanel>${rwt}</rpanel>
                            </div>`);

                        }

                        // if logo text
                    } else {

                        var hlp = 'Upload logo image with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height.';
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {

                            $(this).children('.hp-y').append(`                            
                            <div class="hp-z">

                                <div class="hp-span">

                                    <a ${btip} title="Edit Logo" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}pform=options_systems&pkeyname=sys_option_system_id&pkey=1&x=&site=${wsite}&smx=Y&hpe=Y#hpe_logo','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                    <a ${btip} title="View Homepage" href="${hlb}">${link}<b class="hp-llable">View</b></a>

                                    <a class="hp-help hp-tt" ${btip} href="javascript:void(0);" ${btip} title="${hlp}">${info}<b class="hp-llable">Help</b></a>

                                </div>
                                <header class="hp-hheader">Logo</header>
                                <cpanel></cpanel>
                                <rpanel>${rwt}</rpanel>
                            </div>`);

                        }

                    }

                });

            }

            // #Menu
            if ($('.hp-submenu').length) {

                // If there is no submenu, then add "ADD" button
                $('.hp-submenu').each(function () {

                    var mk = $(this).attr('data-menu');
                    if ($(this).children('.hpe-in-submenu').length) {

                        $('.hp-submenu').children('.hpe-in-submenu').each(function () {
                            if ($(this).css('display') == 'none') {
                                $(this).removeClass('hpe-in-submenu');
                            }
                        });

                    }
                    if ($(this).children('.hpe-in-submenu').length == 0) {

                        $(this).addClass('hp-submenux-zero');
                        $(this).prepend(`
                        <submenu>
                            <div class="hpe-on-submenu hp-x">
                                <sub>Add Submenu</sub>
                                <div class="hp-y">
                                    <div class="hp-z">
                                        <div class="hp-span">
                                            <a ${btip} title="Add New Submenu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=&fkeyname=sys_menu_id&fkey=${mk}&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=100#hpe_in_new_submenu','iframe');">${plus}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </submenu>`);

                    }

                });

            }
            if ($('.hp-menu').length) {

                // #Menu Delete Button when there is no submenu
                $('.hp-menu').each(function () {
                    if ($(this).children('.hp-submenux-zero').length) {
                        $(this).children('.hpe-in-menu').addClass('hp-menux-delete');
                    }
                    if ($(this).attr('data-menu') == mp) {
                        $(this).addClass('hp-homemenu');
                        $(this).children('.hpe-in-menu').addClass('hp-homemenu-child');
                        $(this).children('.hpe-in-menu').attr('data-homeurl', sp);
                    }
                });

            }
            if ($('.hpe-menu').length) {

                $('.hpe-menu.hp-x .hp-y').append(`
                <div class="hp-z">
                    <div class="hp-span">
                        <a ${btip} title="Edit Menu & SubMenu" href="javascript:void(0);" onclick="OpenLbPopup('/${plist}lid=Menu&x=&site=${wsite}&smx=Y#hpe_menu','iframe');">${pencil}<b class="hp-llable">Edit</b></a>
                    </div>
                    <div class="hp-span" ${btip} title="Close Menu Editor to view Menu/Submenu Pages" class="hp-close"></div>
                </div>`);

            }
            $('.hp-close').click(function () { // Close Menu Editor
                $(this).parent('.hp-z').parent('.hp-y').remove();
            });
            if ($('.hpe-in-menu').length) { // Editor for specific Menu
                var m = $('.hpe-in-menu').length; // #Menu ORDERING BEGIN
                for (let i = 0; i < m; i++) {
                    $('.hpe-in-menu').eq(i).parent(".hp-menu").attr('data-count', i + 1);
                    if (i + 1 == m) {
                        $('.hpe-in-menu').eq(0).parent(".hp-menu").attr('data-order-prev', 'firstmenu');
                    }
                }
                // menu ordering
                document.querySelectorAll('.hpe-in-menu').forEach(m => {
                    if (m.parentElement.getAttribute('data-order-prev') == 'firstmenu') { // first menu
                        var a = parseFloat(m.parentElement.getAttribute('data-order'));
                        var d = a - 0.0001;
                        m.parentElement.setAttribute('data-order-new', d.toFixed(4));
                    } else {
                        var v = parseInt(m.parentElement.getAttribute('data-count')) - 1;
                        var n = document.querySelector(`.hp-menu[data-count="${v}"]`).getAttribute('data-order');
                        m.parentElement.setAttribute('data-order-prev', n);
                        var a = parseFloat(m.parentElement.getAttribute('data-order'));
                        var b = parseFloat(m.parentElement.getAttribute('data-order-prev'));
                        var c = (a + b) / 2;
                        m.parentElement.setAttribute('data-order-new', c.toFixed(4));
                    }
                });

                $('.hpe-in-menu').each(function () {
                    var mk = $(this).parent(".hp-menu").attr('data-menu');
                    var dl = $(this).parent(".hp-menu").attr('data-link');
                    var mon = $(this).parent(".hp-menu").attr('data-order-new');
                    var dv = $(this).parent(".hp-menu").attr('data-view');
                    if (dl == '#' || dl.includes('javascript:void')) {
                        if ($(this).children('a').length == 2) {
                            $(this).addClass('hp-show-menulink');
                            $(this).children('a').each(function () {
                                if ($(this).attr('href') != '#' || !$(this).attr('href').includes('javascript:void')) {
                                    dl = $(this).attr('href');
                                }
                            });
                            $(this).parent(".hp-menu").attr('data-link', dl);
                        }
                    }
                    if ($(this).parent(".hp-menu").attr('data-link').includes('?twindow=')) { // Replace ? with &
                        $(this).parent(".hp-menu").attr('data-link', $(this).parent(".hp-menu").attr('data-link').replace("?twindow=", "&twindow="));
                    }
                    if ($(this).parent(".hp-menu").attr('data-link').includes('&site=')) { // No need to add "site" paramenter in form links
                        //if ($(this).parent(".hp-menu").attr('data-link').includes('/template-')) { // if Tempalte
                        if ($(this).parent(".hp-menu").attr('data-link').split('/').length > 4) { // if folder                            
                            var dk = dlb + $(this).parent(".hp-menu").attr('data-link').replace(/(?:.*?\/){4}/, '');
                        } else {
                            var dk = dlb + $(this).parent(".hp-menu").attr('data-link').replace(/.*\//, "");
                        }
                    } else {
                        var dk = dlb + $(this).parent(".hp-menu").attr('data-link').replace(/.*\//, "") + '&site=' + wsite;
                    }
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a ${btip} title="Edit Menu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=${mk}&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_in_menu_x','iframe');">${pencil}</a>

                                <a ${btip} title="Add New Menu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&vpx=${dv}&fpx=${mon}#hpe_in_new_menu','iframe');">${plus}</a>

                                <a class="hp-menudelete" ${btip} title="Delete Menu" href="javascript:void(0);" onclick="return confirmdelete('${dl1} Menu and<br>all associated Submenus and Articles${dl2}', '/${pdist}lid=Menu&lid2=&level=0&pform=Menu&dname=Menu&pkeyname=sys_menu_id&pkey=${mk}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}</a>

                                <a class="hp-menulink" ${btip} title="View Menu" href="${dk}">${link}</a>

                            </div>
                        </div>`);
                    }
                    if ($(this).parent(".hp-menu").attr('data-link') == '#' || $(this).parent(".hp-menu").attr('data-link').includes('javascript:void')) { // If there is no link, then disable Menu Link button
                        $('.hp-menulink').css('display', 'none');
                    } else {
                        $(this).addClass('hp-show-menulink');
                    }
                    if ($(this).parent('div').length) {
                        if (!$(this).parent('div').siblings('div').length) {
                            $(this).addClass('hp-hide-delete');
                        }
                    }
                    if ($(this).parent('li').length) {
                        if (!$(this).parent('li').siblings('li').length) {
                            $(this).addClass('hp-hide-delete');
                        }
                    }
                });
                $('.hpe-in-menu').hover(function () {
                    $('.hpe-in-submenu').each(function () {
                        if ($(this).children('.hp-y').length) {
                            if ($(this).css('float') != 'left') {
                                $(this).addClass('hpe-left');
                            }
                            $(this).children('.hp-y').css('width', $(this).outerWidth());
                            $(this).children('.hp-y').css('height', $(this).outerHeight());
                            $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                            $(this).removeClass('hp-show-lable hp-hide-delete');
                            if ($(this).height() < 40) {
                                $(this).children('.hp-y').addClass('hp-smallh');
                            } else if ($(this).height() > 999) {
                                $(this).children('.hp-y').addClass('hp-longh');
                            }
                            if ($(this).width() < 32) {
                                $(this).children('.hp-y').addClass('hp-smallw');
                            }
                            if ($(this).width() > 300 && $(this).height() > 60) {
                                $(this).addClass('hp-show-lable');
                            }
                            if ($(this).width() < 65) {
                                $(this).addClass('hp-hide-help');
                            } else {
                                $(this).removeClass('hp-hide-help');
                            }
                            if ($(this).width() >= 140) { // Box Header
                                if ($(this).height() <= 55) {
                                    $(this).addClass('hp-show-hheader-3');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                                } else if ($(this).height() <= 75) {
                                    $(this).addClass('hp-show-hheader-2');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                                } else if ($(this).height() > 75) {
                                    $(this).addClass('hp-show-hheader-1');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                                }
                            } else if ($(this).height() <= 54) {
                                $(this).addClass('hp-hide-hheader');
                                $(this).removeClass('hp-show-hheader-3 hp-show-hheader-3 hp-show-hheader-1');
                            }
                            if (!$(this).siblings('.hp-x').length) {
                                $(this).addClass('hp-hide-delete');
                            }
                            $(this).removeClass('hpe-left');
                        }
                    });
                });
            }
            if (document.querySelector(`.hp-homemenu-child .hp-menulink`)) { // If home menu, then change home URL
                document.querySelector(`.hp-homemenu-child .hp-menulink`).setAttribute(`href`, `/${lb.he}${pext}?site=${wsite}`);
            }
            if ($('.hpe-in-menu-only').length) { // Editor for specific Menu(Only Name Change)
                $('.hpe-in-menu-only').each(function () {
                    var mk = $(this).attr('data-menu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a ${btip} title="Edit Menu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Menu&pkeyname=sys_menu_id&pkey=${mk}&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_in_menu_only','iframe');">${pencil}</a>
                            </div>
                        </div>`);
                    }
                });
            }
            if ($('.hpe-in-submenu').length) { // Editor for specific SubMenu
                $('.hpe-in-submenu').each(function () { // SubMenu ORDERING BEGIN
                    if ($(this).prev('.hpe-in-submenu').length) {
                        $(this).attr('data-order-prev', $(this).prev('.hpe-in-submenu').attr('data-order'));
                    } else {
                        $(this).attr('data-order-prev', 'firstsubmenu');
                    }
                    if ($(this).attr('data-order-prev') == 'firstsubmenu') { // First Submenu
                        var a = parseFloat($(this).attr('data-order'));
                        var d = a - 0.0001;
                        $(this).attr('data-order-new', d.toFixed(4));
                    } else {
                        var a = parseFloat($(this).attr('data-order'));
                        var b = parseFloat($(this).attr('data-order-prev'));
                        var c = (a + b);
                        var d = c / 2;
                        $(this).attr('data-order-new', d.toFixed(4));
                    }
                }); // SubMenu ORDERING END

                $('.hpe-in-submenu').each(function () {
                    var mk = $(this).attr('data-menu');
                    var sk = $(this).attr('data-submenu');
                    if ($(this).attr('onclick')) {
                        if ($(this).attr('onclick').includes('OpenPopup5(') && $(this).attr('onclick').includes('target_form')) { // Check for Popup Links - Form
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=Form&sname=target_form2" + pext + "&" + $(this).attr("onclick").split("OpenPopup5('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').includes('OpenPopup5(') && $(this).attr('onclick').includes('target_service_package')) { // // Check for Popup Links - Service Package
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=ServicePackage&sname=target_service_package" + pext + "&" + $(this).attr("onclick").split("OpenPopup5('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').includes('OpenPopup5(') && $(this).attr('onclick').includes('target_classifieds')) { // // Check for Popup Links - Classifieds
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=Classifieds&sname=target_classifieds" + pext + "&" + $(this).attr("onclick").split("OpenPopup5('").pop().split("?").pop().split("',").shift());
                        }
                        if ($(this).attr('onclick').includes('OpenPopup5(') && $(this).attr('onclick').includes('target_yellowpage')) { // // Check for Popup Links - YellowPages
                            $(this).attr("data-link", "https://" + wsite + "/index0.htm?twindow=YellowPages&sname=target_yellowpage" + pext + "&" + $(this).attr("onclick").split("OpenPopup5('").pop().split("?").pop().split("',").shift());
                        }
                        $(this).removeAttr('onclick');
                    }
                    if ($(this).attr('data-link').includes('?twindow=')) { // Replace ? with &
                        $(this).attr('data-link', $(this).attr('data-link').replace("?twindow=", "&twindow="));
                    }
                    if ($(this).attr('data-link').includes('&site=')) { // No need to add "site" paramenter in form links
                        if ($(this).attr('data-link').split('/').length > 4) { // if folder 
                            var dk = dlb + $(this).attr('data-link').replace(/(?:.*?\/){4}/, '');
                        } else {
                            var dk = dlb + $(this).attr('data-link').replace(/.*\//, "");
                        }
                    } else {
                        var dk = dlb + $(this).attr('data-link').replace(/.*\//, "") + '&site=' + wsite;
                    }
                    var smon = $(this).attr('data-order-new');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a ${btip} title="Edit Submenu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=${sk}&fkeyname=sys_menu_id&fkey=${mk}&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_in_submenu_x','iframe');">${pencil}</a>

                                <a ${btip} title="Add New Submenu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=&fkeyname=sys_menu_id&fkey=${mk}&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=${smon}#hpe_in_new_submenu','iframe');">${plus}</a>

                                <a class="hp-submenudelete" ${btip} title="Delete Submenu" href="javascript:void(0);" onclick="return confirmdelete('${dl1} Submenu and<br>all associated articles${dl2}', '/${pdist}lid=Menu&lid2=&level=1&pform=Sub-Menu&dname=Menu&pkeyname=sys_menu_sub_id&pkey=${sk}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}</a>

                                <a ${btip} title="View Submenu" href="${dk}">${link}</a>
                            </div>
                        </div>`);
                    }

                });
            }

            if ($('.hpe-in-submenu-only').length) { // Editor for specific SubMenu(Only Name Change)

                $('.hpe-in-submenu-only').each(function () {
                    var mk = $(this).attr('data-menu');
                    var sk = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a ${btip} title="Edit SubMenu" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}lid=Menu&lid2=&level=1&pform=Sub-Menu&pkeyname=sys_menu_sub_id&pkey=${sk}&fkeyname=sys_menu_id&fkey=${mk}&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_in_submenu_only','iframe');">${pencil}</a>
                            </div>
                        </div>`);
                    }
                });

            }

            // #adgroups#      
            // ad counts   
            document.querySelectorAll(`[data-adnum]`).forEach(x => {

                var y = x.getAttribute(`data-adnum`);
                if (document.querySelectorAll(`[data-adnum="${y}"]`).length == 1) {
                    x.setAttribute(`data-total`, `1`);
                }

            });
            document.querySelectorAll(`div[id*="holdd"]`).forEach(h => { // Remove Ad Counts if "SameStopTimeAd" > 1

                var x = h.getAttribute("data-adid");
                var y;
                setTimeout(() => {
                    y = x != h.getAttribute("data-adid") ? "X" : "1";
                    h.setAttribute("data-total", y);
                }, 3500);
                setTimeout(() => {
                    y = x != h.getAttribute("data-adid") ? "X" : "1";
                    h.setAttribute("data-total", y);
                }, 8500);
                setTimeout(() => {
                    y = x != h.getAttribute("data-adid") ? "X" : "1";
                    h.setAttribute("data-total", y);
                }, 13500);

            });

            if ($('.hpe-i-ad').length) { // Specific Ad

                $('.hpe-i-ad').each(function () {

                    let adnum = $(this).attr('data-adnum');
                    let adid = $(this).attr('data-adid');
                    $(this).addClass('hp-ppp');
                    let rw = $('[data-adgroup="' + adnum + '"]').attr('data-ad-width');
                    let rwt = '';
                    if (typeof rw !== "undefined") {
                        rwt = 'Recommended: ' + rw + 'px';
                    }
                    let hlp = 'Upload ad with recommended width showing on bottom right side.<br><b>NOTE:</b> There is no limit for the height';
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {

                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a href="javascript:void(0);" ${btip} title="Edit Ad" onclick="OpenLbPopup('/${pfist}${ads}${adid}&fkeyname=group_id&fkey=${adnum}&wpage=1&hpath=AdGroup${adnum}&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                <a href="javascript:void(0);" ${btip} title="Add New Ad" onclick="OpenLbPopup('/${pfist}${ads}&fkeyname=group_id&fkey=${adnum}&eflag=Yes&wpage=1&hpath=AdGroup${adnum}&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_newadx','iframe');">${plus}<b class="hp-llable">New</b></a>

                                <a href="javascript:void(0);" ${btip} title="Delete Ad" onclick="return confirmdelete('${dl1} Ad${dl2}', '/${pdist}lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=${adid}&wpage=1&hpath=AdGroup${adnum}&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                                <a class="hp-help hp-tt" ${btip} href="javascript:void(0);" ${btip} title="${hlp}">${info}<b class="hp-llable">Help</b></a>

                            </div>
                            <header class="hp-hheader">AdGroup - ${adnum}</header>
                            <cpanel></cpanel>
                            <rpanel>${rwt}</rpanel>
                        </div>`);

                    }

                });

            }

            setIntervalLimited(function () { // For ad Box issue
                $('.hpe-i-ad').each(function () {
                    if ($(this).css('float') != 'left') {
                        $(this).addClass('hpe-left');
                    }
                    $(this).children('.hp-y').css('width', $(this).outerWidth());
                    $(this).children('.hp-y').css('height', $(this).outerHeight());
                    $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                    $(this).removeClass('hp-show-lable hp-hide-delete');
                    if ($(this).height() < 40) {
                        $(this).children('.hp-y').addClass('hp-smallh');
                    } else if ($(this).height() > 999) {
                        $(this).children('.hp-y').addClass('hp-longh');
                    }
                    if ($(this).width() < 32) {
                        $(this).children('.hp-y').addClass('hp-smallw');
                    }
                    if ($(this).width() > 300 && $(this).height() > 60) {
                        $(this).addClass('hp-show-lable');
                    }
                    if ($(this).width() < 65) {
                        $(this).addClass('hp-hide-help');
                    } else {
                        $(this).removeClass('hp-hide-help');
                    }
                    if ($(this).width() >= 140) { // Box Header
                        if ($(this).height() <= 55) {
                            $(this).addClass('hp-show-hheader-3');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                        } else if ($(this).height() <= 75) {
                            $(this).addClass('hp-show-hheader-2');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                        } else if ($(this).height() > 75) {
                            $(this).addClass('hp-show-hheader-1');
                            $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                        }
                    } else if ($(this).height() <= 54) {
                        $(this).addClass('hp-hide-hheader');
                        $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                    }
                    if (!$(this).siblings('.hp-x').length) {
                        $(this).addClass('hp-hide-delete');
                    }
                    $(this).removeClass('hpe-left');
                });
            }, 500, 5);

            // if Ad Type = SameSpotTime or DiffSpotTime
            if (document.querySelector(`[id*="holddiv"]`) || document.querySelector(`div[id*="divDiffSpotTime"]`)) {
                setInterval(function () {
                    if (document.querySelector(`[id*="holddiv"]`)) { // Ad Type = "SameSpotTime"
                        $('[id*="holddiv"]').each(function () {
                            if (!$(this).children('.hp-y').length) {
                                if ($(this).children('a').length) { // A tag available
                                    if ($(this).children('a').children('img').length) {
                                        $(this).attr('data-adid-2', $(this).children('a').children('img').attr('data-title'));
                                    }
                                }
                                if (!$(this).children('a').length) { // A tag not available
                                    if ($(this).children('img').length) {
                                        $(this).attr('data-adid-2', $(this).children('img').attr('data-title'));
                                    }
                                }
                                if ($(this).attr('data-adid-2')) {
                                    var id1 = $(this).attr('data-adid');
                                    var id2 = $(this).attr('data-adid-2');
                                    id2 = id2.split('-').pop().split(')').shift();
                                    if (id1 != id2) {
                                        $(this).attr('data-adid', id2);
                                    }
                                }
                                $(this).prepend('<div class="hp-y"></div>');
                                var adnum = $(this).attr('data-adnum');
                                var adid = $(this).attr('data-adid');
                                if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                                    $(this).children('.hp-y').append(`
                                <div class="hp-z">
                                    <div class="hp-span">

                                        <a href="javascript:void(0);" ${btip} title="Edit Ad" onclick="OpenLbPopup('/${pfist}${ads}${adid}&fkeyname=group_id&fkey=${adnum}&wpage=1&hpath=AdGroup${adnum}&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                        <a href="javascript:void(0);" ${btip} title="Add New Ad" onclick="OpenLbPopup('/${pfist}${ads}&fkeyname=group_id&fkey=${adnum}&eflag=Yes&wpage=1&hpath=AdGroup${adnum}&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_newadx','iframe');">${plus}<b class="hp-llable">New</b></a>

                                        <a href="javascript:void(0);" ${btip} title="Delete Ad" onclick="return confirmdelete('${dl1} Ad${dl2}', '/${pdist}lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=${adid}&wpage=1&hpath=AdGroup${adnum}&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                                    </div>
                                    <header class="hp-hheader">AdGroup - ${adnum}</header>
                                </div>`);
                                }
                            }
                            if ($(this).css('float') != 'left') { // Box width & Height
                                $(this).addClass('hpe-left');
                            }
                            $(this).children('.hp-y').css('width', $(this).outerWidth());
                            $(this).children('.hp-y').css('height', $(this).outerHeight());
                            $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                            $(this).removeClass('hp-show-lable hp-hide-delete');
                            if ($(this).height() < 40) {
                                $(this).children('.hp-y').addClass('hp-smallh');
                            } else if ($(this).height() > 999) {
                                $(this).children('.hp-y').addClass('hp-longh');
                            }
                            if ($(this).width() < 32) {
                                $(this).children('.hp-y').addClass('hp-smallw');
                            }
                            if ($(this).width() > 300 && $(this).height() > 60) {
                                $(this).addClass('hp-show-lable');
                            }
                            if ($(this).width() < 65) {
                                $(this).addClass('hp-hide-help');
                            } else {
                                $(this).removeClass('hp-hide-help');
                            }
                            if ($(this).width() >= 140) { // Box Header
                                if ($(this).height() <= 55) {
                                    $(this).addClass('hp-show-hheader-3');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                                } else if ($(this).height() <= 75) {
                                    $(this).addClass('hp-show-hheader-2');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                                } else if ($(this).height() > 75) {
                                    $(this).addClass('hp-show-hheader-1');
                                    $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                                }
                            } else if ($(this).height() <= 54) {
                                $(this).addClass('hp-hide-hheader');
                                $(this).removeClass('hp-show-hheader-3 hp-show-hheader-3 hp-show-hheader-1');
                            }
                            if (!$(this).siblings('.hp-x').length) {
                                $(this).addClass('hp-hide-delete');
                            }
                            $(this).removeClass('hpe-left');
                        });
                    }
                    if (document.querySelector(`div[id*="divDiffSpotTime"]`)) { // Ad Type = "DiffSpotTime"
                        $('div[id*="divDiffSpotTime"] .hpe-i-ad').addClass('divDiffSpotTime');
                        $('.divDiffSpotTime').each(function () {
                            if (!$(this).attr('class').includes('hp-x')) {
                                $(this).addClass('hp-x');
                                $(this).prepend('<div class="hp-y"></div>');
                                var adnum = $(this).attr('data-adnum');
                                var adid = $(this).attr('data-adid');
                                $(this).addClass('hp-ppp');
                                if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                                    $(this).children('.hp-y').append(`
                                <div class="hp-z">
                                    <div class="hp-span">

                                        <a href="javascript:void(0);" ${btip} title="Edit Ad" onclick="OpenLbPopup('/${pfist}${ads}${adid}&fkeyname=group_id&fkey=${adnum}&wpage=1&hpath=AdGroup${adnum}&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                        <a href="javascript:void(0);" ${btip} title="Add New Ad" onclick="OpenLbPopup('/${pfist}${ads}&fkeyname=group_id&fkey=${adnum}&eflag=Yes&wpage=1&hpath=AdGroup${adnum}&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_newadx','iframe');">${plus}<b class="hp-llable">New</b></a>

                                        <a href="javascript:void(0);" ${btip} title="Delete Ad" onclick="return confirmdelete('${dl1} Ad${dl2}', '/${pdist}lid=CustomersAdsGroups&lid2=&level=1&pform=customers_ads&dname=CustomersAds&pkeyname=ar_customers_ads_id&pkey=${adid}&wpage=1&hpath=AdGroup${adnum}&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                                    </div>
                                    <header class="hp-hheader">AdGroup - ${adnum}</header>
                                </div>`);
                                }
                                if (!$(this).siblings('.hp-x').length) {
                                    $(this).parent('tr').addClass('had-tr');
                                }
                                if ($(this).css('float') != 'left') { // Box width & Height
                                    $(this).addClass('hpe-left');
                                }
                                $(this).children('.hp-y').css('width', $(this).outerWidth());
                                $(this).children('.hp-y').css('height', $(this).outerHeight());
                                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                                $(this).removeClass('hp-show-lable hp-hide-delete');
                                if ($(this).height() < 40) {
                                    $(this).children('.hp-y').addClass('hp-smallh');
                                } else if ($(this).height() > 999) {
                                    $(this).children('.hp-y').addClass('hp-longh');
                                }
                                if ($(this).width() < 32) {
                                    $(this).children('.hp-y').addClass('hp-smallw');
                                }
                                if ($(this).width() > 300 && $(this).height() > 60) {
                                    $(this).addClass('hp-show-lable');
                                }
                                if ($(this).width() < 65) {
                                    $(this).addClass('hp-hide-help');
                                } else {
                                    $(this).removeClass('hp-hide-help');
                                }
                                if ($(this).width() >= 140) { // Box Header
                                    if ($(this).height() <= 55) {
                                        $(this).addClass('hp-show-hheader-3');
                                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                                    } else if ($(this).height() <= 75) {
                                        $(this).addClass('hp-show-hheader-2');
                                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                                    } else if ($(this).height() > 75) {
                                        $(this).addClass('hp-show-hheader-1');
                                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                                    }
                                } else if ($(this).height() <= 54) {
                                    $(this).addClass('hp-hide-hheader');
                                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                                }
                                if (!$(this).siblings('.hp-x').length) {
                                    $(this).addClass('hp-hide-delete');
                                }
                                $(this).removeClass('hpe-left');
                            }
                        });
                    }
                    document.querySelectorAll('.had-tr').forEach(h => {
                        if (h.nextElementSibling != null && h.nextElementSibling.classList.contains('had-tr') == true) {
                            h.firstElementChild.classList.add('hp-show-delete');
                        } else if (h.previousElementSibling != null && h.previousElementSibling.classList.contains('had-tr') == true) {
                            h.firstElementChild.classList.add('hp-show-delete');
                        }
                    });
                }, 1500);
            }

            // Poll
            for (let px = 1; px <= 100; px++) {

                if ($('.hpe-poll' + px).length) {

                    let pl = 'lid=Polls&lid2=&level=0&pform=polls&pkeyname=sys_poll_id&pkey=';
                    let hlp = 'To delete this last poll and wish to add a new poll, add a new poll then delete sample poll. If you wish to remove the poll completely, please create a support ticket. ';
                    $('.polls1body[class*="hpe-poll' + px + ' hp-x"]').addClass('hp-ppp');

                    // adding buttons
                    $('.polls1body[class*="hpe-poll' + px + ' hp-x"] .hp-y').append(`
                    <div class="hp-z">
                        <div class="hp-span">

                            <a ${btip} title="Edit Poll" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}${pl}${px}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_update_pollxy','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                            <a ${btip} title="Add New Poll" href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}${pl}&fkeyname=&fkey=&eflag=Yes&wpage=&hpath=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_new_polls','iframe');">${plus}<b class="hp-llable">New</b></a>

                            <a ${btip} title="Delete Poll" href="javascript:void(0);" onclick="return confirmdelete('${dl1} Poll${dl2}', '/${pdist}lid=Polls&lid2=&level=0&pform=polls&dname=Polls&pkeyname=sys_poll_id&pkey=${px}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                            <a class="hp-help hp-tt hp-poll-help" ${btip} href="javascript:void(0);" title="${hlp}">${info}<b class="hp-llable">Help</b></a>

                        </div>
                        <header class="hp-hheader">Poll</header>
                    </div>`);

                }

            }

            // Highlights
            for (let h = 1; h <= 20; h++) {

                if ($('.hpe-in-hl' + h).length) { // Specific Article

                    $('.hpe-in-hl' + h).each(function () {

                        let haid = $(this).attr('data-article');
                        let isdate = $(this).attr('data-date');
                        let durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                        let dh = '<center>Do you want to Hide current Article from<br><b>Highlight - ' + h + '</b>?</center>';
                        $(this).addClass('hp-ppp');

                        // adding buttons
                        if ($(this).children('.hp-y').children('.hp-z').length == 0) {

                            $(this).children('.hp-y').append(`
                            <div class="hp-z">
                                <div class="hp-span">

                                    <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=hlx${h}&x=&site=${wsite}&smx=Y&hln=${h}&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                    <a href="javascript:void(0);" ${btip} title="Add New Article" onclick="OpenLbPopup('/${pfist}${article_pages}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hln=${h}&hpe=Y&isdate=${isdate}#hpe_hlx${h}','iframe');">${plus}<b class="hp-llable">New</b></a>

                                    <a href="javascript:void(0);" ${btip} title="Hide Article from Highlight - ${h}" onclick="return confirmhide('${dh}', '/${pfist}${article_pages}${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_hldx${h}');">${minus}<b class="hp-llable">Hide</b></a>

                                    <a href="javascript:void(0);" ${btip} title="Delete Article" onclick="return confirmdelete('${dl1} Article${dl2}', '/${pdist}lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=${haid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>
                                    
                                    <a ${btip} title="View Article" href="${durl}">${link}<b class="hp-llable">View</b></a>

                                </div>
                                <header class="hp-hheader">Highlight - ${h}</header>
                            </div>`);

                        }

                    });

                }

            }

            // Previews - on Homepage withot "View"
            if ($('.hpe-in-prev-heading-body').length) { // Specific Article
                $('.hpe-in-prev-heading-body').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=preview&fields=heading_body#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                <a href="javascript:void(0);" ${btip} title="Add New Article" onclick="OpenLbPopup('/${pfist}${article_pages}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&fields=heading_body&smx=Y&hpe=Y&isdate=${isdate}#hpe_prevxy$$${m}&&${s}','iframe');">${plus}<b class="hp-llable">New</b></a>

                                <a href="javascript:void(0);" ${btip} title="Delete Article" onclick="return confirmdelete('${dl1} Article${dl2}', '/${pdist}lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=${haid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>                                

                            </div>
                            <header class="hp-hheader">${$(this).attr("data-submenu")}</header>
                        </div>`);
                    }
                });
            }


            // Previews
            if ($('.hpe-in-prev').length) { // Specific Article
                $('.hpe-in-prev').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=preview#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                <a href="javascript:void(0);" ${btip} title="Add New Article" onclick="OpenLbPopup('/${pfist}${article_pages}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&isdate=${isdate}#hpe_prevxy$$${m}&&${s}','iframe');">${plus}<b class="hp-llable">New</b></a>

                                <a href="javascript:void(0);" ${btip} title="Delete Article" onclick="return confirmdelete('${dl1} Article${dl2}', '/${pdist}lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=${haid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                                <a ${btip} title="View Article" href="${durl}">${link}<b class="hp-llable">View</b></a>

                            </div>
                            <header class="hp-hheader">Preview - ${$(this).attr("data-submenu")}</header>
                        </div>`);
                    }
                });
            }

            // Previews (Highlight Excluded)
            if ($('.hpe-in-xprev').length) { // Specific Article
                $('.hpe-in-xprev').each(function () {
                    let m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    let s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    let haid = $(this).attr('data-article');
                    let isdate = $(this).attr('data-date');
                    let durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=preview#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>
                                
                                <a href="javascript:void(0);" ${btip} title="Add New Article" onclick="OpenLbPopup('/${pfist}${article_pages}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&isdate=${isdate}#hpe_xprevxy$$${m}&&${s}','iframe');">${plus}<b class="hp-llable">New</b></a>
                                
                                <a href="javascript:void(0);" ${btip} title="Delete Article" onclick="return confirmdelete('${dl1} Article${dl2}', '/${pdist}lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=${haid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>
                                
                                <a ${btip} title="View Article" href="${durl}">${link}<b class="hp-llable">View</b></a>
                            </div>
                            <header class="hp-hheader">Preview - ${$(this).attr("data-submenu")}</header>
                        </div>`);
                    }
                });
            }

            // Sections
            if ($('.hpe-in-section').length) { // Specific Article
                $('.hpe-in-section').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Article" onclick="OpenLbPopup(\'/' + pfist + article_pages + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=section#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Article" onclick="OpenLbPopup(\'/' + pfist + article_pages + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=section&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a><a ' + btip + ' title="View Article" href="' + durl + '">' + link + '<b class="hp-llable">View</b></a></div></div>');
                    }
                });

            }
            // E-Editon or Archive #EEE
            if ($('.hpe-in-edition').length) { // Specific Article
                $('.hpe-in-edition').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    //var durl =  dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Edition" onclick="OpenLbPopup(\'/' + pfist + article_pages + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=edition#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Edition" onclick="OpenLbPopup(\'/' + pfist + article_pages + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=edition&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Edition" onclick="return confirmdelete(\'' + dl1 + ' E-Edition' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=1&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }

            // Single Article on Homepage without "View"
            if ($('.hpe-article-only-heading-body-image').length) {
                $('.hpe-article-only-heading-body-image').each(function () {
                    var daid = $(this).attr('data-article');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${daid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fields=heading_body_picture#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>                                
                            </div>
                        </div>`);
                    }
                });
            }

            // Single Article on Homepage without "View" - no body
            if ($('.hpe-article-only-heading-image').length) {
                $('.hpe-article-only-heading-image').each(function () {
                    var daid = $(this).attr('data-article');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${daid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fields=heading_body_picture_nobody#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>                                
                            </div>
                        </div>`);
                    }
                });
            }

            // Single Article on Homepage
            if ($('.hpe-article-only').length) {
                $('.hpe-article-only').each(function () {
                    var daid = $(this).attr('data-article');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${daid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>
                                <a ${btip} title="View Article" href="${durl}">${link}<b class="hp-llable">View</b></a>
                            </div>
                        </div>`);
                    }
                });
            }


            // Details page Article
            if ($('.hpe-article-detail').length) {
                $('.hpe-article-detail').each(function () {
                    var daid = $(this).attr('data-detailid');
                    var sbid = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">
                                <a href="javascript:void(0);" ${btip} title="Edit Article" onclick="OpenLbPopup('/${pfist}${article_pages}${daid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=art_detail#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>
                                
                                <a href="javascript:void(0);" class="detail_delete" ${btip} title="Delete Article" onclick="return confirmdetaildelete('${dl1} Article${dl2}', '/${pdist}lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=${daid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y', '${sbid}');">${trash}<b class="hp-llable">Delete</b></a>
                            </div>
                        </div>`);
                    }
                });
            }

            // Details page Event
            if ($('.hpe-event-detail').length) {
                $('.hpe-event-detail').each(function () {
                    var daid = $(this).attr('data-detailid');
                    var sbid = $(this).attr('data-submenu');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a href="javascript:void(0);" ${btip} title="Edit Event" onclick="OpenLbPopup('/${pfist}lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=${daid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&fpx=event_detail#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                <a href="javascript:void(0);" class="detail_delete" ${btip} title="Delete Article" onclick="return confirmdetaildelete('${dl1} Event${dl2}', '/${pdist}lid=Events2&lid2=&level=0&pform=events2&dname=Events2&pkeyname=sys_information_id&pkey=${daid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y', '${sbid}');">${trash}<b class="hp-llable">Delete</b></a>

                            </div>
                        </div>`);
                    }
                });
            }
            // Events (New)
            if ($('.hpe-in-event').length) {
                $('.hpe-in-event.hp-x').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var eurl = `${dlb}${$(this).attr('data-url').replace(/.*\//, "")}&hp_editor_eventx_detail=&site=${wsite}`;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append(`
                        <div class="hp-z">
                            <div class="hp-span">

                                <a href="javascript:void(0);" ${btip} title="Edit Event" onclick="OpenLbPopup('/${pfist}lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=${haid}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=event&x=&site=${wsite}&smx=Y&hpe=Y#hpe_updatex','iframe');">${pencil}<b class="hp-llable">Edit</b></a>

                                <a href="javascript:void(0);" ${btip} title="Add New Event" onclick="OpenLbPopup('/${pfist}lid=Events2&lid2=&level=1&pform=events2&pkeyname=sys_information_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y&isdate=${isdate}#hpe_eventxy$$${m}&&${s}','iframe');">${plus}<b class="hp-llable">New</b></a>

                                <a href="javascript:void(0);" ${btip} title="Delete Event" onclick="return confirmdelete('${dl1} Event${dl2}', '/${pdist}lid=Events2&lid2=&level=0&pform=events2&dname=Events2&pkeyname=sys_information_id&pkey=${haid}&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&hpe=Y');">${trash}<b class="hp-llable">Delete</b></a>

                                <a ${btip} title="View Event" href="${eurl}">${link}<b class="hp-llable">View</b></a>

                            </div>
                            <header class="hp-hheader">Event - ${$(this).attr("data-submenu")}</header>
                        </div>`);
                    }
                });
            }

            // Product
            if ($('.hpe-in-product').length) {
                $('.hpe-in-product.hp-x').each(function () {
                    var mc = $(this).attr('data-category').replace(/'/g, "@@").replace(/ /g, "_").replace(/&/g, "A_M_P");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-product');
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Product" onclick="OpenLbPopup(\'/' + pfist + 'lid=Products&lid2=&level=0&pform=products&pkeyname=sys_product_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=product&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Product" onclick="OpenLbPopup(\'/' + pfist + 'lid=Products&lid2=&level=0&pform=products&pkeyname=sys_product_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpc=' + mc + '#hpe_productxy$$&&' + s + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Product" onclick="return confirmdelete(\'' + dl1 + ' Product' + dl2 + '\', \'/' + pdist + 'lid=Products&lid2=&level=0&pform=products&dname=Products&pkeyname=sys_product_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div><header class="hp-hheader">Product - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            if ($('.hpe-in-product-category').length) { // Codes icon
                $('.hpe-in-product-category.hp-x').each(function () {
                    var dcid = $(this).attr('data-category-id');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + 'lid=Codes&lid2=&level=0&pform=codes&pkeyname=code_id&pkey=' + dcid + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=codes#hpe_updatex\',\'iframe\');">' + pencil + '</a></div></div>');
                    }
                });
            }

            // Directory (New)
            if ($('.hpe-in-directory').length) {
                $('.hpe-in-directory.hp-x').each(function () {
                    var mc = $(this).attr('data-category').replace(/'/g, "@@").replace(/ /g, "_").replace(/&/g, "A_M_P");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-id');
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Directory" onclick="OpenLbPopup(\'/' + pfist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&pkeyname=customer_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&fpx=directory&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Directory" onclick="OpenLbPopup(\'/' + pfist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&pkeyname=customer_id&pkey=&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpc=' + mc + '#hpe_directoryxy$$&&' + s + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Directory" onclick="return confirmdelete(\'' + dl1 + ' Directory' + dl2 + '\', \'/' + pdist + 'lid=CustomersSetup&lid2=&level=0&pform=customers&dname=Customers&pkeyname=customer_id&pkey=' + haid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div><header class="hp-hheader">Directory - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            if ($('.hpe-in-directory-category').length) { // Codes icon
                $('.hpe-in-directory-category.hp-x').each(function () {
                    var dcid = $(this).attr('data-category-id');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + 'lid=Codes&lid2=&level=0&pform=codes&pkeyname=code_id&pkey=' + dcid + '&fkeyname=&fkey=&wpage=&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=codes#hpe_updatex\',\'iframe\');">' + pencil + '</a></div></div>');
                    }
                });
            }
            if ($('.hpe-in-directory-list').length) { // View Directroy Page 2
                $('.hpe-in-directory-list.hp-x').each(function () {
                    var dlink = dlb + $(this).attr('data-link').replace(/.*\//, "") + '&site=' + wsite;
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a ' + btip + ' title="View Directory Listings" href="' + dlink + '">' + link + '</a></div></div>');
                    }
                });
            }

            // only 'edit' button
            const hp_edit_array = [
                ['Classifieds', 'Classified', 'hpe-old-classified'],
                ['Properties', 'Property', 'hpe-old-property'],
                ['CustomersSetup', 'Directory', 'hpe-old-directory'],
                ['Events', 'Events', 'hpe-old-event'],
                ['PhotoGallery', 'Photos', 'hpe-old-photog']
            ];
            for (let i = 0; i < hp_edit_array.length; i++) {
                var h_lid = hp_edit_array[i][0];
                var h_edit = hp_edit_array[i][1];
                var h_class = hp_edit_array[i][2];
                if (document.querySelector(`.${h_class}`)) {
                    document.querySelectorAll(`.${h_class}`).forEach(h => {
                        if (h.children[0] && h.children[0].children.length == 0) {
                            h.children[0].insertAdjacentHTML(`afterbegin`, `
                            <div class="hp-z">
                                <div class="hp-span">
                                    <a href="javascript:void(0);" onclick="OpenLbPopup('/${plist}lid=${h_lid}&x=&site=${wsite}&hpe=Y','iframe');">${pencil} Edit ${h_edit} </a>
                                </div>
                            </div>`);
                        }
                    })
                }
            }

            // Videos - Gallery - YT(URL)
            if ($('.hpe-in-video-g-yt-url').length) { // Specific Video
                $('.hpe-in-video-g-yt-url').each(function () {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Video" onclick="OpenLbPopup(\'/' + pfist + gallery + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_url#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Video" onclick="OpenLbPopup(\'/' + pfist + gallery + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_urlxy$$' + vm + '&&' + vs + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Videos - Gallery - YT(Code)
            if ($('.hpe-in-video-g-yt-code').length) { // Specific Video
                $('.hpe-in-video-g-yt-code').each(function () {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Video" onclick="OpenLbPopup(\'/' + pfist + gallery + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_code#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Video" onclick="OpenLbPopup(\'/' + pfist + gallery + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_codexy$$' + vm + '&&' + vs + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Videos - Gallery - YT(ID)
            if ($('.hpe-in-video-g-yt-id').length) { // Specific Video
                $('.hpe-in-video-g-yt-id').each(function () {
                    var vm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var vs = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hvid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Video" onclick="OpenLbPopup(\'/' + pfist + gallery + hvid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_video_g_yt_id#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Video" onclick="OpenLbPopup(\'/' + pfist + gallery + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_video_g_yt_idxy$$' + vm + '&&' + vs + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Video" onclick="return confirmdelete(\'' + dl1 + ' Video' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hvid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div><header class="hp-hheader">VideoGallery - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }
            // Photo - Gallery
            if ($('.hpe-in-photo-g').length) { // Specific Photo
                $('.hpe-in-photo-g').each(function () {
                    var pm = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var ps = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var hpid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Photo" onclick="OpenLbPopup(\'/' + pfist + gallery + hpid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=hpe_photo#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Photo" onclick="OpenLbPopup(\'/' + pfist + gallery + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&isdate=' + isdate + '#hpe_photo_gxy$$' + pm + '&&' + ps + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Photo" onclick="return confirmdelete(\'' + dl1 + ' Photo' + dl2 + '\', \'/' + pdist + 'lid=Galleries&lid2=&level=0&pform=galleries&dname=Galleries&pkeyname=sys_information_id&pkey=' + hpid + '&wpage=1&hpath=&sflag=&sortflag=&fa=&dflag=Y&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y\');">' + trash + '<b class="hp-llable">Delete</b></a></div></div>');
                    }
                });
            }

            // ArticleGroup
            if ($('.hpe-in-artgroup').length) {
                $('.hpe-in-artgroup').each(function () {
                    var m = $(this).attr('data-menu').replace(/'/g, "@@").replace(/ /g, "_");
                    var s = $(this).attr('data-submenu').replace(/'/g, "@@").replace(/ /g, "_");
                    var haid = $(this).attr('data-article');
                    var isdate = $(this).attr('data-date');
                    var durl = dlb + $(this).attr('data-url').replace(/.*\//, "") + '&site=' + wsite;
                    $(this).addClass('hp-ppp');
                    if ($(this).children('.hp-y').children('.hp-z').length == 0) {
                        $(this).children('.hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" ' + btip + ' title="Edit Article" onclick="OpenLbPopup(\'/' + pfist + article_pages + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=preview#hpe_updatex\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a><a href="javascript:void(0);" ' + btip + ' title="Add New Article" onclick="OpenLbPopup(\'/' + pfist + article_pages + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y&fpx=artgroup&isdate=' + isdate + '#hpe_prevxy$$' + m + '&&' + s + '\',\'iframe\');">' + plus + '<b class="hp-llable">New</b></a><a href="javascript:void(0);" ' + btip + ' title="Delete Article" onclick="return confirmdelete(\'' + dl1 + ' Article' + dl2 + '\', \'/' + pdist + 'lid=Pages&lid2=&level=0&pform=pages&dname=Pages&pkeyname=sys_information_id&pkey=' + haid + '&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=' + wsite + '&smx=Y&hpe=Y#hpe_deletex\');">' + trash + '<b class="hp-llable">Delete</b></a><a ' + btip + ' title="View Article" href="' + durl + '">' + link + '<b class="hp-llable">View</b></a></div><header class="hp-hheader">ArticleGroup - ' + $(this).attr("data-submenu") + '</header></div>');
                    }
                });
            }

            // Hitcounter
            if ($('.hpe-hitcounter').length) {
                $('.hpe-hitcounter.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + 'pform=options_systems&pkeyname=sys_option_system_id&pkey=1&smx=Y&x=&site=' + wsite + '&hpe=Y#hpe_hitcounter\',\'iframe\');" ' + btip + ' title="Edit Hit Counter">' + pencil + '<b class="hp-llable">Edit</b></a></div><header class="hp-hheader">Hit Counter</header></div>');
            }

            // Social
            if ($('.hpe-social').length) {
                $('.hpe-social').addClass('hp-ppp');
                var hlp = "Click on 'EDIT' button/icon and provide us social media links.<br>We will update it within few minutes."
                $('.hpe-social.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_social\',\'iframe\');" ' + btip + ' title="Edit Social Media Links">' + pencil + '<b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + hlp + '">' + info + '<b class="hp-llable">Help</b></a></div><header class="hp-hheader">Social Links</header></div>');
            }

            // Google Map
            if ($('.hpe-map').length) {
                $('.hpe-map').addClass('hp-ppp');
                var hlp = "Click on 'EDIT' button/icon and provide us your address.<br>We will update it within few minutes."
                $('.hpe-map.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_map\',\'iframe\');" ' + btip + ' title="Edit Address">' + pencil + '<b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + hlp + '">' + info + '<b class="hp-llable">Help</b></a></div><header class="hp-hheader">Map</header></div>');
            }

            // Bottom Links
            if ($('.hpe-bottom-links').length) {
                $('.hpe-bottom-links').addClass('hp-ppp');
                var hlp = "You can write us to add/update/delete links.";
                $('.hpe-bottom-links.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_bottom_links\',\'iframe\');" ' + btip + ' title="Edit Links">' + pencil + '<b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + hlp + '">' + info + '<b class="hp-llable">Help</b></a></div><header class="hp-hheader">Bottom Links</header></div>');
            }

            // Top Links
            if ($('.hpe-top-links').length) {
                $('.hpe-top-links').addClass('hp-ppp');
                var hlp = "You can write us to add/update/delete links.";
                $('.hpe-top-links.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_top_links\',\'iframe\');" ' + btip + ' title="Edit Links">' + pencil + '<b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + hlp + '">' + info + '<b class="hp-llable">Help</b></a></div><header class="hp-hheader">Top Links</header></div>');
            }

            // Google Custom Search
            if ($('.hpe-gsearch').length) {
                $('.hpe-gsearch').addClass('hp-ppp');
                let hlp = "Please write us if it will not show results from your site.";
                $('.hpe-gsearch.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_gsearch\',\'iframe\');" ' + btip + ' title="Any issues with Search?">' + pencil + '<b class="hp-llable">Edit</b></a><a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + hlp + '">' + info + '<b class="hp-llable">Help</b></a></div><header class="hp-hheader">Search Bar</header></div>');
            }

            // Forms
            if (document.querySelector(".hpe-formbody")) {
                let fn = (getParam('pform') && getParam('pform').replace(/[{}]/g, "")) ?? document.querySelector(".hpe-formbody").getAttribute("data-form");
                $('.hpe-formbody.hp-x .hp-y').append(`
                <div class="hp-z">
                    <div class="hp-span">
                        <a href="javascript:void(0);" onclick="OpenLbPopup('/${pfist}${ticket}${wsite}&fpx=${fn}&smx=Y&hpe=Y#hpe_formbodys','iframe');">${pencil}<b class="hp-llable">Edit Form</b></a>                        
                    </div>
                </div>`);
            }

            // Service Package
            if ($('.hpe-sp').length) {
                $('.hpe-sp.hp-x .hp-y').append('<div class="hp-z"><div class="hp-span"><a href="javascript:void(0);" onclick="OpenLbPopup(\'/' + pfist + ticket + wsite + '&smx=Y&hpe=Y#hpe_spackages\',\'iframe\');">' + pencil + '<b class="hp-llable">Edit</b></a></div></div>');
            }

            // Custom Sections            
            // TEXT
            document.querySelectorAll(`[class*="hpe-custom-text-"]`).forEach((cus) => {
                const key = cus.children[1].innerText.split("()")[0].split("Section")[1];
                cus.children[0].insertAdjacentHTML(`afterbegin`, `<div class="hp-z"><div class="hp-span"><a ${btip} title="Edit" href="javascript:void(0);" onclick="OpenLbPopup(\'/${pfist}lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=${key}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&fpx=cust_text&hpe=Y#hpe_updatex\',\'iframe\');">${pencil}<b class="hp-llable">Edit</b></a></div></div>`);
            });

            // HTML
            document.querySelectorAll(`[class*="hpe-custom-html-"]`).forEach((cus) => {
                const key = cus.children[1].innerText.split("()")[0].split("Section")[1];
                cus.children[0].insertAdjacentHTML(`afterbegin`, `<div class="hp-z"><div class="hp-span"><a ${btip} title="Edit" href="javascript:void(0);" onclick="OpenLbPopup(\'/${pfist}lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=${key}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&fpx=cust_html&hpe=Y#hpe_updatex\',\'iframe\');">${pencil}<b class="hp-llable">Edit</b></a></div></div>`);
            });

            // Image
            document.querySelectorAll(`[class*="hpe-custom-img-"]`).forEach((cus) => {
                const key = cus.children[1].innerText.split("()")[0].split("Section")[1];
                cus.children[0].insertAdjacentHTML(`afterbegin`, `<div class="hp-z"><div class="hp-span"><a ${btip} title="Edit" href="javascript:void(0);" onclick="OpenLbPopup(\'/${pfist}lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=${key}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&fpx=cust_img&hpe=Y#hpe_updatex\',\'iframe\');">${pencil}<b class="hp-llable">Edit</b></a></div></div>`);
            });

            // Weather Widget
            document.querySelectorAll(`[class*="hpe-custom-img-"]`).forEach((cus) => {
                const key = cus.children[1].innerText.split("()")[0].split("Section")[1];
                const hlp = 'Provide us weather location and we will update it for you.';
                cus.children[0].insertAdjacentHTML(`afterbegin`, `
                    <div class="hp-z">
                        <div class="hp-span">
                            <a ${btip} title="Edit" href="javascript:void(0);" onclick="OpenLbPopup(\'/${pfist}lid=Sections&lid2=&level=1&pform=sections&pkeyname=section_id&pkey=${key}&fkeyname=&fkey=&wpage=1&hpath=&eflag=Yes&fa=&sflag=&sortflag=&smid=&u=&c=&lf=&x=&site=${wsite}&smx=Y&fpx=weather&hpe=Y#hpe_updatex\',\'iframe\');">${pencil}<b class="hp-llable">Edit</b></a>
                            <a class="hp-help hp-tt" ${btip} href="javascript:void(0);" ${btip} title="${hlp}">${info}<b class="hp-llable">Help</b></a>
                        </div>
                        <header class="hp-hheader">Weather</header>                        
                    </div>`);
            });


            // Box width and Height (2nd time)
            $('.hp-x').each(function () {
                $(this).mouseover(function () {
                    $(this).stop(true, true).removeClass('hp-ppp');
                }).mouseout(function () {
                    $(this).stop(true, true).addClass('hp-ppp');
                });
                if ($(this).css('float') != 'left') {
                    $(this).addClass('hpe-left');
                }
                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');
                if ($(this).height() < 40) {
                    $(this).children('.hp-y').addClass('hp-smallh');
                } else if ($(this).height() > 999) {
                    $(this).children('.hp-y').addClass('hp-longh');
                }
                if ($(this).width() < 32) {
                    $(this).children('.hp-y').addClass('hp-smallw');
                }
                if ($(this).width() > 300 && $(this).height() > 60) {
                    $(this).addClass('hp-show-lable');
                }
                if ($(this).width() < 65) {
                    $(this).addClass('hp-hide-help');
                } else {
                    $(this).removeClass('hp-hide-help');
                }
                if ($(this).width() >= 140) { // Box Header
                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                    } else if ($(this).height() <= 75) {
                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                    } else if ($(this).height() > 75) {
                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                    }
                } else if ($(this).height() <= 54) {
                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                }
                if (!$(this).siblings('.hp-x').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.had-tr').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                $('.hpe-in-menu').removeClass('hp-hide-delete');
                $(this).removeClass('hpe-left');
            });

        }

        // ToolTip - Slider
        var shlp = "Drag the slider left to right side by holding the mouse to see next article.";
        var shlp_up = "Drag the slider up to down side by holding the mouse to see next article.";
        $('.hp-slide .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + shlp + '">' + info + '<b class="hp-llable">Help</b></a>');
        $('.hp-slide-left .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + shlp + '">' + info + '<b class="hp-llable">Help</b></a>');
        $('.hp-slide-up .hp-x .hp-y .hp-z .hp-span').append('<a class="hp-help hp-tt" ' + btip + ' href="javascript:void(0);" ' + btip + ' title="' + shlp_up + '">' + info + '<b class="hp-llable">Help</b></a>');

        // Tooltip on help button
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        });
        if (typeof Tipped !== "undefined") {
            Tipped.create('.hp-tt', {
                ajax: false,
                closeButton: false,
                showOn: 'click',
                skin: 'cloud',
                fixed: true,
                target: 'mouse',
                maxWidth: 500
            });
        }

        // Get Current Ad width & Height
        $('.hpe-i-ad').each(function () {
            var agi = $(this).attr('data-adnum');
            if ($(this).children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('a').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('a').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('a').children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('span').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('span').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('span').children('.custom_adgroup_' + agi).height());
            }
            if ($(this).children('span').children('a').children('.custom_adgroup_' + agi).length) {
                $(this).attr('data-cad-width', $(this).children('span').children('a').children('.custom_adgroup_' + agi).width());
                $(this).attr('data-cad-height', $(this).children('span').children('a').children('.custom_adgroup_' + agi).height());
            }
            if (typeof $(this).attr('data-cad-width') !== "undefined" && typeof $(this).attr('data-cad-height') !== "undefined") {
                if ($(this).attr('data-cad-width') == '0' || $(this).attr('data-cad-width') <= 239) { } else {
                    $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-cad-width') + 'px x ' + $(this).attr('data-cad-height') + 'px');
                }
            }
        });

        // Get Current Logo width & Height
        $('.hpe-logo').each(function () {
            $(this).children('#logo').addClass('hp-left');
            if ($(this).children('#logo').length) {
                $(this).attr('data-clogo-width', $(this).children('#logo').width());
                $(this).attr('data-clogo-height', $(this).children('#logo').height());
            }
            if ($(this).children('#logo').children('img').length) {
                $(this).attr('data-clogo-width', $(this).children('#logo').children('img').width());
                $(this).attr('data-clogo-height', $(this).children('#logo').children('img').height());
            }
            if ($(this).attr('data-clogo-width') && $(this).attr('data-clogo-height')) {
                $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-clogo-width') + 'px x ' + $(this).attr('data-clogo-height') + 'px');
            }
            $(this).children('#logo').removeClass('hp-left');
        });

        // Loading 5 times after each 3 seconds
        setIntervalLimited(function () {
            $('.hp-x').each(function () {
                $(this).mouseover(function () {
                    $(this).stop(true, true).removeClass('hp-ppp');
                }).mouseout(function () {
                    $(this).stop(true, true).addClass('hp-ppp');
                });
                if ($(this).css('float') != 'left') {
                    $(this).addClass('hpe-left');
                }
                $(this).children('.hp-y').css('width', $(this).outerWidth());
                $(this).children('.hp-y').css('height', $(this).outerHeight());
                $(this).children('.hp-y').removeClass('hp-smallh hp-longh hp-smallw');
                $(this).removeClass('hp-show-lable hp-hide-delete');
                if ($(this).height() < 40) {
                    $(this).children('.hp-y').addClass('hp-smallh');
                } else if ($(this).height() > 999) {
                    $(this).children('.hp-y').addClass('hp-longh');
                }
                if ($(this).width() < 32) {
                    $(this).children('.hp-y').addClass('hp-smallw');
                }
                if ($(this).width() > 300 && $(this).height() > 60) {
                    $(this).addClass('hp-show-lable');
                }
                if ($(this).width() < 65) {
                    $(this).addClass('hp-hide-help');
                } else {
                    $(this).removeClass('hp-hide-help');
                }
                if ($(this).width() >= 140) { // Box Header
                    if ($(this).height() <= 55) {
                        $(this).addClass('hp-show-hheader-3');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-2 hp-show-hheader-1');
                    } else if ($(this).height() <= 75) {
                        $(this).addClass('hp-show-hheader-2');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-1 hp-show-hheader-3');
                    } else if ($(this).height() > 75) {
                        $(this).addClass('hp-show-hheader-1');
                        $(this).removeClass('hp-hide-delete hp-show-hheader-3 hp-show-hheader-2');
                    }
                } else if ($(this).height() <= 54) {
                    $(this).addClass('hp-hide-hheader');
                    $(this).removeClass('hp-show-hheader-3 hp-show-hheader-2 hp-show-hheader-1');
                }
                if (!$(this).siblings('.hp-x').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.had-tr').length) {
                    $(this).addClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div3').parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div2').parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                if ($(this).parent('.hp-parent-div1').siblings('.hp-parent-div1').length) {
                    $(this).removeClass('hp-hide-delete');
                }
                $(this).removeClass('hpe-left');
                $('.hp-hide-help.hp-x .hp-y .hp-z .hp-help').remove();
            });

            // If Parent are not in same order
            $('.hp-parent').each(function () {
                if ($(this).children('.hp-parent-div1').length > 1) {
                    $(this).children('.hp-parent-div1').addClass('hp-parent-hide-delete');
                    $(this).children('.hp-parent-div1').removeClass('hp-hide-delete');
                }
            });

            // Get Current Ad width & Height
            $('.hpe-i-ad').each(function () {
                var agi = $(this).attr('data-adnum');
                if ($(this).children('.custom_adgroup_' + agi).length) {
                    $(this).attr('data-cad-width', $(this).children('.custom_adgroup_' + agi).width());
                    $(this).attr('data-cad-height', $(this).children('.custom_adgroup_' + agi).height());
                }
                if ($(this).children('a').children('.custom_adgroup_' + agi).length) {
                    $(this).attr('data-cad-width', $(this).children('a').children('.custom_adgroup_' + agi).width());
                    $(this).attr('data-cad-height', $(this).children('a').children('.custom_adgroup_' + agi).height());
                }
                if ($(this).children('span').children('.custom_adgroup_' + agi).length) {
                    $(this).attr('data-cad-width', $(this).children('span').children('.custom_adgroup_' + agi).width());
                    $(this).attr('data-cad-height', $(this).children('span').children('.custom_adgroup_' + agi).height());
                }
                if ($(this).children('span').children('a').children('.custom_adgroup_' + agi).length) {
                    $(this).attr('data-cad-width', $(this).children('span').children('a').children('.custom_adgroup_' + agi).width());
                    $(this).attr('data-cad-height', $(this).children('span').children('a').children('.custom_adgroup_' + agi).height());
                }
                if (typeof $(this).attr('data-cad-width') !== "undefined" && typeof $(this).attr('data-cad-height') !== "undefined") {
                    if ($(this).attr('data-cad-width') == '0' || $(this).attr('data-cad-width') <= 239) { } else {
                        $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-cad-width') + 'px x ' + $(this).attr('data-cad-height') + 'px');
                    }
                }
            });
            // Get Current Logo width & Height
            $('.hpe-logo').each(function () {
                $(this).children('#logo').addClass('hp-left');
                if ($(this).children('#logo').length) {
                    $(this).attr('data-clogo-width', $(this).children('#logo').width());
                    $(this).attr('data-clogo-height', $(this).children('#logo').height());
                }
                if ($(this).children('#logo').children('img').length) {
                    $(this).attr('data-clogo-width', $(this).children('#logo').children('img').width());
                    $(this).attr('data-clogo-height', $(this).children('#logo').children('img').height());
                }
                if ($(this).attr('data-clogo-width') && $(this).attr('data-clogo-height')) {
                    $(this).children('.hp-y').children('.hp-z').children('cpanel').text('Current: ' + $(this).attr('data-clogo-width') + 'px x ' + $(this).attr('data-clogo-height') + 'px');
                }
                $(this).children('#logo').removeClass('hp-left');
            });


        }, 500, 5);
    } 
    
    // disable LiveEditor on mobile
    else if (stringInURL(`${lb.he}.`)) {
        
        const site = `https://${getParam("site")}`;
        document.title = "Not Supported";
        document.querySelector(`.hpx-loader`).style.display = `none`;        
        document.querySelector(`.hpx-wrapper`).remove();
        document.querySelector(".hpx-main").style.overflow = `hidden`;
        document.querySelector(".hpx-main").insertAdjacentHTML("afterbegin", `
        <div class="le-mobile-message">
            <p class="le-message-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fe4458" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
            </p>
            <p class="le-message-1">At the moment, editing your website is not supported on mobile device.</p>
            <p class="le-message-2">Please sign in to your site from desktop or laptop. And remember, your website looks stunning on all devices. </p>
            <p class="le-message-button"><a href="${site}">OK</a></p>
        </div>`);
    }

});


///////////////////////////////////////// Site Manager //////////////////////////////////////////////////////////////

// LiveEditor(Site Manager)

document.addEventListener(`readystatechange`, event => {
    if (event.target.readyState === `interactive`) {
        // add this after applying pure JS
    }
});

$(document).ready(function () {
    "use strict";

    // declaration
    const sx = {
        lx: "list",
        lngn: "2.a",
        lngl: "sp",
        fx: "form",
        dlx: "delete"
    };
    const plist = sx.lx + sx.lngn + sx.lngl + '?';
    const pfist = sx.fx + sx.lngn + sx.lngl + '?';
    const pdist = sx.dlx + sx.lngn + sx.lngl + '?';
    const pext = '.a' + sx.lngl;
    const dplb = 'https://' + location.href.match(/:\/\/(.[^/]+)/)[1];

    // get domain

    let domainName = document.domain;

    // #general# changes 
    if (!stringInURL('&sm=Y') && !stringInURL(`loginstaff${pext}?site=`) && !stringInURL(`login${pext}?site=`) && readCookie("AppServer").includes(domainName)) {

        // get site
        const lhr = location.href;
        const lhurl = new URL(lhr);
        const surlw = lhurl.searchParams.get("site");
        let wd = '_' + surlw.split('.').shift();
        if (surlw.includes('/')) {

            wd = '_' + surlw.split('.').shift() + '_' + surlw.split('/').pop();
            wd = wd.replace(/-/g, '_');

        }

        // upload image place-holder
        document.querySelectorAll(".input.input-file input[readonly]").forEach((p) => p.placeholder = "Upload Image");

        document.querySelector('.smcommonbody') && (document.querySelector('.smcommonbody').style.backgroundImage = '');
        classIdExist_addClass('.my-form', 'hpe-my-form');
        classIdExist_addClass('.main_wrapper', 'hpe-main_wrapper');
        classIdExist_displayNone('#form_header_links');
        classIdExist_displayNone('.footer_links');
        classIdExist_displayNone('#bottom_scroll');
        classIdExist_displayNone('#top_scroll');

        // header full width
        if (document.querySelector('#form_header_wrapper')) {

            document.querySelector('#form_header_wrapper').style.marginLeft = 'auto';
            document.querySelector('#form_header_wrapper').style.width = '100%';

        }

        // list
        if (stringInURL("/list")) {

            $('.smbody td:nth-child(6)').css('display', 'none');
            $('.my-form').css('width', '90%');

            // delete home, site manager, back links
            $('a').each(function () {

                if ($(this).children('.list_links').text() == 'home' || $(this).children('.list_links').text() == 'site manager' || $(this).children('.list_links').text() == 'back') {

                    $(this).css('display', 'none');
                    $(this).prev('.smicon_bullet1').css('display', 'none');
                    $(this).next('.smicon_bullet1').css('display', 'none');

                }
                if ($(this).attr('href') == `/${lb.res}${pext}`) {

                    $(this).css('display', 'none');
                    $(this).next('.smicon_bullet1').css('display', 'none');

                }

            });

        }

        // form
        if (stringInURL("/form")) {

            // remove top-bottom scrolling icons
            if (document.querySelector('#bottom_scroll')) {
                document.querySelector('#bottom_scroll').style.display = 'none';
                document.querySelector('#top_scroll').style.display = 'none';
            }

            // remove footer links of site-manager and otehr changes
            document.querySelector('.footer_links') && (document.querySelector('.footer_links').style.display = 'none');
            document.querySelectorAll('.my-form .label').forEach(l => l.style.minWidth = '160px');
            document.querySelectorAll('.col.col-8, .col.col-8 select').forEach(s => s.style.minWidth = '300px');
            onlyMenuSelect();


            // cancel button click on single pages
            if (stringInURL("&hpe=Y")) {
                if (document.querySelector('#submit2')) {
                    document.querySelector('#submit2').addEventListener('click', () => window.parent.hpe_cancel());
                }
            }
            doNotComporessPNG();

            // #logo# screen
            if (stringInURL("#hpe_logo")) {

                // field changes
                headerSet('Logo');
                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');
                showField('Company Logo (Text)');
                showField('*Company Logo');
                removeDeleteLink();

                // logo image
                if (stringInURL("#hpe_logo_img")) {
                    hideField('Company Logo (Text)');
                } else {
                    // if both fields then place "OR" text
                    if (document.querySelector("#logo_text")) {
                        if (document.querySelector("#logo_text").parentElement.parentElement.parentElement.parentElement.tagName == "SECTION") {
                            document.querySelector("#logo_text").parentElement.parentElement.parentElement.parentElement.insertAdjacentHTML("beforebegin", `<center><or>-------- OR --------</or></center>`);
                        }
                    }
                }

            }

            // #menu#
            if (stringInURL("?lid=Menu&")) {

                // menu edit
                if (stringInURL('#hpe_in_menu_x')) {

                    headerSet('Menu');
                    classIdExistAll_displayNone('.hpe-my-form fieldset section');
                    showField('* Menu');
                    classIdExist_displayBlock('.my-form header');
                    classIdExist_displayBlock('.form_header');
                    addPlaceHolder("menu", "Menu Text");

                }

                // menu new
                if (stringInURL("#hpe_in_new_menu")) {

                    headerSet('Menu');
                    classIdExistAll_displayNone('.hpe-my-form fieldset section');
                    showField('* Menu');
                    addPlaceHolder("menu", "Menu Text");
                    var dvx = getParam('vpx'); // Set Menu Position (Vertical/Horizontal)
                    if (typeof dvx != 'undefined') {
                        $('#menu_position option').filter(function () {
                            return ($(this).text().trim() == dvx);
                        }).prop('selected', true);
                    }
                    var monx = getParam('fpx'); // Set Order No.
                    if (typeof monx != 'undefined') {
                        document.querySelector('#order_sequence').value = monx;
                    }

                }

                // #submenu#
                // submenu edit
                if (stringInURL("#hpe_in_submenu_")) {

                    headerSet('Submenu');
                    classIdExist_displayNone('.hpe-my-form fieldset section');
                    showField('* Sub Menu');
                    addPlaceHolder("sub_menu", "Sub Menu Text");

                }

                // submenu new 
                if (stringInURL("#hpe_in_new_submenu")) {

                    headerSet('Submenu');
                    classIdExist_displayNone('.hpe-my-form fieldset section');
                    showField('* Sub Menu');
                    var smonx = getParam('fpx');
                    if (typeof smonx != 'undefined') {
                        $('#order_sequence').val(smonx);
                    }
                    $('#target_window option').filter(function () { // select "Article" as default Page Type
                        return ($(this).text().trim() == 'Article');
                    }).prop('selected', true);

                }

            }

            // #poll#
            if (stringInURL("?lid=Polls&")) {

                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');

                // add place-holder
                let placeHolders = {
                    question: "Question",
                    header: "Header Text",
                    footer: "Footer Text",
                    poll_menu_title: "Poll Title (For Example: This Week's Poll)",
                    button_value: "Button Text (For Example: Vote)",
                    report_message: "Alternate Message",
                }
                for (let a = 1; a <= 7; a++) {
                    placeHolders = { ...placeHolders, [`answer${a}`]: [`Answer ${a}`] }
                }
                for (let key in placeHolders) {
                    addPlaceHolder(key, placeHolders[key]);
                }

                // add select text
                addSelectText("close_poll_flag", "Poll Status", 3);


                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    headerSet('Poll');
                    hideField('Menu');
                    hideField('Poll Location');
                    hideField('* Active');

                }

            }

            // #highlights#
            if (stringInURL("#hpe_hlx") || (stringInURL("#hpe_updatex") && stringInURL("&eflag="))) {

                // add place-holder
                const placeHolders = {
                    heading: "Heading",
                    body: "Description about this page",
                    picture_caption: "Picture Caption (primary)",
                    picture2_caption: "Picture Caption (secondary)",
                    site_title: "Website Title",
                    meta_description: "Meta Description",
                    meta_keywords: "Short Description about this page",
                }
                for (let key in placeHolders) {
                    addPlaceHolder(key, placeHolders[key])
                }

                // add select text
                let selectText = {
                    menu: "Menu",
                    share_tool_flag: "Position",
                    source_line: "Source Line",
                    by_line: "By Line",
                }
                for (let h = 1; h <= 9; h++) {
                    let newHighlight = `highlight${h}_flag`;
                    h == 1 && (newHighlight = `highlight_flag`);
                    selectText = { ...selectText, [newHighlight]: "Highlight" };
                }
                for (let key in selectText) {
                    addSelectText(key, selectText[key]);
                }

            }

            // new #highlight# (select only specific highlight and no to rest)
            if (stringInURL("#hpe_hlx") && (stringInURL("&pkey=&") && stringInURL("&hln="))) {
                let highlightNumber = getParam("hln");
                highlightNumber == 1 && (highlightNumber = "");
                document.querySelectorAll(`select[id^="highlight"]`).forEach(h => {
                    h.value = "No";
                });
                document.querySelector(`#highlight${highlightNumber}_flag`).value = "Yes";
            }

            // #update#
            if (stringInURL("#hpe_updatex") && stringInURL("&eflag=")) {

                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');
                headerSet('Article');
                hideField('* Active');
                removeDeleteLink();

                // e-edition PDFs
                if (stringInURL("&fpx=edition")) {

                    classIdExist_displayNone('.hpe-my-form fieldset section');
                    headerSet('E-Edition');
                    showField('* Heading');
                    showField('* Issue Date');
                    showField('Picture (primary)');
                    showField('Picture (secondary)');
                    hideLightBulb('Picture (primary)');
                    hideLightBulb('Picture (secondary)');
                    fieldChange('Picture (primary)', 'Upload Image (PDF Cover)');
                    fieldChange('Picture (secondary)', 'Upload PDF');
                    hideCropImage();

                }

                // codes
                if (stringInURL("&fpx=codes")) {

                    classIdExist_displayNone('.hpe-my-form fieldset section');
                    showField('* Code Name');
                    headerSet('Codes');
                    fieldChange('* Code Name', 'Category Name');

                }

                // product
                if (stringInURL("&fpx=product")) {

                    headerSet('Product');
                    hideField('* Menu');
                    hideField('* Category');

                }

                // directory
                if (stringInURL("&fpx=directory")) {

                    headerSet('Directory');
                    hideField('Menu');
                    hideField('* Category');

                }

                // events
                if (stringInURL("&fpx=event")) {

                    headerSet('Events');
                    hideField('* Menu');
                    hideField('Active');
                    if (stringInURL("&fpx=event_detail")) {

                        let dpk = getParam('pkey');
                        createCookie(`hpe_event_detail_url${wd}`, `${dplb}/view_file.asp?lid=Events2&pkey=${dpk}&site=${getParam('site')}&sm=Y&eu=Y`);

                    }

                }

                // article details page
                if (stringInURL("&fpx=art_detail")) {

                    hideAllHighlights();
                    hideField('* Issue Date');
                    hideField('* Menu');
                    hideField('Display Heading');
                    hideField('* Starting Date');
                    hideField('Ending Date');
                    hideField('Active');
                    let dpk = getParam('pkey');
                    createCookie(`hpe_art_detail_url${wd}`, `${dplb}/view_file.asp?lid=Pages&pkey=${dpk}&site=${getParam('site')}&sm=Y&eu=Y`);

                }

                // previews
                if (stringInURL("&fpx=preview")) {

                    hideAllHighlights();
                    hideField('* Menu');
                    hideField('Active');
                    headerSet(menu.value.split(" - ")[1]);
                }

                // section
                if (stringInURL("&fpx=section")) {

                    hideField('* Menu');
                    hideField('Active');

                }

                // custom sections
                if (stringInURL("?lid=Sections&")) {

                    hideField('* Description');
                    hideField('Active');
                    hideField('Image');
                    headerSet('Section');
                    fieldChange2('Section', 'Section');

                    // custom text
                    if (stringInURL("&fpx=cust_text")) {

                        var secv = document.querySelector('#section').value;
                        document.querySelectorAll('.label.col.col-4').forEach(s => {
                            if (s.innerText == 'Section') {

                                s.parentElement.parentElement.outerHTML = `
                                <section class="custom_input_sectionx">
                                    <div class="row">
                                        <label style="display:none;" class="label col col-4">Section</label>
                                        <div class="col col-8" style="margin-left:28%;">
                                            <label class="input">
                                                <input style="FONT-FAMILY:" id="section" name="section" size="50" maxlength="50" type="Text" value="${secv}">
                                            </label>
                                        </div>                                 
                                    </div>
                                </section>`;

                            }
                        });

                    }

                    // html
                    if (stringInURL("&fpx=cust_html")) {

                        hideFieldText('Section');
                        centerBodyField('Section', '18%');

                    }

                    // image
                    if (stringInURL("&fpx=cust_img")) {

                        showField('Image');
                        hideField('Section');

                    }

                    // weather
                    if (stringInURL("&fpx=weather")) {

                        headerSet('Weather');
                        hideFieldText('Section');
                        centerBodyField('Section', '18%');

                    }

                }

            }

            // specific article with few fields
            if (stringInURL("&fields=heading_body")) {

                hideAllHighlights();
                hideField('* Issue Date');
                hideField('* Menu');
                hideField('Display Heading');
                hideField('Picture (primary)');
                hideField('Picture Caption (primary)');
                hideField('Picture (secondary)');
                hideField('Picture Caption (secondary)');
                hideField('Picture Alignment');
                hideField('Source');
                hideField('By');
                hideField('* Allow Comments');
                hideField('Bookmark/Share Tools');
                hideField('Drop Cap');
                hideField('Website Title');
                hideField('Meta Keywords');
                hideField('Meta Description');
                hideField('* Starting Date');
                hideField('Ending Date');
                hideField('Active');
                headerSet(menu.value.split(" - ")[1]);
                stringInURL("&fields=heading_body_picture") && showField('Picture (primary)');
                stringInURL("&fields=heading_body_picture_nobody") && hideField("Body$$$Click below:$$PageDesigner 2$$PageDesigner 1");

            }


            // #highlight# header text
            if (stringInURL("&hln=")) {
                let highlightNumber = getParam("hln");
                headerSet(`Highlight-${highlightNumber}`);
            }

            // #ad#
            if (stringInURL("?lid=CustomersAdsGroups&")) {

                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');
                classIdExist_displayNone('.hpe-my-form fieldset section');

                // fields changes
                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    const adkey = getParam("fkey");
                    headerSet(`AdGroup-${adkey}`);
                    showField('* Ad Description');
                    showField('Ad Image');
                    showField('Ad Link / Script');
                    removeDeleteLink();
                    hideLightBulb('Ad Link / Script');

                    // add place holders
                    addPlaceHolder("ad_description", "Ad Description");
                    addPlaceHolder("adlink", "");

                    // coverting textarea to input fiel for "Ad Link"
                    if (document.querySelector("#adlink")) {

                        document.querySelector("#adlink").parentElement.parentElement.previousElementSibling.innerText = "Ad Link";
                        document.querySelector("#adlink").parentElement.outerHTML = `<label class="input"><input id="adlink" name="ad_description" size="50" maxlength="100" type="url" placeholder="Enter URL (Example: http://www.mycompany.com)"></label>`;

                    }

                }

                // ad new
                if (stringInURL("#hpe_newadx") && stringInURL("&eflag=") && stringInURL("&pkey=&")) {

                    document.querySelector('#ad_image').setAttribute('accept', 'image/*'); // only image
                    if (document.querySelector('#starting_date').value == '') { // if date blank, set default date
                        var d = new Date();
                        document.querySelector('#starting_date').value = `01/01/${d.getFullYear()}`;
                    }

                }

            }

            // #preview# #sectoin# #articlegroup# #e-edition#
            // new article 
            if (stringInURL("#hpe_prevx") && stringInURL("?lid=Pages&") && stringInURL("&eflag=") && stringInURL("&pkey=&")) {

                // general field changes
                hideField('* Active');
                hideField('* Menu');
                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');
                headerSet('Article');

                // add place-holder
                const placeHolders = {
                    heading: "Heading",
                    body: "Description about this page",
                    picture_caption: "Picture Caption (primary)",
                    picture2_caption: "Picture Caption (secondary)",
                    site_title: "Website Title",
                    meta_description: "Meta Description",
                    meta_keywords: "Short Description about this page",
                }
                for (let key in placeHolders) {
                    addPlaceHolder(key, placeHolders[key])
                }

                // add select text
                let selectText = {
                    menu: "Menu",
                    share_tool_flag: "Position",
                    source_line: "Source Line",
                    by_line: "By Line",
                }
                for (let h = 1; h <= 9; h++) {
                    let newHighlight = `highlight${h}_flag`;
                    h == 1 && (newHighlight = `highlight_flag`);
                    selectText = { ...selectText, [newHighlight]: "Highlight" };
                }
                for (let key in selectText) {
                    addSelectText(key, selectText[key]);
                }



                // check if submit buttons are there or not
                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    menuSelect();
                    issueDateSelect();
                    clearEndingDate();
                    $('[id*="highlight"] option').filter(function () { // set all highlight = no
                        return ($(this).text() == 'No');
                    }).prop('selected', true);

                    (!stringInURL("&fpx=section")) && hideAllHighlights(); // if not sections, hide highlights                        

                    if (stringInURL("&fpx=edition")) { // If E-Edition

                        headerSet('E-Edition');
                        classIdExist_displayNone('.hpe-my-form fieldset section');
                        showField('* Heading');
                        showField('* Issue Date');
                        showField('Picture (primary)');
                        showField('Picture (secondary)');
                        hideLightBulb('Picture (primary)');
                        hideLightBulb('Picture (secondary)');
                        fieldChange('Picture (primary)', 'Upload Image (PDF Cover)');
                        fieldChange('Picture (secondary)', 'Upload PDF');
                        hideCropImage();

                    }

                }

            }

            // remove/hide article from highlight
            if (stringInURL("#hpe_hldx") && stringInURL("&eflag=")) {

                classIdExist_displayNone('.my-form');
                if (document.querySelector(`#menu`).value == '') { // if Menu deleted or blank, set first one
                    document.querySelector(`#menu option:nth-child(2)`).selected = "selected";
                }
                var hs = sx.wlr.split('_hldx').pop();
                if (hs == '1') { // set highlight no
                    $('#highlight_flag option').filter(function () {
                        return ($(this).text() == 'No');
                    }).prop('selected', true);
                } else {
                    $('#highlight' + hs + '_flag option').filter(function () {
                        return ($(this).text() == 'No');
                    }).prop('selected', true);
                }
                createCookie('hpe_success_delete' + wd, 'Hide Successfully from <b>Highlight - ' + hs + '</b>');
                document.querySelector('#submit1').click();

            }

            // #event#
            // new event
            if (stringInURL("#hpe_eventxy") && stringInURL("?lid=Events2&") && stringInURL("&eflag=") && stringInURL("&pkey=&")) {

                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    classIdExist_displayBlock('.my-form header');
                    classIdExist_displayBlock('.form_header');
                    headerSet('Event');
                    hideField('* Menu');
                    hideField('Active');
                    menuSelect();
                    issueDateSelect();
                    clearEndingDate();

                }

            }

            // #product#
            // new product
            if (stringInURL("#hpe_productxy") && stringInURL("?lid=Products&") && stringInURL("&eflag=") && stringInURL("&pkey=&") && stringInURL("smx=Y")) {

                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    classIdExist_displayBlock('.my-form header');
                    classIdExist_displayBlock('.form_header');
                    headerSet('Product');
                    hideField('* Menu');
                    hideField('* Active');
                    menuSelect();
                    categorySelect();

                }

            }

            // #directory#
            if (stringInURL("#hpe_directoryxy") && stringInURL("?lid=CustomersSetup&") && stringInURL("&eflag=") && stringInURL("&pkey=&")) {

                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    classIdExist_displayBlock('.my-form header');
                    classIdExist_displayBlock('.form_header');
                    headerSet('Directory');
                    hideField('Menu');
                    hideField('* Category');
                    hideField('* Active');
                    menuSelect();
                    categorySelect();

                }

            }

            // #video#  #photo#      
            if (stringInURL("?lid=Galleries&") && stringInURL("&eflag=")) {

                if (document.querySelector('#submit1') || document.querySelector('#submit2')) {

                    classIdExist_displayBlock('.my-form header');
                    classIdExist_displayBlock('.form_header');
                    headerSet('Video');
                    hideField('* Menu');
                    hideField('Picture');
                    hideField('Picture Caption');
                    hideField('Website Title');
                    hideField('Meta Keywords');
                    hideField('Meta Description');

                    // video - youtue URL
                    if (stringInURL("&fpx=hpe_video_g_yt_url")) {

                        document.querySelector('#body').setAttribute('rows', '1');
                        setPlaceHolder('#body', 'Put YouTube Video URL here...');
                        fieldChange2('Body', 'YouTube Video URL');

                    }

                    // video - youtube ID
                    if (stringInURL("&fpx=hpe_video_g_yt_id")) {

                        document.querySelector('#body').setAttribute('rows', '1');
                        setPlaceHolder('#body', 'Put YouTube Video ID here...');
                        fieldChange2('Body', 'YouTube Video ID');

                    }

                    // video - youtube code
                    if (stringInURL("&fpx=hpe_video_g_yt_code")) {

                        document.querySelector('#body').setAttribute('rows', '3');
                        setPlaceHolder('#body', 'Put YouTube Video Code here...');
                        fieldChange2('Body', 'YouTube Video Code');

                    }

                    // photo
                    if (stringInURL("&fpx=hpe_photo")) {

                        headerSet('Photo');
                        fieldChange2('Body', 'Body');
                        hideField('Body');
                        showField('Picture');
                        showField('Picture Caption');

                    }

                    // new video/photo
                    if (stringInURL("#hpe_video_g_yt_urlxy$$") || stringInURL("#hpe_video_g_yt_idxy$$") || stringInURL("#hpe_video_g_yt_codexy$$") || stringInURL("#hpe_photo_gxy$$")) {

                        menuSelect();
                        issueDateSelect();
                        clearEndingDate();

                    }

                }

            }

            // #support-ticket#
            if (stringInURL("?lid=SupportTickets")) {

                classIdExist_displayBlock('.my-form header');
                classIdExist_displayBlock('.form_header');
                headerSet('Support Ticket');
                classIdExist_displayNone('.hpe-my-form fieldset section');
                centerBodyField('* Issue, Request or Question', '18%');
                hideFieldText('* Issue, Request or Question');
                showField('* Issue, Request or Question');
                createTicket('#hpe_bottom_links', 'Bottom Links', 'Write issue/request regarding links here..');
                createTicket('#hpe_top_links', 'Top Links', 'Write issue/request regarding links here..');
                createTicket('#hpe_email', 'Email Changes', 'Write new Email here...');
                createTicket('#hpe_social', 'Social Media Links', 'Write Social media links here...');
                createTicket('#hpe_map', 'Google Map Address Changes', 'Write your Address here and we will update it for you...');
                createTicket('#hpe_hitcounter', 'Hit Counter', 'Write issue/request regarding hit counter here..');
                createTicket('#hpe_phone', 'Phone number', 'Write issue/request regarding phone here..');
                createTicket('#hpe_gsearch', 'Search box', 'Write issue/request regarding Search box here..');
                createTicket('#hpe_spackages', 'Service Package', 'Write issue/request regarding this Service Package...');

                // form ticket
                if (stringInURL("#hpe_formbodys") && stringInURL("&fpx=")) {

                    let tfn = getParam('fpx');
                    setTicketSubject(tfn + ' Form');
                    setPlaceHolder('#message', `Would you like to make changes to ${tfn} form?\nGive us your requirements or issues regarding this form.`);

                }

            }

            // add classes and theme name to site manager forms
            if (document.querySelector(".hpe-my-form")) {

                document.querySelector(".hpe-my-form fieldset").parentElement.classList.add("fieldSetParent");
                document.querySelector("body").classList.add("lbSiteManager");
                document.querySelector("body").setAttribute("data-theme", window.parent.document.body.getAttribute("data-theme"));

            }

            // #fields text# postion changes
            document.querySelectorAll(".hpe-my-form .label.col.col-4").forEach(fieldText => {

                fieldText.style.display = "none";
                let fv = fieldText.innerText;
                fv === "Add to Highlight" && (fv = "Add to Highlight1");
                fv.includes("BodyClick") && (fv = "Body");
                fieldText.nextElementSibling && fieldText.nextElementSibling.insertAdjacentHTML("afterbegin", `<p class="hpe-field-name">${fv}:</p>`);

            });

            // #field image# position changes
            document.querySelectorAll(`.hpe-my-form .smicon_file_links[onClick*="image"]`).forEach(im => {

                let imClick = im.getAttribute("onClick");
                let imSrc = imClick.split("'")[1];
                im.parentElement.parentElement.previousElementSibling.insertAdjacentHTML("beforeend", `<p class="fieldImage"><img src="${imSrc}"></p>`);

            });

            // #iframe# height
            let bodyH = document.body.offsetHeight;
            let iframeParent = window.parent.document.querySelector(".f-mfp-iframe");
            window.parent.document.querySelector(".lbStyles").innerHTML = "";
            if (bodyH < iframeParent.offsetHeight) {

                window.parent.document.querySelector(".lbStyles").innerHTML = `<style>#f-mfp-iframe{height:${bodyH + 120}px !important;min-height:auto !important;}</style>`;

            }
        }
    }
});
// END: LiveEditor(Site Manager)

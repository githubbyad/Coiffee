// mobile menu
if (document.querySelector(".cus-top-link") && window.screen.width < 992) {

   if (document.querySelector(".cus-menu") && !document.querySelector("mobileMenus")) {

      document.querySelector(".cus-top-link").insertAdjacentHTML("beforeend", `
      <mobileMenus class="d-block">
         <div class="row mx-0 align-items-center">
         <div class="cus-mobile-menu-toggle col-3">
            <i class="cus-mobile-menu-open bi bi-list text-white"></i>
            <i class="cus-mobile-menu-close bi bi-x-lg text-white d-none"></i>
         </div>
         <div class="cus-mobile-menu-social-links col-9 text-end"></div>
         </div>
         <div class="cus-mobile-menu-bar w-100 d-none bg-white px-3 py-3" style="border-bottom: 2px solid var(--themeColor);"></div>
      </mobileMenus>`);

      document.querySelector(".cus-mobile-menu-bar").insertAdjacentElement("beforeend", document.querySelector(".cus-menu"));

      document.querySelector(".cus-top-social-links") && document.querySelector(".cus-mobile-menu-social-links").insertAdjacentElement("beforeend", document.querySelector(".cus-top-social-links"));

      document.querySelector(".cus-dark-light-theme") && document.querySelector(".cus-mobile-menu-social-links").insertAdjacentElement("beforeend", document.querySelector(".cus-dark-light-theme"));

      if (document.querySelector(".cus-top-phone")) {
         document.querySelector(".cus-menu").insertAdjacentElement("afterend", document.querySelector(".cus-top-phone"));
         document.querySelector(".cus-top-phone").classList.add("text-black");
         document.querySelector(".cus-top-phone b") && document.querySelector(".cus-top-phone b").classList.add("text-black");
      }
      if (document.querySelector(".cus-top-email")) {
         document.querySelector(".cus-menu").insertAdjacentElement("afterend", document.querySelector(".cus-top-email"));
         document.querySelector(".cus-top-email").classList.add("text-black");
         document.querySelector(".cus-top-email b") && document.querySelector(".cus-top-email b").classList.add("text-black");
      }

      // menu click
      document.querySelector(".cus-mobile-menu-toggle").addEventListener("click", () => {
         document.querySelector(".cus-mobile-menu-open").classList.toggle("d-none");
         document.querySelector(".cus-mobile-menu-close").classList.toggle("d-none");
         document.querySelector(".cus-mobile-menu-bar").classList.toggle("d-none");
      });

   }

}

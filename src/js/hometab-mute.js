function muteHome() {
  let title = document.querySelector('#react-root main h2 > span');
  let btn = document.querySelector('#react-root main [aria-haspopup="menu"]');
  let bar = document.querySelector('#react-root main > div > div > div > div > div > div')
  if (title && window.location.href.includes("twitter.com/home")) {
    if (["ホーム", "Home", "Accueil", "Startseite", "الرئيسيّة", "Baile", "الرئيسيّة", "Inicio", "Trang chủ", ""].includes(title.textContent)) {
      btn.click();
      let menuItem = document.querySelector('[role="menuitem"]');
      menuItem.click();
    }
    let bar = document.querySelector('#react-root main > div > div > div > div > div > div')
    bar.remove();
  }
}

const observer = new MutationObserver((mutations) => {
  muteHome();
});
const config = { attributes: false, childList: true, characterData: false, subtree: true };
observer.observe(document.body, config);
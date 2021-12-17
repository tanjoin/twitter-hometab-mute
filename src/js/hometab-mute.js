function muteHome() {
  let e = document.querySelectorAll('[role="tablist"]  > [role="presentation"]');
  if (e && e.length >= 2 && window.location.href.includes("twitter.com/home")) {
    e[0].remove();
    e[1].click();
    e[1].style.display = 'none';
  }
}

const observer = new MutationObserver((mutations) => {
  muteHome();
});
const config = { attributes: false, childList: true, characterData: false, subtree: true };
observer.observe(document.body, config);
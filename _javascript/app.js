document.addEventListener("DOMContentLoaded", () => {
  particlesJS.load(
    "particles-js",
    "lib/particlesjs-config.json",
    () => {}
  );

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Cookie Banner
  var cookieBanner = new CookieBanner("imui-cookies", 30);
  cookieBanner.init();

  var contactForm = new ContactForm("contact-name", "contact-email", "contact-message", "contact-privacy", "contact-send");
  contactForm.init();
});

class ContactForm {

  constructor(name, email, message, privacy, send) {
    this.name = document.getElementById(name);
    this.email = document.getElementById(email);
    this.message = document.getElementById(message);
    this.privacy = document.getElementById(privacy);
    this.send = document.getElementById(send);
  }

  init() {
    this.privacy.addEventListener("change", (e) => {
      if (e.target.checked) {
        this.send.removeAttribute("disabled");
      } else {
        this.send.setAttribute("disabled", "");
      }
    })
    this.send.addEventListener("click", () => {
      console.log("Send");
    })
  }
}

class CookieBanner {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }

  init() {
    if (this.checkCookieExist() != "accept") {
      this.createCookieBanner();
    }
  }

  checkCookieExist() {
    var name = this.name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  setCookie() {
    var d = new Date();
    d.setTime(d.getTime() + this.duration * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = this.name + "=" + "accept" + ";" + expires + ";path=/";
  }

  createCookieBanner() {
    var bodytag = document.getElementsByTagName("body")[0];

    var banner = document.createElement("div");
    banner.setAttribute("id", "cookie-banner");
    banner.setAttribute("class", "notification is-primary");

    var columns = document.createElement("div");
    columns.setAttribute("class", "columns");
    banner.appendChild(columns);

    var cookieText = document.createElement("p");
    cookieText.setAttribute("class", "column is-four-fifths");
    cookieText.innerHTML =
      "Diese Internetseite verwendet Cookies, um die Nutzererfahrung zu verbessern und den Benutzern bestimmte Dienste und Funktionen bereitzustellen. ";
    columns.appendChild(cookieText);

    var linkToPrivacy = document.createElement("a");
    linkToPrivacy.setAttribute("class", "column");
    linkToPrivacy.href = "/privacy.html";
    linkToPrivacy.innerText = "Datenschutzerklärung";
    columns.appendChild(linkToPrivacy);

    var closeButton = document.createElement("button");
    closeButton.setAttribute("class", "delete");
    closeButton.onclick = () => {
      this.setCookie();
      bodytag.removeChild(banner);
    };
    banner.appendChild(closeButton);

    bodytag.appendChild(banner);
  }
}
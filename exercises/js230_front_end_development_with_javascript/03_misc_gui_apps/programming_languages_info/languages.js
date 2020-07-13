const languages = [
  {
    name: 'Ruby',
    description: 'Ruby is a dynamic, reflective, object-oriented, ' +
    'general-purpose programming language. It was designed and developed in the mid-1990s ' +
    'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
    'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
    'including functional, object-oriented, and imperative. It also has a dynamic type ' +
    'system and automatic memory management.'
  },

  {
    name: 'JavaScript',
    description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
    'programming language. It has been standardized in the ECMAScript language ' +
    'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
    'technologies of World Wide Web content production; the majority of websites employ ' +
    'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
    'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
    'supporting object-oriented, imperative, and functional programming styles.'
  },

  {
    name: 'Lisp',
    description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
    'with a long history and a distinctive, fully parenthesized prefix notation. ' +
    'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
    'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
    'since its early days, and many dialects have existed over its history. Today, the best '+
    'known general-purpose Lisp dialects are Common Lisp and Scheme.'
  },

  {
    name: 'Short desc lang',
    description: "This ain't too long",
  }
];

document.addEventListener("DOMContentLoaded", () => {
  languages.forEach(language => {
    const languagesDiv = document.getElementById("languages");
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const a = document.createElement("a");

    div.dataset.name = language.name;
    h2.textContent = language.name;
    p.textContent = truncate(language.description);
    a.classList.add("more");
    a.textContent = "Show More";
    a.dataset.name = "more";
    a.href = "#";

    div.appendChild(h2);
    div.appendChild(p);

    if (language.description.length > 120) {
      a.addEventListener("click", event => {
        event.preventDefault();

        if (a.dataset.name === "more") {
          p.textContent = language.description;
          a.dataset.name = "less";
          a.textContent = "Show Less";
        } else if (a.dataset.name === "less") {
          p.textContent = truncate(language.description);
          a.dataset.name = "more";
          a.textContent = "Show More";
        }
      });

      div.appendChild(a);
    }

    languagesDiv.appendChild(div);
  });

  function truncate(description) {
    if (description.length > 120) {
      return description.slice(0, 120) + " ...";
    } else {
      return description;
    }
  }
});

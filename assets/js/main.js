    const root = document.body;
    const toggle = document.getElementById("themeToggle");
    const storedTheme = window.localStorage.getItem("holzTheme");

    if (storedTheme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggle.textContent = "☼";
    }

    toggle.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      toggle.textContent = next === "dark" ? "☼" : "☾";
      window.localStorage.setItem("holzTheme", next);
    });

    document.querySelectorAll(".faq-item").forEach((item) => {
      const btn = item.querySelector(".faq-question");
      btn.addEventListener("click", () => {
        const open = item.classList.contains("open");
        document.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("open");
          const ans = i.querySelector(".faq-answer");
          if (ans) ans.style.maxHeight = null;
          const t = i.querySelector(".faq-toggle");
          if (t) t.textContent = "+";
        });
        if (!open) {
          item.classList.add("open");
          const answer = item.querySelector(".faq-answer");
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + "px";
          }
          const toggle = item.querySelector(".faq-toggle");
          if (toggle) toggle.textContent = "–";
        }
      });
    });

    document.getElementById("year").textContent = new Date().getFullYear();

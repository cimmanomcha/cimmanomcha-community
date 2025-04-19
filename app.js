// SPA navigation for hash-based routing
document.addEventListener("DOMContentLoaded", function () {
  function showPage(id) {
    // Hide all pages
    document.querySelectorAll(".page").forEach(sec => sec.classList.remove("active"));
    // Remove active from nav links
    document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
    // Show the selected page
    const page = document.getElementById(id);
    if (page) page.classList.add("active");
    // Highlight nav link
    const nav = document.querySelector(`nav a[href="#${id}"]`);
    if (nav) nav.classList.add("active");
  }

  function onHashChange() {
    let id = location.hash.replace("#", "");
    if (!id) id = "main";
    showPage(id);
  }

  window.addEventListener("hashchange", onHashChange);
  onHashChange();

  // Dummy post and chat logic for demo
  document.querySelectorAll('.post-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      if (input.value.trim() !== "") {
        const ul = this.parentElement.querySelector('.post-list');
        const li = document.createElement('li');
        li.innerHTML = `<strong>Cimmanomcha</strong> <span class="timestamp">just now</span><p>${input.value}</p>`;
        ul.prepend(li);
        input.value = "";
      }
    });
  });

  document.querySelectorAll('.chat-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      if (input.value.trim() !== "") {
        const chat = this.parentElement.querySelector('.chat-window');
        const div = document.createElement('div');
        div.className = "message";
        div.innerHTML = `<b>Cimmanomcha:</b> ${input.value}`;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
        input.value = "";
      }
    });
  });
});
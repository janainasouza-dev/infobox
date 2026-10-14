const FONE = "5563991146877";
const wa = t => "https://wa.me/" + FONE + "?text=" + encodeURIComponent(t);

// botões com mensagem pronta
document.querySelectorAll("[data-wa]").forEach(el => {
  el.href = wa(el.dataset.wa);
  el.target = "_blank";
  el.rel = "noopener";
});

// formulário -> WhatsApp
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const v = id => document.getElementById(id).value.trim();
  let t = `Olá! Meu nome é ${v("nome")}.\nServiço: ${v("servico")}\nAtendimento: ${v("modo")}`;
  if (v("msg")) t += `\nProblema: ${v("msg")}`;
  window.open(wa(t), "_blank", "noopener");
});

// animação ao rolar
const io = new IntersectionObserver(es => es.forEach(x => {
  if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("ano").textContent = new Date().getFullYear();

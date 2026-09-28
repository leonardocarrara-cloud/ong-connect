const toggle=document.querySelector(".menu-toggle"),menu=document.querySelector(".nav-menu");
toggle.addEventListener("click",()=>{const open=menu.classList.toggle("active");toggle.setAttribute("aria-expanded",open);});
const modal=document.getElementById("modal");
function setModal(open){modal.classList.toggle("open",open);modal.setAttribute("aria-hidden",String(!open));}
document.getElementById("openModal").onclick=()=>setModal(true);
document.getElementById("closeModal").onclick=()=>setModal(false);
document.getElementById("modalOk").onclick=()=>setModal(false);
modal.addEventListener("click",e=>{if(e.target===modal)setModal(false)});
const toast=document.getElementById("toast");
function showToast(msg){toast.textContent="✓ "+msg;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3000)}
document.getElementById("showToast").onclick=()=>showToast("Operação realizada com sucesso!");
document.querySelectorAll(".donate").forEach(b=>b.onclick=()=>showToast("Apoio registrado com sucesso!"));
const form=document.getElementById("volunteerForm");
form.addEventListener("submit",e=>{e.preventDefault();let ok=true;
 [...form.querySelectorAll("input,select")].forEach(f=>{const valid=f.checkValidity();f.classList.toggle("field-error",!valid);f.classList.toggle("field-success",valid);if(!valid)ok=false});
 const m=form.querySelector(".form-message");m.className="form-message "+(ok?"success":"error");
 m.textContent=ok?"Inscrição validada com sucesso!":"Preencha corretamente os campos destacados.";
 if(ok)showToast("Inscrição enviada com sucesso!");
});
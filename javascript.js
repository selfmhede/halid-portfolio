
document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.querySelector(".hero h1");
    const hour = new Date().getHours();
  
    if (hour < 12) {
      greeting.textContent = "Good morning! Welcome to Halid Haniz Website";
    } else if (hour < 18) {
      greeting.textContent = "Good afternoon! Welcome to Halid Haniz Website";
    } else {
      greeting.textContent = "Good evening! Welcome to Halid Haniz Website";
    }
  });
  
 
  function toggleProjects() {
    const projectList = document.querySelector("#projects ol");
    if (projectList.style.display === "none") {
      projectList.style.display = "block";
    } else {
      projectList.style.display = "none";
    }
  }
  
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    
    const phone = document.querySelector('a[href^="+233"]');
    if (phone) phone.setAttribute("href", "tel:+233540447053");
  
    const fb = document.querySelector('a[href="halid selfmhede"]');
    if (fb) fb.setAttribute("href", "https://facebook.com/halidselfmhede");
  
    const ig = document.querySelector('a[href="halid issahak"]');
    if (ig) ig.setAttribute("href", "https://instagram.com/halidissahak");
  
    const email = document.querySelector('a[href="halidu.issahaku@st.gimpa.edu.gh"]');
    if (email) email.setAttribute("href", "mailto:halidu.issahaku@st.gimpa.edu.gh");
  });
  
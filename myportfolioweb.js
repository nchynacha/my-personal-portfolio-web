const navItem = document.querySelectorAll(".nav-item a");
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

// โหลดค่าที่เคยเลือกไว้จาก localStorage
document.addEventListener("DOMContentLoaded", () => {
    const activeLink = localStorage.getItem("activeNav");
    if (activeLink) {
        navItem.forEach(link => {
            if (link.getAttribute("href") === activeLink) {
                link.classList.add("active");
            }
        });
    }
});

// เพิ่ม event listener เมื่อคลิกลิงก์
navItem.forEach(link => {
    link.addEventListener("click", function () {
        // ลบ active ออกจากทุกลิงก์
        navItem.forEach(link => link.classList.remove("active"));
        
        // เพิ่ม active ให้กับลิงก์ที่ถูกคลิก
        this.classList.add("active");

        // บันทึก href ลง localStorage
        if (this.getAttribute("href") !== "#") {
            localStorage.setItem("activeNav", this.getAttribute("href"));
        }

        // ปิดเมนูหลังจากคลิก
        nav.classList.remove("show");
    });
});

// hamburger
hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

document.querySelectorAll("nav-links a").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");}))





document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".animated-text").forEach((textElement) => {
       const nodes = Array.from(textElement.childNodes);
       textElement.innerHTML = ""; // ล้างเนื้อหาเดิม
 
       nodes.forEach((node) => {
          if (node.nodeType === 3) {
             // ถ้าเป็น text node ให้แยกตัวอักษร
             node.textContent.split("").forEach((char, index) => {
                const span = document.createElement("span");
                span.textContent = char;
                span.style.animationDelay = `${index * 0.1}s`; // หน่วงเวลา
                textElement.appendChild(span);
             });
          } else {
             // ถ้าเป็น element (เช่น <img>) ให้ใส่กลับไปเหมือนเดิม
             textElement.appendChild(node);
          }
       });
    });
 });
 
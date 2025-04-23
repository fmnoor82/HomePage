btnContactUs = document.getElementById("contact-us");
btnFindUs = document.getElementById("find-us");

const lblTop1 = document.querySelector(`label[for="top1"]`);
const lblTop2 = document.querySelector(`label[for="top2"]`);
const lblTop3 = document.querySelector(`label[for="top3"]`);



btnContactUs.addEventListener("click", function() {
      const ContactUsSection = document.querySelector("h3:nth-of-type(2) + p");
      ContactUsSection.scrollIntoView({ behavior: "smooth"});
});

btnFindUs.addEventListener("click", function() {
      const FindUsSection = document.querySelector("h3:last-of-type + p");
      FindUsSection.scrollIntoView({ behavior: "smooth"});
});


lblTop1.addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth"});
});
lblTop2.addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth"});
});
lblTop3.addEventListener("click", function() { window.scrollTo({ top: 0, behavior: "smooth"});
});
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let newEle = document.createElement('div');
newEle.className = "accordian";
let newH = document.createElement('h3');
newH.innerText = 'Skills';
let newP = document.createElement('p');
newP.innerText = "I have been awarded with best influencer of 2021. I am also one of the top contributor of the open source projects over the Github, which can be seen in my Github profile.";
newP.style.display = "block";
newEle.appendChild(newH);
newEle.appendChild(newP);

let mainDiv = document.querySelector('.accordian-wrapper');
mainDiv.appendChild(newEle);

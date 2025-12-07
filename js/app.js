// -------------------------------------------
// Slide Navigation
// -------------------------------------------

const slides = document.querySelectorAll(".slide");
let current = 0;

// --- INITIAL SLIDE POSITIONS (Required) ---
slides.forEach((s, i) => {
    s.style.transform = `translateX(${i * 100}%)`;
});

function showSlide(index) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

document.getElementById("start-btn").onclick = () => {
    current = 1;
    showSlide(current);
};

document.getElementById("restart-btn").onclick = () => {
    current = 0;
    showSlide(current);
};

// -------------------------------------------
// Populate Slides Using wrappedData.js
// -------------------------------------------

// SUMMARY SLIDE
document.getElementById("msg-count").textContent = wrappedData.stats.totalMessages;
document.getElementById("avg-depth").textContent = wrappedData.stats.averageDepth;
document.getElementById("primary-style").textContent = "Historian-Engineer-Meme Strategist";

// THEMES SLIDE
const themeList = document.getElementById("theme-list");
wrappedData.topThemes.forEach(theme => {
    const li = document.createElement("li");
    li.textContent = theme;
    themeList.appendChild(li);
});

// AWARDS SLIDE
const awardsContainer = document.getElementById("awards-container");
wrappedData.awards.forEach(award => {
    const card = document.createElement("div");
    card.className = "award-card";
    card.innerHTML = `<h2>${award.title}</h2><p>${award.description}</p>`;
    awardsContainer.appendChild(card);
});

// HIGHLIGHTS SLIDE
const highlightDiv = document.getElementById("highlight-list");
wrappedData.highlightMoments.forEach(h => {
    const p = document.createElement("p");
    p.textContent = "• " + h;
    highlightDiv.appendChild(p);
});

// INSIGHTS SLIDE
document.getElementById("insight-text").innerHTML = `
    <strong>Model Behaviour:</strong> ${wrappedData.insights.modelBehaviour}<br><br>
    <strong>Usage Pattern:</strong> ${wrappedData.insights.usagePattern}
`;

// FUNNIEST MOMENTS SLIDE
const funnyDiv = document.getElementById("funny-moment");
funnyDiv.innerHTML = wrappedData.funniestMoments
    .map(m => "• " + m)
    .join("<br><br>");

// -------------------------------------------
// MANUAL ARROW NAVIGATION
// -------------------------------------------

document.getElementById("left-arrow").onclick = () => {
    if (current > 0) {
        current -= 1;
        showSlide(current);
    }
};

document.getElementById("right-arrow").onclick = () => {
    if (current < slides.length - 1) {
        current += 1;
        showSlide(current);
    }
};
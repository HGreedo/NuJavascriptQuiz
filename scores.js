function print() {
    let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    highScores.forEach(scores => {
        const liTag = document.createElement("li");
        liTag.textContent = scores.initials + " - " + scores.score

        const olEl = document.getElementById("highScores");
        olEl.append(liTag);
    });
}

print();
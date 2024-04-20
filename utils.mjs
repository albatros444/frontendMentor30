const progressBar = document.querySelector(".progressBar");

const formatNumber = (n) => {
  n = n.toString().split("").reverse();
  let output = [];
  for (let i = 0; i < n.length; i += 3) {
    output.push(...n.slice(i, i + 3));
    if (i + 3 < n.length) {
      output.push(",");
    }
  }
  return output.reverse().join("");
};

const handleProgBar = (backedCount) => {
  let progressBarLength = (backedCount * 100) / 100000;
  if (progressBarLength > 100) {
    progressBarLength = 100;
  }
  progressBar.style.width = `${progressBarLength}%`;
};

export { formatNumber, handleProgBar };

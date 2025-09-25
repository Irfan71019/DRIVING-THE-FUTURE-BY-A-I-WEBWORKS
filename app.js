document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("showFuture");
  const info = document.getElementById("futureInfo");

  btn.onclick = () => {
    if(info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  };
});

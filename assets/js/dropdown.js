  function toggleResume() {
    const viewer = document.getElementById("resume-viewer");
    if (viewer.style.display === "none" || viewer.style.display === "") {
      viewer.style.display = "block";
    } else {
      viewer.style.display = "none";
    }
  }
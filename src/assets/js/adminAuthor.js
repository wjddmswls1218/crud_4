let prevPk = "";

const bookDetailhandler = (pk) => {
  if (prevPk !== "") {
    const prevBox = document.getElementById(prevPk);
    prevBox.style.display = "none";
  }

  const box = document.getElementById(pk);
  box.style.display = "block";

  prevPk = pk;
};

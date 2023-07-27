// Simple visit counter using localStorage
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount);
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Update the visit count on the page
document.getElementById('visitCount').textContent = visitCount;

function toAnimation() {
    window.location.href = 'https://drive.google.com/drive/folders/1N88A3eZg1iN1bhmZHHcAzC-rMnzNNOlL?usp=drive_link';
  }

function toAssociation() {
  window.location.href = 'https://drive.google.com/drive/folders/1Wl-uF4Ua11ABJ_iqJqr2orNUOKkDEo1D?usp=drive_link';
  }

function toBookcover() {
  window.location.href = 'https://drive.google.com/drive/folders/1sFCHuuUGhIm1OY1MqYIyu3aL8TaMB51_?usp=drive_link';
}

function toCryptera() {
  window.location.href = 'https://drive.google.com/drive/folders/1QHw7TdQ7H6T8oMzywai5FEG5N6U-VROZ?usp=drive_link';
}

function toNSS() {
  window.location.href = 'https://drive.google.com/drive/folders/1xqeun6n2VsRg8RjW0nAea_npV8HwepBN?usp=drive_link';
}

function toThenamudhu() {
  window.location.href = 'https://drive.google.com/drive/folders/1YwGu0XFWMMlrtvNvctyac5PWb6z2yHBx?usp=drive_link';
}

function toUI() {
  window.location.href = 'https://drive.google.com/drive/folders/1eXhUTUniz5LySy1C9j9IzQT7nhRQXJc0?usp=drive_link';
}
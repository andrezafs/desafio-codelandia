function searchNews() {
  let input = document.getElementById('search').value
  input = input.toLowerCase();
  let news = document.getElementsByClassName('news');

  for (i = 0; i< news.length; i++) {
    if (!news[i].innerHTML.toLowerCase().includes(input)) {
      news[i].style.display="none";
  }
  else {
      news[i].style.display="block";                 
  }
  }
}
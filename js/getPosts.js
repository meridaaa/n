$(document).ready(function () {
  featureNews();
});

function featureNews() {
  const url = "http://37.32.29.134:3000/api/v1/news/interested?limit=4";
  fetch(url)
    .then((data) => data.json())
    .then((news) => {
      console.log(news);
      news.array.forEach((element, idx) => {
        const fNews = document.getElementById("featureNews");
        const div = document.createElement("div");
        div.classList.add("col-md-6 p-rl-1 p-b-2");
        const how2 = document.createElement("h2");
        h2.innetText = "How";
        div.appendChild(h2);
        fNews.appendChild(div);
        if (idx === 0) {
          const fNews = document.getElementById("featureNews");
          const div = document.createElement("div");
          div.classList.add("col-md-6 p-rl-1 p-b-2");
          const how2 = document.createElement("h2");
          h2.innetText = "How";
          div.appendChild(h2);
          fNews.appendChild(div);
        } else {
          const fNews = document.getElementById("featureNews");
          const div = document.createElement("div");
          div.classList.add("col-md-6 p-rl-1");

          fNews.appendChild(div);
          const div_3 = document.createElement("div");
          div_3.classList.add("row m-rl--1");
          div.classList.add("div_3");
        }

        // let image = array[Math.floor(Math.random() * array.length)]
        const div1 = document.createElement("div");
        div1.classList.add("bg-img1 how1 pos-relative");
        div.style.backgroundImage =
          images[Math.floor(Math.random() * images.length)];
        div.appendChild(div1);

        const a = document.createElement("a");
        a.classList.add(
          "dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
        );
        a.innerHTML = element.subjects;
        div1.appendChild(a);

        const h3 = document.createElement("h3");
        h3.classList.add("how1-child2 m-t-14 m-b-10");
        h3.innetText = element.title;
        div1.appendChild(h3);

        const a1 = document.createElement("a");
        a1.classList.add(
          "dis-block how1-child2 f1-s-2 cl0 bo-all-1 bocl0 hov-btn1 trans-03 p-rl-5 p-t-2"
        );
        a1.innerHTML = element.title;
        div1.appendChild(a1);

        const span = document.createElement("span");
        span.classList.add("how1-child2");
        div1.appendChild(span);

        const span1 = document.createElement("span");
        span1.classList.add("f1-s-4 cl11");
        span1.innerHTML = element.writer;
        span.appendChild(span1);

        const span2 = document.createElement("span");
        span2.classList.add("f1-s-4 cl11");
        span2.innerHTML = element.createdAt;
        span.appendChild(span2);
      });
      // const div = document.createElement('div');
      //  div.id = 'featureid';
      //  const a = document.createElement('a');
      //  a.innerHTML = news.subjects
      //  div.appendChild(a)

      //  const h3 = document.createElement('h3');
      //  h3.innetText = news.title;
      //  const a = document.createElement('a');
      //  a.innerHTML = news.subjects
    })
    .catch((e) => {
      alert("There is an error please try again");
    });
}

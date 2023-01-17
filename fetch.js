async function fetchData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data.articles;
  } catch (err) {
    // console.log(err);
  }
}

let render = (data, container) => {
  data.forEach(({ urlToImage, title, content, description }) => {
    const div = document.createElement("div");

    const child1 = document.createElement("div");
    const child2 = document.createElement("div");

    const img = document.createElement("img");
    img.src = urlToImage;

    const Title = document.createElement("h2");
    Title.innerText = title;

    const Con = document.createElement("p");
    Con.innerText = content;

    const Des = document.createElement("p");
    Des.innerText = description;

    child1.append(img);
    child2.append(Title, Con, Des);
    div.append(child1, child2);
    container.append(div);
  });
};

// function navbar() {
//     return `

// export { fetchData, render,navbar };

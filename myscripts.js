const item = document.getElementById("thing");

const url = "https://catalogue.data.govt.nz/api/3/action/package_search?q=author:";

const namesArr = ["Statistics-NZ", "Stats-NZ", "Statistics-New-Zealand"]

const json = () => {
  namesArr.forEach(name => {
    let urlToFetch = `${url}${name}`;
    fetch(urlToFetch)
  .then(response => response.json())
  .then(data => render(data, name));
  })
};

const render = (data, name) => {
  console.log(data);
  const count = data.result.count;
  item.innerHTML += `<p>For the author name: ${name}. There ${count === 1 ? 'is' : 'are'} currently ${count} dataset${count !== 1 ? 's' : ''} in data.govt.nz.</p>`;
}

json();



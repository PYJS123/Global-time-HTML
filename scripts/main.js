const url = 'http://worldtimeapi.org/api/timezone/';
async function getTime(place) {
  const response = await fetch(url+place);
  const data = await response.json();
  return data;
}

async function writeData() {
  const elems = document.getElementsByClassName('panel');
  for (let i = 0; i < elems.length; i++) {
    const name = elems[i].innerHTML;
    const cities = await fetch(url);
    // let i = 0;
    // while (i < )
    console.log(cities);
  }
}

writeData()

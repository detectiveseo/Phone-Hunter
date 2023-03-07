// https://openapi.programming-hero.com/api/phones?search=${searchText}

const productsLoad = async(textFiled) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${textFiled}`
    const respons = await fetch(url);
    const resData = await respons.json();
    displayData(resData);
}

const searchProssece = () => {
    const inputFiled = document.getElementById('searchFiled');
    const inputText = inputFiled.value;
    productsLoad(inputText);
}

const displayData = (datas) => {
    const gridWarper = document.getElementById('product-warper');
    datas.data.forEach( singleData => {
        const grid = document.createElement('div');
        grid.classList.add("col-4");
        grid.innerHTML = `
        <div class="border rounded p-3 m-3 d-flex flex-column justify-content-center shadow">
            <img src=${singleData.image}>
            <div>
            <h3>${singleData.phone_name}</h3>
            <p>${singleData.brand}</p>
            <button onclick="modalOpen('${singleData.slug}')" class="bg-primary text-white rounded p-2">See More Detials</button>
            </div>
        </div>`;
        gridWarper.appendChild(grid);
    });
}

const modalOpen = (phone) => {
    console.log(phone);
}
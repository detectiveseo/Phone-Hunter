// https://openapi.programming-hero.com/api/phones?search=${searchText}

const productsLoad = async(textFiled) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${textFiled}`
    const respons = await fetch(url);
    const resData = await respons.json();
    loadingPlaceholder(true)
    displayData(resData);
    loadingPlaceholder(false)
}

const searchProssece = () => {
    const inputFiled = document.getElementById('searchFiled');
    const inputText = inputFiled.value;
    productsLoad(inputText);
}

const displayData = (datas) => {
    const gridWarper = document.getElementById('product-warper');
    gridWarper.innerHTML = " ";
    datas.data.forEach( singleData => {
        const grid = document.createElement('div');
        grid.classList.add("col-4");
        grid.innerHTML = `
        <div class="border rounded p-3 m-3 d-flex flex-column justify-content-center shadow">
            <img src=${singleData.image}>
            <div>
            <h3>${singleData.phone_name}</h3>
            <p>${singleData.brand}</p>
                <button onclick="openModal('${singleData.slug}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
                </button>
            </div>
        </div>`;
        gridWarper.appendChild(grid);
    });
}

const openModal = async (phone) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`;
    const respons = await fetch(url);
    const resJson = await respons.json();
    const data = resJson.data;
    modalDiv(data);
}

const modalDiv = (data) => {

    const title = data.name;
    const brand = data.brand;
    const releaseDate = data.releaseDate;
    document.getElementById('modal_title').innerText = title;
    document.getElementById('modal_phone_brand').innerText = brand;
    document.getElementById('modal_phone_born_date').innerText = releaseDate;
} 

const loadingPlaceholder = (forCase) => {
    const loader = document.getElementById('loading_placeholder');

    if(forCase === true){
        loader.classList.remove('d-none')
    }
    else{
        loader.classList.add('d-none')
    }
}
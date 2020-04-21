window.addEventListener('load', ()=>{
    const api = `https://corona.lmao.ninja/v2/countries`;
    fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            let arrayData;
            for(let i = 0; i < data.length; i++){
                arrayData = data[i];

            //Create Page Element
            const div = document.createElement('div');
            const parag1 = document.createElement('p');
            const parag2 = document.createElement('p');
            const parag3 = document.createElement('p');
            const parag4 = document.createElement('p');
            const parag5 = document.createElement('p');
            const parag6 = document.createElement('p');
            const img = document.createElement('img');
            const searchBox = document.createElement('input');
            const searchTool = document.createElement('button')

                //Setting Content
            const {country,cases, todayCases, deaths, todayDeaths, recovered, countryInfo} = arrayData;
            parag1.textContent = 'Country Name:' + country;
            parag2.textContent = 'Cases:' + cases;
            parag3.textContent = 'Today Cases:' + todayCases
            parag4.textContent = 'Deaths:' + deaths;
            parag5.textContent = 'Today Deaths:' + todayDeaths;
            parag6.textContent = 'Recovered:' + recovered;
                //Appending Section
           
            div.appendChild(img);
            div.appendChild(parag1);
            div.appendChild(parag2);
            div.appendChild(parag3);
            div.appendChild(parag4);
            div.appendChild(parag5);
            div.appendChild(parag6);
           
            const imgsrc = countryInfo.flag;
            div.setAttribute('class', 'contents')
            img.setAttribute('src', `${imgsrc}`)
            img.setAttribute('class', 'flags')

            div.setAttribute('id', 'toSearch')
            const container = document.querySelector('.container');
            container.appendChild(div); 

            var toSearch = document.getElementById('toSearch');
            


            }

        })

        const seacrhBox = document.getElementById('search-box');

        seacrhBox.addEventListener('keyup', filters);

        function filters(){
            let searchValue = document.getElementById('search-box').value.toUpperCase();

            

            for(let j = 0; j < toSearch.length; j++){
                let divSearch = document.querySelector('.contents');

                divSearch = toSearch[j];

                if(divSearch.innerHTML.toUpperCase().indexOf(searchValue) > -1){
                    divSearch.style.display = '';
                } else{
                   divSearch.style.display = 'none';
                }
            }

        }
})

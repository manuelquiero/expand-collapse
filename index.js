
const EventBindItems = () =>{
    document.querySelectorAll('.toggle-btn').forEach(i => {
        i.addEventListener('click', e => {
            const isExpanded = e.target.dataset['expand'] === '1';
            const content = e.target.nextElementSibling;
            const iconElem = e.target.children[1];

            document.querySelectorAll('.item-main').forEach(a => {
                const toggleBtn = a.querySelector('.toggle-btn');
                toggleBtn.classList.remove('expanded');

                const hideItems = a.querySelector('.item-content-wrapper');

                hideItems.style.display = 'none';

                const icon = a.querySelector('.toggle-icon');
                icon.innerHTML = '&plus;';
            });
            //collapse
            if (isExpanded) {
                iconElem.innerHTML = '&plus;';
                content.style.display = 'none';
            } else {
                //expand
                iconElem.innerHTML = '&minus;';
                content.style.display = 'block';
                e.target.classList.add('expanded');
            }
            
            e.target.dataset['expand'] = isExpanded ? '0' : '1';
        });
    });
}


const GenerateItems = () => {
    let htmls = '';
    for(let i = 1; i <= 10; i++){
        htmls += `<div class="item-main">

        <div class="toggle-btn" data-expand="0">
            <span class="toggle-btn-name">Toggle Menu ${i}</span>
            <span class="toggle-icon">&plus;</span>
        </div>
        <div class="item-content-wrapper">
            <div class="items">Item 1</div>
            <div class="items">Item 2</div>
            <div class="items">Item 3</div>
        </div>

    </div>`;
    }
    document.getElementById('wrapper').innerHTML = htmls;
    EventBindItems();
}
GenerateItems();
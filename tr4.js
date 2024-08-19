function groupByCategory(items) {

    const grupo =  {};

    items.forEach(item => {
        
        const falculdade = item.falculdade;

        if (!grupo[falculdade]) {
            grupo[falculdade] = [];
        }

        grupo[falculdade].push(item);
    });

    return grupo; 
}

const items = [
    {name: 'derick 1', falculdade: 'Eng. Software'},
    {name: 'vitoria 2', falculdade: 'Eng. Quimica'},
    {name: 'monique 3', falculdade: 'Eng. Civil'},
    {name: 'joão 4', falculdade: 'Eng. Eletrica'},
    {name: 'fabiana 5', falculdade: 'Eng. Econimica'}
];

const result = groupByCategory(items);
console.log(result);


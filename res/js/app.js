// const pattern = `/give ${selector} ${item_type} 0 1 {CustomModelData:${custom_model_data}}`
const item_list = [
    //bread
    {
        item: "bread",
        textures: [
            {
                name : "brioche",
                cmd: 1
            },
            {
                name : "cake_au_raisin",
                cmd: 2
            },
            {
                name : "croissant",
                cmd: 3
            },
            {
                name : "donut",
                cmd: 4
            },
            {
                name : "pain_brioche",
                cmd: 5
            },
            {
                name : "pate_a_pizza",
                cmd: 6
            },
            {
                name : "brioche_aux_raisins",
                cmd: 7
            },
            {
                name : "brioche_tressee",
                cmd: 8
            },
            {
                name : "prefous",
                cmd: 9
            },
            {
                name : "baguette",
                cmd: 10
            },
            {
                name : "pain_de_mie",
                cmd: 12
            },
        ]
    },
    //glistering_melon_slice
    {
        item: "glistering_melon_slice",
        textures: [
            {
                name : "piece_cuivre",
                cmd: 1
            },
            {
                name : "piece_argent",
                cmd: 2
            },
            {
                name : "piece_or",
                cmd: 3
            },
            {
                name : "perle_brune",
                cmd: 4
            },
            {
                name : "perle_blonde",
                cmd: 5
            },
        ]
    },
    //knowledge_book
    {
        item: "knowledge_book",
        textures: [
            {
                name : "huitre",
                cmd: 1
            },
            {
                name : "huitre_vide",
                cmd: 2
            },
            {
                name : "coquille_huitre",
                cmd: 3
            },
            {
                name : "marteau",
                cmd: 4
            },
            {
                name : "cle_fer",
                cmd: 5
            },
            {
                name : "cle_cuivre",
                cmd: 6
            },
            {
                name : "cle_or",
                cmd: 7
            },
            {
                name : "cadena_fer",
                cmd: 8
            },
            {
                name : "cadena_cuivre",
                cmd: 9
            },
            {
                name : "cadena_or",
                cmd: 10
            },
            {
                name : "lanterne_eteinte",
                cmd: 11
            },
            {
                name : "lanterne_allumee",
                cmd: 12
            },
            {
                name : "pignon",
                cmd: 13
            },
            {
                name : "trompette",
                cmd: 14
            },
            {
                name : "lettre_ouverte",
                cmd: 15
            },
            {
                name : "lettre_fermee",
                cmd: 16
            },
            {
                name : "lettre_enroulee",
                cmd: 17
            },
            {
                name : "lettre_dechiree",
                cmd: 18
            },
            {
                name : "bourse",
                cmd: 19
            },
        ]
    },
    //cod
    {
        item: "cod",
        textures: [
            {
                name : "brochet",
                cmd: 1
            },
            {
                name : "carpe",
                cmd: 2
            },
            {
                name : "thon",
                cmd: 3
            },
            {
                name : "truite",
                cmd: 4
            },
            {
                name : "sardine",
                cmd: 5
            },
            {
                name : "meduse",
                cmd: 6
            },
        ]
    },
    //snowball
    {
        item: "snowball",
        textures: [
            {
                name : "pine",
                cmd: 1
            },
        ]
    },
    //golden_carrot
    {
        item: "golden_carrot",
        textures: [
            {
                name : "confiture",
                cmd: 1
            },
            {
                name : "meule_de_fromage",
                cmd: 2
            },
            {
                name : "fromage_1",
                cmd: 3
            },
            {
                name : "fromage_2",
                cmd: 4
            },
        ]
    },
    //milk_bucket
    {
        item: "milk_bucket",
        textures: [
            {
                name : "seau_de_fromage",
                cmd: 1
            },
        ]
    },
    //potion
    {
        item: "potion",
        potion_color: "16777215",
        textures: [
            {
                name : "bouteille_1",
                cmd: 1
            },
            {
                name : "bouteille_2",
                cmd: 2
            },
            {
                name : "bouteille_3",
                cmd: 3
            },
            {
                name : "bouteille_4",
                cmd: 4
            },
            {
                name : "cafe",
                cmd: 5
            },
            {
                name : "capuccino",
                cmd: 6
            },
            {
                name : "expresso",
                cmd: 7
            },
            {
                name : "biere",
                cmd: 8
            },
            {
                name : "sonde_urinaire",
                cmd: 9
            },
            {
                name : "bouteille_5",
                cmd: 10
            },
        ]
    },
    //carrot
    {
        item: "carrot",
        textures: [
            {
                name : "carotte_sauvage",
                cmd: 1
            },
            {
                name : "pomme_sauvage",
                cmd: 2
            },
            {
                name : "tomate",
                cmd: 3
            },
            {
                name : "cerises",
                cmd: 4
            },
            {
                name : "cote_de_boeuf",
                cmd: 5
            },
            {
                name : "cote_de_porc",
                cmd: 6
            },
            {
                name : "citron",
                cmd: 7
            },
            {
                name : "cone_de_glace",
                cmd: 8
            }
        ]
    },
    //spider_eye
    {
        item: "spider_eye",
        textures: [
            {
                name : "champignon_sauvage",
                cmd: 1
            },
        ]
    },
]

let active_item;

item_list.forEach(category => {
    category.textures.forEach(texture => {
        let item_dom = document.createElement('div')
        item_dom.classList.add("item")
        item_dom.setAttribute('tabindex', 1)
        item_dom.setAttribute('data-item', category.item)
        item_dom.setAttribute('data-cmd', texture.cmd)
        if(category.potion_color) {
            item_dom.setAttribute('data-potion-color', category.potion_color)
        }
        item_dom.addEventListener('click', (e) => {
            if(active_item) {
                active_item.classList.remove('active')
            }
            item_dom.classList.add('active')
            active_item = item_dom
        })
        let image = new Image()
        let src = `https://voidsplit.github.io/angmar_items_generator/res/images/${texture.name}.png`
        image.src = src
        item_dom.append(image)
        document.getElementById('item_selector_grid').append(item_dom)
    })
})
const selector_input = document.getElementById('selector_input')

const generate = () => {
    console.log(active_item.getAttribute("data-potion-color"))
    const pattern = `/give ${selector_input.value} minecraft:${active_item.getAttribute("data-item")} 0 1 {${active_item.getAttribute("data-potion-color") ? `CustomPotionColor:${active_item.getAttribute("data-potion-color")},` : ""}CustomModelData:${active_item.getAttribute("data-cmd")}}`
    document.getElementById('result').value = pattern
}
const copy_output = () => {
    const output = document.getElementById('result')

    output.select()
    output.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(output.value)
}
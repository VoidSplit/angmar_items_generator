// const pattern = `/give ${selector} ${item_type} 0 1 {CustomModelData:${custom_model_data}}`
const item_list = [
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
        ]
    },
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
                name : "golden_key",
                cmd: 5
            },
        ]
    },
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
        ]
    },
    {
        item: "snowball",
        textures: [
            {
                name : "pine",
                cmd: 1
            },
        ]
    },
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
    {
        item: "milk_bucket",
        textures: [
            {
                name : "seau_de_fromage",
                cmd: 1
            },
        ]
    },
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
let item_list_array = [
    {
        category: "Food",
        name: "baguette",
        lore: "ceci est un lore",
        display_name: "Baguette",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 4,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Drink",
        name: "biere",
        lore: "",
        display_name: "Biere",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "bourse",
        lore: "",
        display_name: "Bourse",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Drink",
        name: "bouteille_1",
        lore: "",
        display_name: "Bouteille",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Drink",
        name: "bouteille_2",
        lore: "",
        display_name: "Bouteille",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Drink",
        name: "bouteille_3",
        lore: "",
        display_name: "Bouteille",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Drink",
        name: "bouteille_4",
        lore: "",
        display_name: "Bouteille",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Drink",
        name: "bouteille_5",
        lore: "",
        display_name: "Bouteille",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Food",
        name: "brioche_aux_raisins",
        lore: "",
        display_name: "Brioche aux raisins",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 5,
        nutrition: 5,
        drinkable: false
    },
    {
        category: "Food",
        name: "brioche_tressee",
        lore: "",
        display_name: "Brioche tressée",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 4,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "brioche",
        lore: "",
        display_name: "Brioche",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 4,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "brochet",
        lore: "",
        display_name: "Brochet",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 2,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cachet_de_cire",
        lore: "",
        display_name: "Cachet de cire",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cadena_en_cuivre",
        lore: "",
        display_name: "Cadena en cuivre",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cadena_en_fer",
        lore: "",
        display_name: "Cadena en fer",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cadena_en_or",
        lore: "",
        display_name: "Cadena en or",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Drink",
        name: "cafe",
        lore: "",
        display_name: "Cafe",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Food",
        name: "cake_au_raisin",
        lore: "",
        display_name: "Cake au raisin",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 6,
        nutrition: 5,
        drinkable: false
    },
    {
        category: "Drink",
        name: "capuccino",
        lore: "",
        display_name: "Capuccino",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Food",
        name: "carotte_sauvage",
        lore: "",
        display_name: "Carotte Sauvage",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 2,
        drinkable: false
    },
    {
        category: "Food",
        name: "carpe",
        lore: "",
        display_name: "Carpe",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "cerises",
        lore: "",
        display_name: "Cerises",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 2,
        drinkable: false
    },
    {
        category: "Food",
        name: "champignon_sauvage",
        lore: "",
        display_name: "Champignon Sauvage",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 2,
        drinkable: false
    },
    {
        category: "Food",
        name: "citron",
        lore: "",
        display_name: "Citron",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 2,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cle_en_cuivre",
        lore: "",
        display_name: "Clé en cuivre",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cle_en_fer",
        lore: "",
        display_name: "Clé en fer",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cle_en_or",
        lore: "",
        display_name: "Clé en or",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "cone_de_glace",
        lore: "",
        display_name: "Cône de glace",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "confiture",
        lore: "",
        display_name: "Confiture",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 13,
        nutrition: 5,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "coquille_huitre",
        lore: "",
        display_name: "Coquille d'huitre",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "cote_de_boeuf",
        lore: "",
        display_name: "Côte de boeuf",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 10,
        nutrition: 10,
        drinkable: false
    },
    {
        category: "Food",
        name: "cote_de_porc",
        lore: "",
        display_name: "Côte de porc",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 9,
        nutrition: 8,
        drinkable: false
    },
    {
        category: "Food",
        name: "croissant",
        lore: "",
        display_name: "Croissant",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 5,
        nutrition: 4,
        drinkable: false
    },
    {
        category: "Food",
        name: "donut",
        lore: "",
        display_name: "Donut",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 3,
        nutrition: 5,
        drinkable: false
    },
    {
        category: "Drink",
        name: "expresso",
        lore: "",
        display_name: "Expresso",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Food",
        name: "fromage_1",
        lore: "",
        display_name: "Fromage",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "fromage_2",
        lore: "",
        display_name: "Fromage",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "gateau_d_anniversaire",
        lore: "",
        display_name: "Gateau d'anniversaire",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 10,
        nutrition: 13,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "golden_key",
        lore: "",
        display_name: "Clé dorée",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "huitre_vide",
        lore: "",
        display_name: "Huitre vide",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "huitre",
        lore: "",
        display_name: "Huitre",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 1,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lanterne_allumee",
        lore: "",
        display_name: "Lanterne allumée",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lanterne_eteinte",
        lore: "",
        display_name: "Lanterne éteinte",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lettre_dechiree",
        lore: "",
        display_name: "Lettre déchirée",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lettre_enroulee",
        lore: "",
        display_name: "Lettre enroulée",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lettre_fermee",
        lore: "",
        display_name: "Lettre fermée",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "lettre_ouverte",
        lore: "",
        display_name: "Lettre ouverte",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "marteau",
        lore: "",
        display_name: "Marteau",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "meduse",
        lore: "",
        display_name: "Meduse",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "meule_de_fromage",
        lore: "",
        display_name: "Meule de fromage",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 15,
        nutrition: 16,
        drinkable: false
    },
    {
        category: "Food",
        name: "pain_au_chocolat",
        lore: "",
        display_name: "Pain au chocolat",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "pain_brioche",
        lore: "",
        display_name: "Pain brioché",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "pain_de_mie",
        lore: "",
        display_name: "Pain de mie",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "pate_a_pizza",
        lore: "",
        display_name: "Pâte à pizza",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 1,
        nutrition: 1,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "perle_blonde",
        lore: "",
        display_name: "Perle blonde",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "perle_brune",
        lore: "",
        display_name: "Perle brune",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "piece_argent",
        lore: "",
        display_name: "Pièce d'argent",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "piece_cuivre",
        lore: "",
        display_name: "Pièce de cuivre",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "piece_or",
        lore: "",
        display_name: "Pièce d'or",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "pignon",
        lore: "",
        display_name: "Pignon",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Projectile",
        name: "pine",
        lore: "",
        display_name: "Pomme de pin",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "prefous",
        lore: "",
        display_name: "Préfous",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 4,
        nutrition: 5,
        drinkable: false
    },
    {
        category: "Food",
        name: "sardine",
        lore: "",
        display_name: "Sardine",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Drink",
        name: "seau_de_fromage",
        lore: "",
        display_name: "Seau de fromage",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Drink",
        name: "sonde_urinaire",
        lore: "",
        display_name: "Sonde urinaire",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: true
    },
    {
        category: "Food",
        name: "thon",
        lore: "",
        display_name: "Thon",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Food",
        name: "tomate",
        lore: "",
        display_name: "Tomate",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
    {
        category: "Miscellaneous",
        name: "trompette",
        lore: "",
        display_name: "Trompette",
        is_eatable: false,
        eatable_infinite: false,
        saturation: undefined,
        nutrition: undefined,
        drinkable: false
    },
    {
        category: "Food",
        name: "truite",
        lore: "",
        display_name: "Truite",
        is_eatable: true,
        eatable_infinite: false,
        saturation: 2,
        nutrition: 3,
        drinkable: false
    },
]
//give VoidSplit1 minecraft:clock 1 0 [item_model="cosmetics:pignon",consumable={animation:"drink",has_consume_particles:false,sound:"minecraft:entity.generic.drink"}]

// let displayed = flatten_categories
let item_list = document.getElementById('item_list')
let output = document.getElementById('output_input')

let image_preview_box = document.getElementById('image_preview_box')
let name_box = document.getElementById('name_box')
let lore_box = document.getElementById('lore_box')

let name_input = document.getElementById('name_input')
let lore_input = document.getElementById('lore_input')
let quantity_input = document.getElementById('quantity')
let player_selector = document.getElementById('player_selector')

let eatable_yes = document.getElementById('eatable_yes')
let eatable_no = document.getElementById('eatable_no')
let eatable_value = false

let infinity_yes = document.getElementById('infinity_yes')
let infinity_no = document.getElementById('infinity_no')
let infinity_value = false

let drinkable_yes = document.getElementById('drinkable_yes')
let drinkable_no = document.getElementById('drinkable_no')
let drinkable_value = false

let nutrition_input = document.getElementById('nutrition')
let saturation_input = document.getElementById('saturation')

let selected_item;

let custom_name = ""
let custom_lore = ""
let custom_lore_cmd = ""

let nutrition = 1
let saturation = 1
let quantity = 1
let selector = "@p"
let base_item = "clock"
let item_name = undefined

// liste items
item_list_array.forEach(item => {
    let DOM = document.createElement('div')
    DOM.classList = "item"
    let DOM_img = document.createElement('img')
    DOM_img.src = `./assets/items/${item.name}.png`
    DOM.append(DOM_img)
    item_list.append(DOM)
    DOM.addEventListener('click', () => {
        potion_color = undefined
        if(selected_item) {
            selected_item.classList.remove('active')
        }
        DOM.classList.add('active')
        selected_item = DOM


        image_preview_box.src = `./assets/items/${item.name}.png`

        item_name = item.name
        custom_name = item.display_name
        custom_lore = item.lore

        name_input.value = item.display_name
        lore_input.value = item.lore
        if(item.nutrition !== undefined) {
            nutrition_input.value = item.nutrition
        } else {
            nutrition_input.value = 0
        }
        if(item.saturation !== undefined) {
            saturation_input.value = item.saturation
        } else {
            saturation_input.value = 0
        }
        if(item.is_eatable === true) {
            eatable_value = true
            eatable_no.classList.remove('selected')
            eatable_yes.classList.add('selected')
        } else {
            eatable_value = false
            eatable_no.classList.add('selected')
            eatable_yes.classList.remove('selected')
        }
        if(item.eatable_infinite === true) {
            infinity_value = true
            infinity_no.classList.remove('selected')
            infinity_yes.classList.add('selected')
        } else {
            infinity_value = false
            infinity_no.classList.add('selected')
            infinity_yes.classList.remove('selected')
        }
        update()
    })
})

output.value = ``

// update command
const update = () => {
    if(selected_item) {
        visualizer_content.classList = "visible"
        
        if(custom_name == "") { custom_name = cmd_name}

        name_box.textContent = custom_name
        lore_box.textContent = custom_lore
    
        let command = `/give ${selector} minecraft:${base_item} ${quantity} 0 [item_model="cosmetics:${item_name}",${eatable_value === true ? `consumable={},food={nutrition:${nutrition},saturation:${saturation},can_always_eat:${infinity_value}},` : ``}${drinkable_value === true ? `consumable={animation:"drink",has_consume_particles:false,sound:"minecraft:entity.generic.drink"}` : ``}minecraft:custom_name={"text":"${custom_name}","italic":false} ${custom_lore !== "" ? `,${get_lore_cmd()}` : ``}]`

        output.value = command
    }
}

// item name
name_input.addEventListener('input', (e) => {
    custom_name = e.target.value
    update()
})
// player selector
player_selector.addEventListener('input', (e) => {

    if(e.target.value.length > 0) selector = e.target.value
    else selector = "@s"
    update()
})
// quantity
quantity_input.addEventListener('input', (e) => {
    if(e.target.value.length > 0) {
        if(e.target.value > 0 && e.target.value <= 64) quantity = e.target.value
        else quantity = 1
    }
    else quantity = 1
    update()
})
// nutrition
nutrition_input.addEventListener('input', (e) => {
    if(e.target.value.length > 0) {
        if(e.target.value > 0 && e.target.value <= 64) nutrition = e.target.value
        else nutrition = 1
    }
    else nutrition = 1
    update()
})
// saturation
saturation_input.addEventListener('input', (e) => {
    if(e.target.value.length > 0) {
        if(e.target.value > 0 && e.target.value <= 64) saturation = e.target.value
        else saturation = 1
    }
    else saturation = 1
    update()
})
// lore
lore_input.addEventListener('input', (e) => {
    let lines = []
    e.target.value.split("\n").forEach(line => {
        lines.push(`{"text":"${line}","italic":false}`)
    })
    let lore_command = `lore=[${lines.join(',')}]`
    custom_lore = e.target.value.split("\n").join("\n")
    custom_lore_cmd = lore_command
    update()
})

const get_lore_cmd = () => {
    let lines = []
    custom_lore.split("\n").forEach(line => {
        lines.push(`{"text":"${line}","italic":false}`)
    })
    let lore_command = `lore=[${lines.join(',')}]`

    return lore_command
}


// eatable toggle switch
eatable_no.addEventListener('click', (e) => {
    eatable_value = false
    eatable_no.classList.add('selected')
    eatable_yes.classList.remove('selected')
    update()
})
eatable_yes.addEventListener('click', (e) => {
    eatable_value = true
    eatable_no.classList.remove('selected')
    eatable_yes.classList.add('selected')

    
    drinkable_value = false
    drinkable_no.classList.add('selected')
    drinkable_yes.classList.remove('selected')
    update()
})

// infinity toggle switch
infinity_no.addEventListener('click', (e) => {
    infinity_value = false
    infinity_no.classList.add('selected')
    infinity_yes.classList.remove('selected')
    update()
})
infinity_yes.addEventListener('click', (e) => {
    infinity_value = true
    infinity_no.classList.remove('selected')
    infinity_yes.classList.add('selected')
    

    drinkable_value = false
    drinkable_no.classList.add('selected')
    drinkable_yes.classList.remove('selected')
    update()
})

// drinkable toggle switch
drinkable_no.addEventListener('click', (e) => {
    drinkable_value = false
    drinkable_no.classList.add('selected')
    drinkable_yes.classList.remove('selected')
    update()
})
drinkable_yes.addEventListener('click', (e) => {
    drinkable_value = true
    drinkable_no.classList.remove('selected')
    drinkable_yes.classList.add('selected')

    
    eatable_value = false
    eatable_no.classList.add('selected')
    eatable_yes.classList.remove('selected')

    infinity_value = false
    infinity_no.classList.add('selected')
    infinity_yes.classList.remove('selected')
    update()
})


let output_btn = document.getElementById('output_btn')
let copied_popup = document.getElementById('copied_popup')


let is_started = false
const start_pop_up = () => {
    
    if(is_started == false) {
        is_started = true
        let value = 0
        const update_popup = () => {
            value = value + 1
            copied_popup.setAttribute('style', `--percentage: ${value}%`)
            if(value > 100) {
                copied_popup.classList.remove("visible")
                copied_popup.setAttribute('style', `--percentage: 0%`)
                is_started = false
                clearInterval(update_popup_interval)
            }
        }
    
        let update_popup_interval = setInterval(update_popup, 50)
    }

}


output_btn.addEventListener('click', () => {
    if(output.value.length > 0) {
        copied_popup.classList.add("visible")
        start_pop_up()
        output.select()
        navigator.clipboard.writeText(output.value);
    }
})

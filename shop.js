const shop = {
    owner: "Alia",
    address:{
        street: 'Kochukhet Voot er goli',
        city: 'ranbir',
        cuntry: "BD"
    },
    products: ['laptop', 'mic', 'monitor', 'Keybord'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}


console.log(shop);

const shopJSOn = JSON.stringify(shop);
console.log(shopJSOn);
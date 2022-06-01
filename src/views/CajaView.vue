<template>
  <main>
    <nav>
      <HeaderNavVue></HeaderNavVue>
    </nav>

    <div><h1>Caja</h1></div>

    <div class="caja">
      <div class="product">
        <div v-for="product in products" :key="product.price">
          <div class="card">
            <form v-on:submit.prevent="addFactura(product)">
              <img :src="product.image" alt="Denim Jeans" style="width: 100%" />
              <h1>{{ product.name }}</h1>
              <p class="price">${{ product.price }}</p>
              <p>{{ product.description }}</p>
              <p><button type="submit">Add to Cart</button></p>
            </form>
          </div>
        </div>
      </div>

      <div class="factura">
        <form v-on:submit.prevent="addOrder">
          <h1>Factura</h1>
          <div>
            <ul>
              <li v-for="product in productsFactura" :key="product">
                {{ product.name }} {{ product.price }}
              </li>
            </ul>
          </div>
          <h2>Total= {{ getTotal() }}</h2>
          <p><button type="submit">Hecho</button></p>
        </form>
      </div>
    </div>

    <div class="ordenes">
      <h1>Ordenes</h1>

      <div v-for="order in orders" :key="order.price">
        <div class="card">
          <form>
            <h1>{{ order.name }}</h1>
            <p class="price">${{ order.price }}</p>
            <p>{{ orders.filter((order) => order.total > 0) }}</p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderNavVue from "../components/HeaderNav.vue";
export default {
  data() {
    return {
      products: [
        {
          name: "Mekato",
          image: "src/assets/img/DE-TODITO-NATURAL-X-400G.png",
          price: 200,
          description: "Pequeño refrigerio que se toma entre comida",
          cantidad: 0,
        },
        {
          name: "Salchicha",
          image: "src/assets/img/kisspng-salchicha.png",
          price: 1200,
          description:
            "Las salchichas son embutidos a base de carne picada. Para la elaboración se suelen aprovechar las partes del animal, como la grasa, las vísceras o sangre.",
        },
        {
          name: "Huevos",
          image: "src/assets/img/huevo.png",
          price: 400,
          description:
            "Huevo que ponen las aves, especialmente la gallina, y que se toma como alimento.",
          cantidad: 0,
        },
        {
          name: "Moto",
          image: "src/assets/img/Nkd-73-akt-motos.png",
          price: 10000000,
          description:
            "Una motocicleta, comúnmente conocida en español con la abreviatura moto, es un vehículo de dos ruedas, impulsado por un motor de combustión interna a gasolina que acciona la rueda trasera",
          cantidad: 0,
        },
        {
          name: "Celular",
          image: "src/assets/img/Realme-C21Y.png",
          price: 250000,
          description:
            "Un teléfono móvil o teléfono celular es un dispositivo portátil que puede hacer o recibir llamadas a través de una portadora de radiofrecuencia, mientras el usuario se está moviendo dentro de un área de servicio telefónico.",
          cantidad: 0,
        },
      ],
      newProduct: {},
      productsFactura: [],
      newOrder: {},
      orders: [],
    };
  },
  methods: {
    addOrder() {
      let total = { total: this.getTotal() };
      this.productsFactura.push(total);
      this.newOrder = this.productsFactura;
      this.orders.push(this.newOrder);
      this.productsFactura = [];
      console.log(this.orders);
    },
    addFactura(newProduct) {
      this.productsFactura.push(newProduct);
    },
    getTotal() {
      let suma = this.productsFactura.reduce((a, b) => {
        return (a += b.price);
      }, 0);
      return suma;
    },
  },
  components: {
    HeaderNavVue,
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.caja {
  display: flex;
  width: 100%;
}

.ordenes {
  display: block;
  background-color: aqua;
}

.factura {
  background-color: #333;
  width: 500px;
  height: 100%;
  position: sticky;
  top: 0%;
}

.factura h1 {
  text-align: center;
  background-color: #fa8807;
  color: #000;
}

.product {
  float: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.card {
  height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  max-height: 750px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.price {
  color: grey;
  font-size: 22px;
}

button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #fa8807;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

button:hover {
  opacity: 0.7;
}
nav {
  position: sticky;
  top: 0%;
}
</style>

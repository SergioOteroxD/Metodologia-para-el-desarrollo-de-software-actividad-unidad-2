<template>
  <main>
    <nav>
      <HeaderNavVue></HeaderNavVue>
    </nav>

    <div id="caja"><h1>Caja</h1></div>

    <div class="caja">
      <div class="product">
        <div v-for="product in products" :key="product.price">
          <div class="card">
            <form v-on:submit.prevent="addFactura(product)">
              <img :src="product.image" alt="Denim Jeans" style="width: 100%" />
              <h1>{{ product.name }}</h1>
              <p class="price">${{ product.price }}</p>
              <p>{{ product.description }}</p>
              <p><button class="boton" type="submit">Add to Cart</button></p>
            </form>
          </div>
        </div>
      </div>

      <div class="factura">
        <form>
          <h1>Factura</h1>
          <div>
            <ul>
              <li v-for="(product, index) in productsFactura" :key="product">
                {{ product.name }} ${{ product.price }} cantidad=
                {{ product.cantidad }}
                <button v-on:click.prevent="deleteProduct(index)">x</button>
              </li>
            </ul>
          </div>
          <h2>Total= {{ getTotal() }}</h2>
          <p>
            <button class="boton" v-on:click.prevent="addOrder()">Hecho</button>
          </p>
        </form>
      </div>
    </div>

    <div id="ordenes"><h1>Ordenes</h1></div>
    <div class="ordens">
      <div class="orden" v-for="order in orders" :key="order">
        <div class="card">
          <h1>Order</h1>
          <hr />
          <div v-for="o in order" :key="o">
            <h2 v-if="o.cantidad">
              {{ o.name }} {{ o.price }} x{{ o.cantidad }}
            </h2>
            <hr />
            <h2 v-if="o.total">Total: ${{ o.total }}</h2>
          </div>
        </div>
      </div>
    </div>

    <div id="inventario"><h1>Inventario</h1></div>
    <div class="ordens">
      <div class="stock" v-for="product in products" :key="product">
        <div class="card">
          <h2>{{ product.name }} stock: {{ product.stock }}</h2>
          <div v-if="product.agotado" style="background-color: red">
            Agotando
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderNavVue from "../components/HeaderNav.vue";
import moment from "moment";
export default {
  data() {
    return {
      products: [
        {
          name: "De Todito",
          image: "src/assets/img/DE-TODITO-NATURAL-X-400G.png",
          price: 2200,
          description: "Pequeño refrigerio que se toma entre comida",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
        {
          name: "Salchicha Ranchera",
          image: "src/assets/img/salchicha-ranchera.png",
          price: 3700,
          description:
            "Las salchichas son embutidos a base de carne picada. Para la elaboración se suelen aprovechar las partes del animal, como la grasa, las vísceras o sangre.",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
        {
          name: "Huevos",
          image: "src/assets/img/huevo.png",
          price: 400,
          description:
            "Huevo que ponen las aves, especialmente la gallina, y que se toma como alimento.",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
        {
          name: "Arroz Diana",
          image: "src/assets/img/arroz-diana.png",
          price: 3800,
          description: "",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
        {
          name: "Arroz Roa",
          image: "src/assets/img/Arroz-roa.png",
          price: 4200,
          description: "",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
        {
          name: "Arroz Exito",
          image: "src/assets/img/Arroz-exito.png",
          price: 3500,
          description: "",
          cantidad: 1,
          stock: 20,
          agotado: false,
        },
      ],
      newProduct: {},
      productsFactura: [],
      orders: [],
    };
  },
  methods: {
    deleteProduct(index) {
      console.log(this.productsFactura[index].cantidad);
      if (this.productsFactura[index].cantidad > 1) {
        this.productsFactura[index].cantidad =
          this.productsFactura[index].cantidad - 1;
        console.log(this.productsFactura[index].cantidad);
      } else {
        this.productsFactura.splice(index, 1);
      }
    },
    addOrder() {
      let total = { total: this.getTotal() };
      let fecha = { fecha: this.metodoGetFecha };
      this.productsFactura.forEach((factura) => {
        this.products.forEach((product) => {
          if (factura == product) {
            product.stock -= factura.cantidad;
            if (product.stock <= 10) {
              product.agotado = true;
            }
          }
        });
      });
      this.productsFactura.push(fecha);
      this.productsFactura.push(total);
      this.orders.push(this.productsFactura);
      this.productsFactura = [];
      console.log(this.orders);
    },
    addFactura(newProduct) {
      if (this.productsFactura.some((factura) => factura === newProduct)) {
        newProduct.cantidad = newProduct.cantidad + 1;
        return;
      }
      this.productsFactura.push(newProduct);
    },
    metodoGetFecha() {
      const date = moment();
      return date;
    },
    getFecha(number) {
      let fecha = moment(number).calendar();
      return fecha;
    },
    getTotal() {
      let suma = this.productsFactura.reduce((a, b) => {
        return (a += b.price * b.cantidad);
      }, 0);
      return suma;
    },
    getNameOrder() {
      return this.orders.forEach((order) => order.name);
    },
  },
  components: {
    HeaderNavVue,
  },
};
</script>

<style scoped>
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

#caja {
  padding-top: 60px;
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

.ordens {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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

.boton {
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
  position: fixed;
  top: 0%;
  z-index: 1000;
}
</style>

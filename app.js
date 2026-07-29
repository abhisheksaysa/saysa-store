import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const productsContainer = document.getElementById("products");

async function loadProducts() {

  productsContainer.innerHTML = "<h2>Loading Products...</h2>";

  try {

    const snapshot = await getDocs(collection(db, "products"));

    productsContainer.innerHTML = "";

    snapshot.forEach((doc) => {

      const product = doc.data();

      productsContainer.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p class="price">₹${product.price}</p>
          <p>${product.description}</p>
          <button>Add to Cart</button>
        </div>
      `;

    });

    if (snapshot.empty) {
      productsContainer.innerHTML = "<h2>No Products Found</h2>";
    }

  } catch (error) {
    console.error(error);
    productsContainer.innerHTML = "<h2>Error loading products.</h2>";
  }

}

loadProducts();

let style = document.createElement("style");
let detailsHeight = document.querySelector(
  ".accordion-details__list"
).offsetHeight;
let sizeHeight = document.querySelector(".accordion-size__list").offsetHeight;
let shippingHeight = document.querySelector(".accordion__copy").offsetHeight;
style.innerHTML = `input[name="panel"]:checked ~ .accordion__content--details {height: ${
  detailsHeight + 30
}px;}
    input[name="panel"]:checked ~ .accordion__content--size {height: ${
      sizeHeight + 30
    }px;}
    input[name="panel"]:checked ~ .accordion__content--shipping {height: ${
      shippingHeight + 30
    }px;}`;
document.head.appendChild(style);

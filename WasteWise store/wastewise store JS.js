// Menu Toggle Functionality
var MenuItems = document.getElementById("MenuItems");
if (MenuItems) {
  MenuItems.style.maxHeight = "0px"; // Initialize menu to be closed
} else {
  console.error("MenuItems element not found. Please check the ID.");
}

function menutoggle() {
  if (!MenuItems) {
    console.error("MenuItems is not initialized. Check the element ID.");
    return;
  }
  if (MenuItems.style.maxHeight === "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// Product Gallery Functionality
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

if (!ProductImg) {
  console.error("ProductImg element not found. Please check the ID.");
}

if (SmallImg.length === 0) {
  console.error("No elements with class 'small-img' found. Please check the class name.");
} else {
  // Attach click events to each small image
  for (let i = 0; i < SmallImg.length; i++) {
    SmallImg[i].onclick = function () {
      if (ProductImg) {
        ProductImg.src = SmallImg[i].src; // Corrected 'scr' to 'src'
      }
    };
  }
}

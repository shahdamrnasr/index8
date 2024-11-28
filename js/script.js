    var btns = document.querySelectorAll(".btn")
    var shoppingCart = document.getElementById("shoppingCart")
    var totalButton = document.getElementById("Totel")
    var priceDisplay = document.getElementById("price")
    var totalPrice = 0

    btns.forEach(function (item) {
        item.onclick = function () {
            shoppingCart.innerHTML += item.getAttribute("product") + " - " + item.getAttribute("price") + " LE<br>"
            totalPrice += +(item.getAttribute("price"))
            document.getElementById("Clear").style.display = 'block'
            document.getElementById("Totel").style.display = 'block'
            document.getElementById("shoppingCart").scrollIntoView({
                behavior: 'smooth'
            })

            emptyMessage.style.display = 'none';
        }
    })

    totalButton.onclick = function () {
        priceDisplay.innerHTML = "Total Price: " + totalPrice + " LE"
    }

    document.getElementById("Clear").onclick = function () {
        shoppingCart.innerHTML = ''
        totalPrice = 0
        priceDisplay.innerHTML = ''
        emptyMessage.style.display = 'block';
        this.style.display = 'none'
        totalButton.style.display = 'none'
    }
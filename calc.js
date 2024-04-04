
const btn = document.querySelector('.btn')

btn.addEventListener('click', function () {
    // console.log('hi');
    let one = document.querySelector('.one').value
    let two = document.querySelector('.two').value
    let add = document.querySelector('.add').value
    let box = document.querySelector('.box')
    // console.log(one);
    // console.log(two);
    // console.log(add);
    // box.textContent = `${one}${add}${two}`
    // box.innerHTML = `${one}${two}`
    // box.innerHTML += `${one}${two}`
    one = Number(one)
    two = Number(two)
    console.log(typeof (one));


    function divide(one, two) {
        if (add === '/') {

            if (two === 0) {
                box.innerHTML = `<h2>делить нельзя</h2>`
            }
            c = one / two
            console.log(c);
            box.innerHTML = c
            return c
        }
    }
    divide(one, two)

    function plus(one, two) {
        if (add === '+') {

            c = one + two
            console.log(c);
            box.innerHTML = c
            return c
        }
    }
    plus(one, two)

    function multiply(one, two) {
        if (add === '*') {

            c = one * two
            console.log(c);
            box.innerHTML = c
            return c
        }
    }
    multiply(one, two)

    function minus(one, two) {
        if (add === '-') {

            c = one - two
            console.log(c);
            box.innerHTML = c
            return c
        }
    }
    minus(one, two)
})

let box = document.querySelector('.box')











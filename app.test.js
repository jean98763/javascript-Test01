const app = require('./app')

test('verificar el existe el valor' , () => {
    expect(app.value).toBeDefined();
});

test('verificar el existe el boton' , () => {
    expect(app.btns).toBeDefined();
});

test('verificar el existe el el contador' , () => {
    expect(app.count).toBeDefined();
});

test('verificar el contador cambia a color verde' , () => {
    if(expect.count > 0){
        expect(app.value.style2.color).toBe("green")
    }
});

test('verificar el contador cambia a color rojo' , () => {
    if(expect.count < 0){
        expect(app.value.style2.color).toBe("red")
    }
});

test('verificar el contador cambia a color amarillo' , () => {
    if(expect.count < 0){
        expect(app.value.style2.color).toBe("#222")
    }
});

test('verificar si el contador decrementa', () => {
    if(expect.style2 == "decrease"){
        expect(app.count).toBe(count--);
    }
});

test('verificar si el contador aumenta', () => {
    if(expect.style2 == "increase"){
        expect(app.count).toBe(count++);
    }
});


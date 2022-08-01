
class Car {
    constructor(name) {
    this.brand = name;
    }
    genration() {
    return 'I have a ' + this.brand;
    }
    }
    class newlyCar extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }
       view() {
    return super.genration() + ', it is a ' + this.model;
    // super.present() And this.present() Both are Works 
    }
    }
    const  myCar = new newlyCar("Ford", "Mustang");
    
    // in consol 
    console.log(myCar.view());
    // in window 
    document.write(myCar.view());

    // os.innerHtml=x;
    
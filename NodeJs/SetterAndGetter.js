class SetterAndGetter{
    constructor() {
        this._variable = 0;
    }
    get variable(){
        return this._variable;
    }
    set variable(value){
        if (typeof value === 'number') {
            this._variable = value;
        }
        else{
            console.error("variable must be a number.");
        }
    }
}
const instance = new SetterAndGetter();
instance.variable = 10;
console.log(instance.variable);
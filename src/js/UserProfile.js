export class UserProfile {
    #name
    #age
    #weight
    #height

    constructor(name, age, weight, height){
        this.#setName(name)
        this.#setAge(age)
        this.#setWeight(weight)
        this.#setHeight(height)
    }


    #setName(name) {
        this.#name = name;
    }
    
    getName(){
        return this.#name;
    }

    #setAge(age){
        this.#age = age;
    }

    getAge(){
        return this.#age;
    }

    #setWeight(weight){
        this.#weight = weight;
    }

    getWeight() {
        return this.#weight;
    }

    #setHeight(height){
        this.#height = height;
    }

    getHeight(){
        return this.#height;
    }

    updateProfite(name, age, weight, height){
    this.#setName(name)
    this.#setAge(age)
    this.#setWeight(weight)
    this.#setHeight(height)
  }
}
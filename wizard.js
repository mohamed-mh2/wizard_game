class wizard {
    #name;
    #health;
    #mana;
  
    constructor(name, health ,mana){
        this.#name = name;
        this.#health = health;
        this.#mana = mana;   
    }
    getname(){
        return this.#name;
    }  
    gethealth(){
        if(this.#health >= 0){
        return this.#health;
        }
        return 0;
    }   
    getmana(){
        if(this.#mana >= 0){
        return this.#mana;
        }
        return 0;
    }
    isdefeated(){
        return this.#health <= 0;
    }
    manacost(){

    }
    damage(){
    } 
    takeDamage(damage){
        this.#health -= damage;
        if(this.#health < 0){
            this.#health = 0;
        }
        console.log(`${this.#name} takes ${damage} damage!`);
    }
    attack(target){
        if(this.isdefeated()){
            console.log(`${this.#name} is defeated and cannot attack.`);
            return;
        }else if(this.getmana() < this.manacost()){
            console.log(`${this.#name} does not have enough mana to attack.`);
            return;
        }else if(target.isdefeated()){
            console.log(`${target.getname()} is already defeated.`);
            return;
        }
            else{
            this.#mana -= this.manacost();
            target.takeDamage(this.damage());
            console.log(`${this.#name} attacks ${target.getname()}!`);
            // console.log(`${this.#mana} , ${target.gethealth()}`);
            console.log(`target: ${target.getname()}/ target health: ${target.gethealth()} / target mana: ${target.getmana()}`);
            console.log(`attacker: ${this.#name}/ health: ${this.gethealth()}/${this.#name} mana: ${this.getmana()}`);  
        }
        if(target.isdefeated()){
            console.log(`${target.getname()} is defeated!`);
            console.log(`${this.#name} won`);
            
        }
}   }


class fireWizard extends wizard{
         
    constructor(){
     super("fire wizard", 100, 60);
    }
    manacost(){
        return 10;
    }
    damage(){
        return 20;
    }         
}                             

class iceWizard extends wizard{
   
        constructor(){
       super("ice wizard", 120, 70);
        }
    
    manacost(){
        return 10;
    }   
    damage(){
        return 18;
    }
}

// fireWizard(100,60)
// iceWizard(120,70)

let fire = new fireWizard();
let ice = new iceWizard();
fire.attack(ice);
ice.attack(fire);
fire.attack(ice);
ice.attack(fire);
ice.attack(fire); 
fire.attack(ice);
fire.attack(ice);
ice.attack(fire);
ice.attack(fire);  
ice.attack(fire);


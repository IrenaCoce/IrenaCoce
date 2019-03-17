function Combatant() {
    // a combatant is a being that can fight
    // place combat related methods here
    this.attack = function(target) {
        var damage = getRandomNumber(this.minDamage, this.maxDamage);
        target.recieveDamage(damage);
    }
    this.recieveDamage = function(damage) {
        this.health -= damage;
        this.checkHealth();
    }

    this.attack = function(target) {
        var specialAttackOccured = calculatePercent(30);
        var damage = getRandomNumber(this.minDamage, this.maxDamage);
 
        if(specialAttackOccured){
            damage *= this.specialAttack;
        }
 
 
        target.recieveDamage(damage);
    }
}

Combatant.prototype = new Being();
import { controls } from '../../constants/controls';
import { showWinnerModal } from './modal/winner';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    let firstCounter = firstFighter.health;
    let secondCounter = secondFighter.health;
    document.addEventListener('keydown', (e) => {
      // firstFighter attack
      if (e.code == controls.PlayerOneAttack && e.code != controls.PlayerTwoBlock) {

        // const damage = getDamage(firstFighter, secondFighter)
        const hit = getHitPower(firstFighter)
        console.log(secondCounter)
        console.log(hit)
        secondCounter = secondCounter - hit
        console.log(secondCounter)
        if (secondCounter <= 0) {
          resolve(firstFighter)
        }
        // 
      }
      else if (e.code == controls.PlayerOneAttack && e.code == controls.PlayerTwoBlock) {

        // const damage = getDamage(firstFighter, secondFighter)
        const damage = getDamage(firstFighter, secondFighter)
        console.log(secondCounter)
        console.log(damage)
        secondCounter = secondCounter - damage
        console.log(secondCounter)
        if (secondCounter <= 0) {
          resolve(firstFighter)
        }
        // 
      }
      // secondFighter attack
      else if (e.code == controls.PlayerTwoAttack && e.code != controls.PlayerOneBlock) {

        const hit = getHitPower(secondFighter)
        firstCounter = firstCounter - hit
        if (firstCounter <= 0) { resolve(secondFighter) }
        // 
      }
      else if (e.code == controls.PlayerTwoAttack && e.code == controls.PlayerOneBlock) {

        const damage = getDamage(firstFighter, secondFighter)
        firstCounter = firstCounter - damage
        if (firstCounter <= 0) { resolve(secondFighter) }
        // 
      }
    }
    )


    // resolve the promise with the winner when fight is over
  });

}

export function getDamage(attacker, defender) {
  return (getHitPower(attacker) - getBlockPower(defender))
  // return damage
}

function criticalHitChance(min = 1, max = 3) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}



export function getHitPower(fighter) {
  return fighter.attack * criticalHitChance()
  // return hit power
}

// function dodgeChance(min = 1, max = 3) {
//   // min = Math.ceil(min);
//   // max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;  //random function of damage
// }
function dodgeChance(min = 1, max = 3) {
  const r = Math.random() * (max - min) + min
  return Math.floor(r)
}









export function getBlockPower(fighter) {
  return fighter.defense * dodgeChance()
  // return block power
}

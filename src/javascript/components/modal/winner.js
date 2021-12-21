import { showModal } from './modal';
export function showWinnerModal(fighter) {

  showModal({
    title: fighter.name,
    bodyElement: fighter.source
  })

}

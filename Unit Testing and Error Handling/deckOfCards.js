function printDeckOfCards(cards) {
    const faces = ['2', '3', ' 4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '♠',
        H: '♥',
        D: '♦',
        C: '♣'
    }

    let finalCards = [];
    function createCard(face, suit) {
        let card = {
            face,
            suit,
            toString() {
                let currentCard = this.face + suits[this.suit];
                finalCards.push(currentCard);
            }
        }

        card.toString();
    }

    let isLegit = false;

    for (let card of cards) {
        let face = card.slice(0, card.length - 1);
        let suit = card.slice(card.length - 1);

        if (!faces.includes(face) || !suits[suit]) {
            isLegit = true;
            console.log(`Invalid card: ${card}`);
            break;
        }
    }
    if (!isLegit) {
        for (let card of cards) {
            let face = card.slice(0, card.length - 1);
            let suit = card.slice(card.length - 1);
            createCard(face, suit);
        }
    }

    console.log(finalCards.join(', '));

}
printDeckOfCards(['5S', '3D', 'QD', '1C']);

export class Game {
    public playerCount: number;
    public player: {id: number, type: String}[] = [];

    public constructor(playerCount: number) {
        this.playerCount = playerCount;
        
        let roleArray: string[];
        switch(this.playerCount) {
            case 5:
                roleArray = ['human', 'human', 'human', 'android', 'mother'];
                break;
            case 6:
                roleArray = ['human', 'human', 'human', 'human', 'android', 'mother'];
                break;
            case 7:
                roleArray = ['human', 'human', 'human', 'human', 'android', 'android', 'mother'];
                break;
            case 8:
                roleArray = ['human', 'human', 'human', 'human', 'human', 'android', 'android', 'mother'];
                break;
            case 9:
                roleArray = ['human', 'human', 'human', 'human', 'human', 'android', 'android', 'android', 'mother'];
                break;
            case 10:
                roleArray = ['human', 'human', 'human', 'human', 'human', 'human', 'android', 'android', 'android', 'mother'];
                break;
            default:
                console.log('Invalid number of players.');
        }

        let currentIndex = roleArray.length,  randomIndex;
        
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
        
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [roleArray[currentIndex], roleArray[randomIndex]] = [
                roleArray[randomIndex], roleArray[currentIndex]];
        }

        for (let i: number = 0; i < this.playerCount; i++) {
        }
    }
}
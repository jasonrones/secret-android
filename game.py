class Game:
    ### Constructor
    def __init__(this):
        this.started = False

    ### Object Methods
    def start(this):
        this.started = True
        print('Game Started.')

    def end(this):
        this.started = False
        print('Game Ended.')

    def assignRoles(this, players):
        this.playerCount = len(players)
        print('Player Count: ', this.playerCount)

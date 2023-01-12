from role import Role

class Player:
    ### Constructor
    def __init__(this, name):
        this.name = name
        this.role = None

    ### Object Methods
    def start(this):
        this.started = True

    def end(this):
        this.started = False

    def setRole(this, role):
        this.role = role
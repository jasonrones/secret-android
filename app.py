from flask import Flask, render_template, request, redirect, url_for
from game import Game
from player import Player

### Instantiate Objects
app = Flask(__name__)
game = Game()

### Routes
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        form = request.form
        players = []
        i = 1
        for player in form:
            name = request.form.get('player' + str(i))
            if name != '':
                players.append(Player(name)) # create new player object
            i = i + 1 # increment
        game.assignRoles(players)
        game.start()
        return redirect(url_for('board'))

    else: # Get Method
        if game.started == False:
            return render_template('index.html')
        else: # Game has started
            return redirect(url_for('board'))

@app.route('/board', methods=['GET', 'POST'])
def board():
    return render_template('board.html')


### Run App
if __name__ == "__main__":
    app.run(debug=True)
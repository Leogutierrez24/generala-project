class Game
{
    #_players;
    #_playerPlaying;
    #_rounds;
    #_dice01 = new Dice(1);
    #_dice02 = new Dice(2);
    #_dice03 = new Dice(3);
    #_dice04 = new Dice(4);
    #_dice05 = new Dice(5);

    get players()
    {
        return this.#_players;
    }

    get dices()
    {
        return [ this.#_dice01, this.#_dice02, this.#_dice03, this.#_dice04, this.#_dice05 ];
    }

}
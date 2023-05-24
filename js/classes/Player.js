class Player 
{
    #_name;
    #_points;
    #_isPlaying;

    get name()
    {
        return this.#_name;
    }

    set name(value)
    {
        if (value !== "")
        {
            this.#_name = value;
        } else 
        {
            console.error("Debe ingresarse un nombre");
        }
    }

    get points()
    {
        return this.#_points;
    }

    constructor(name)
    {
        this.#_name = name;
        this.#_points = 0;
        this.#_isPlaying = false;
    }

    #addPoints(points)
    {
        this.#_points += points;
    }

    setPlayerTurn()
    {
        if (!this.#_isPlaying)
        {
            this.#_isPlaying = true
        } else 
        {
            console.warn("Ya es el turno del jugador " + this.#_name);
        }
    }

    rollDices(dices)
    {

    }
}

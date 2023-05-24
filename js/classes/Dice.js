class Dice
{
    #_id;
    #_value;

    get value()
    {
        return this.#_value;
    }

    get id()
    {
        return this.#_id;
    }

    constructor(id)
    {
        this.#_id = (typeof id === "number") ? id : null;
        this.#_value = 0;
    }

    roll()
    {
        this.#_value = Math.floor(Math.random() * (7 - 1) + 1);
        return this.#_value;
    }
}
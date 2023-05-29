import React, { useState } from "react";

export default function CreatePlayerForm() {
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log({ name, breed });
        setName("");
        setBreed("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='name'
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                name="breed"
                placeholder="breed"
                onChange={(e) => setBreed(e.target.value)}
            
            />
            <button>Submit</button>
        </form>
    );
}
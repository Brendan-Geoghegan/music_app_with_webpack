/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react'

import SongIndex from "../components/SongIndex";

describe('SongIndex component', () => {
    beforeEach(() => {
        render(<SongIndex songName="Test Song" releaseDate="Test Date" coverArt="https://i.scdn.co/image/ab67616d0000b2738d7d3584e5220d0cd406eea4"/>)
    })

    it("Displays the song name", () => {

        const heading = screen.getByRole("heading", { level: 2 });

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Song: Test Song");
    })

    it("Displays the release date", () => {

        const date = screen.getByRole("figure");

        expect(date).toBeInTheDocument();
        expect(date.textContent).toBe("Release date: Test Date");
    })

    it("Displays the cover art", () => {

        const art = screen.getByRole("img");

        expect(art).toBeInTheDocument();
        expect(art.src).toBe("https://i.scdn.co/image/ab67616d0000b2738d7d3584e5220d0cd406eea4");
    })

    it("Changes the button to Liked and blue colored when clicked", async () => {
        const button = screen.getByRole("button");

        expect(button.textContent).toBe("Like")
        expect(button.style.color).toBe("black")

        await userEvent.click(button);

        expect(button.textContent).toBe("Liked")
        expect(button.style.color).toBe("blue")
    })

    it("Displays heading Lyrics", () => {

        const heading = screen.getByRole("heading", { level: 3 });

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toBe("Lyrics");
    })
})

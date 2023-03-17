import { createNewAlbum, getAlbumById, getAlbumByUserId, getAllAlbums } from "../api/endpoints/albums";
import { expectedAlbum, newexpectedAlbum } from "../data/constants/albumData";

describe("Albums", () => {
    test("Get all albums", async () => {
        const albums = await getAllAlbums();
        expect(albums).toHaveLength(100);
    });

    test("Get  album by albumId", async () => {
        const actualAlbum = await getAlbumById(5);
        expect(actualAlbum.title).toEqual(expectedAlbum.title); // Received: undefined  что то с функцией?
    });

    test("Get  album by userId", async () => {
        const actualAlbum = await getAlbumByUserId(11);
        expect(actualAlbum.title).toEqual(expectedAlbum.title);
    });

    test("Create new album", async () => {
        const albumCreated = await createNewAlbum(10, "new title of the album");
        console.log("New album created: ", albumCreated);
        expect(albumCreated.title).toBe(newexpectedAlbum.title);
    });

});
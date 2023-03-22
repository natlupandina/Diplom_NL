import { createNewAlbum, getAlbumById, getAlbumByUserId, getAllAlbums } from "../api/endpoints/albums";
import { expectedAlbum, newexpectedAlbum } from "../data/constants/albumData";

describe("Albums", () => {
    test("Get all albums", async () => {
        const albums = await getAllAlbums();
        expect(albums).toHaveLength(100);
    });

    test("Get  album by albumId", async () => {
        const actualAlbum = await getAlbumById(5);
        expect(actualAlbum[0].title).toEqual(expectedAlbum.title); 
    });

    test("Get  all albums by userId", async () => {
        const allAlbums = await getAlbumByUserId(9);
        expect(allAlbums).toHaveLength(10);
    });

    test("Create new album", async () => {
        const albumCreated = await createNewAlbum(10, "new title of the album");
        console.log("New album created: ", albumCreated);
        expect(albumCreated.title).toBe(newexpectedAlbum.title);
    });

});
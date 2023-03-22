import { get, post } from "../api";
import { IAlbum } from "../../data/models/albumModel";

export async function getAllAlbums() {
    return await get("/albums");
}

export async function getAlbumById(id: number, expectedError?: number): Promise<IAlbum[]> {
    return await get("/albums", { id: id }, expectedError);
}

export async function getAlbumByUserId(userId: number, expectedError?: number): Promise<IAlbum> {
    return await get("/albums", { userId: userId }, expectedError);
}

export async function createNewAlbum(userId: number, title: string): Promise<IAlbum> {
    return post("/albums", { userId: userId, title: title });
}


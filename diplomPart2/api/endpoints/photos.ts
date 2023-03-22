import { get, post } from "../api";
import { IPhoto } from "../../data/models/photosModel";


export async function getAllPhotosByAlbumId(albumId: number, expectedError?: number): Promise<IPhoto> {
    return await get("/photos", { albumId: albumId }, expectedError);
}

export async function getPhotoByPhotoId(id: number, expectedError?: number): Promise<IPhoto[]> {
    return await get("/photos", { id: id }, expectedError);
}

export async function uploadNewPhoto(albumId: number, title: string, url: string, thumbnailUrl: string,expectedError?: number): Promise<IPhoto> {
    return post("/photos", { albumId: albumId, title: title, url: url, thumbnailUrl: thumbnailUrl,expectedError });
}

export async function notableToUploadNewPhoto(title: string, url: string, thumbnailUrl: string,  expectedError?: number): Promise<IPhoto> {
    return post("/photos", { title: title, url: url, thumbnailUrl: thumbnailUrl,expectedError });
}

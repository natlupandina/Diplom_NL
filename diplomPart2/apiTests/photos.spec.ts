import { getAllPhotosByAlbumId, getPhotoByPhotoId, notableToUploadNewPhoto, uploadNewPhoto } from "../api/endpoints/photos";
import { existingPhoto, expectedPhoto } from "../data/constants/photosData";

describe("Albums", () => {
    

    test("Get all photos by albumId", async () => {
        const actualPhoto = await getAllPhotosByAlbumId(2);
        expect(actualPhoto).toHaveLength(50); 
    });

    test("Get  photo by photoId", async () => {
        const receivedPhoto = await getPhotoByPhotoId(51);
        expect(receivedPhoto.title).toEqual(existingPhoto.title); //нужно ли еще проверять другие параметры как url?  или достаточно только title?
    });

    test("Upload new photo", async () => {
        const photoCreated = await uploadNewPhoto(1,"new photo title", "https://via.placeholder.com/600/8rede973b", "https://via.placeholder.com/150/8e9rew73b");
        console.log("New photo uploaded: ", photoCreated);
        expect(photoCreated.title).toBe(expectedPhoto.title);
    });

    test("No ability to upload new photo w/o albumId", async () => {
        await notableToUploadNewPhoto("new broken photo title", "https://via.placeholder.com/600/8r78ede973b", "https://via.placeholder.com/150/8e965rew73b",400);
    });

    test("No ability to upload new photo with wrong albumId", async () => {
        await uploadNewPhoto(10011,"broken photo title", "https://via.placeholder.com/600/8r78ede973b", "https://via.placeholder.com/150/8e965rew73b",400);
    });

});
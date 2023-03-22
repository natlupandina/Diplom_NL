import { get, post, remove, update } from "../api";
import { IPost } from "../../data/models/postModel";

export async function getAllPosts() {
    return await get("/posts");
}

export async function getPostById(id: number, expectedError?: number): Promise<IPost[]> {
    return await get("/posts", { id: id }, expectedError);
}

export async function getPostByUserId(userId: number, expectedError?: number): Promise<IPost> {
    return await get("/posts", { userId: userId }, expectedError);
}

export async function getCommentsByPostId(postId: number, expectedError?: number): Promise<IPost> {
    return await get("/comments", { postId: postId }, expectedError);
}

export async function postPost(userId: number, title: string, body: string): Promise<IPost> {
    return post("/posts", { userId: userId, title: title, body: body });
}

export async function updatePost(id: number, title: string): Promise<IPost> { // а как можно реализовать не захардкодив path=/posts/3?
    return update("/posts/3", {id: id, title: title });
}

export async function deletePost(id: number): Promise<IPost> {
    return remove("/posts/6", { id: id });
}
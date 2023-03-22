import { deletePost, getAllPosts, getCommentsByPostId, getPostById, getPostByUserId, postPost, updatePost } from "../api/endpoints/posts";
import { expectedPost, newExpectedPost } from "../data/constants/postData";

describe("Posts", () => {
    test("Get all posts", async () => {
        const posts = await getAllPosts();
        expect(posts).toHaveLength(100);
    });

    test("Get post by postID", async () => {
        const actualPost = await getPostById(5);
        expect(actualPost[0].title).toEqual(expectedPost.title);
    });

    test("Create Post", async () => {
        const postCreated = await postPost(10, "new title", "new body");
        console.log("New post created: ", postCreated);
        expect(postCreated.title).toBe(newExpectedPost.title);
        expect(postCreated.body).toBe(newExpectedPost.body);
    });

    test("Get fake post", async () => {
        const fakePost = await getPostById(0); // если здесь реализовать так - await getPostById(0, 404); получим: // Received: 200  Expected: 404. 
        //В постмане тоже 200 ответ - так как вернулся пустой массив. Если пустой массив преобразовать в объект - как можно из объекта получить 404?
        expect(fakePost).toHaveLength(0);
    });

    test("Get all posts by userID", async () => {
        const userPosts = await getPostByUserId(3);
        expect(userPosts).toHaveLength(10);
    });

    test("Get  posts for fake user", async () => {
        const fakeUserPosts = await getPostByUserId(111);
        expect(fakeUserPosts.id).toBeFalsy();
    });

    test("Get  comments for fake post", async () => {
        const fakeUserPosts = await getCommentsByPostId(1111);
        expect(fakeUserPosts.id).toBeFalsy();
    });

    test("Get comments for post by postID", async () => {
        const receivedCommentsPost = await getCommentsByPostId(2);
        expect(receivedCommentsPost).toHaveLength(5);
    });

    test("Update Post", async () => {
        const postUpdated = await updatePost(7, "title updated");
        console.log("post's title updated: ", postUpdated);
        expect(postUpdated.title).toBe("title updated");
    });

    test("Delete Post", async () => {
        const postDeleted = await deletePost(6);
        console.log("post deleted: ", postDeleted);
        expect(postDeleted.title).toBeFalsy();
    });

});
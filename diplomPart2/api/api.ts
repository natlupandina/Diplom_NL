import superagent, { Response } from 'superagent';

const baseUrl = 'https://jsonplaceholder.typicode.com';

async function handleResponse(response: Response, expectedStatusCode: number) {
    expect(response.statusCode).toBe(expectedStatusCode);

    return response.body;
}

export async function get(path: string, query?: object, expectedError?: number) {
    const url = `${baseUrl}${path}`;
    const response = await superagent.get(url).query(query ?? {});
    
    return handleResponse(response, expectedError ?? 200);
}

export async function post(path: string, query: object,expectedError?: number) {
    const url = `${baseUrl}${path}`;
    const response = await superagent.post(url).send(query);
    return handleResponse(response, expectedError ?? 201);
  }

  export async function update(path: string, query: object,expectedError?: number) {
    const url = `${baseUrl}${path}`;
    const response = await superagent.patch(url).send(query);
    return handleResponse(response, expectedError ?? 200);
  }

  export async function remove(path: string, query: object,expectedError?: number) {
    const url = `${baseUrl}${path}`;
    const response = await superagent.delete(url).send(query);
    return handleResponse(response, expectedError ?? 200);
  }
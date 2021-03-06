/**
 * @jest-environment node
 */

var request = require('supertest');
var app = require('../server/index.js');

describe('GET request for images', () => {
  test('should response the GET method', async () => {
    const response = await request(app).get('/api/allPhotos')
    expect(response.statusCode).toBe(200);
  });

  test('returns an array of images', async () => {
    const response = await request(app).get('/api/allPhotos')
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(25);
  });
});

describe('GET request for movies', () => {
  test('returns an array of movies', async () => {
    const response = await request(app).get('/api/photos')
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(10);
  });
});
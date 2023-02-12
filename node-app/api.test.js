const request = require('supertest');
const app = require('./app'); // Assumes the app is exported from app.js

describe('Medical bill upload server', () => {
  let bills = [];

  afterEach(() => {
    // Reset bills array after each test
    bills = [];
  });

  describe('GET /items empty', () => {
    it('should return an empty array when there are no bills', async () => {
      const res = await request(app).get('/items');
      expect(res.status).toBe(200);
      expect(res.body).toEqual([]);
    });
  });

  describe('POST /items create', () => {
    it('should create a new bill and return it', async () => {
      const newBill = {
        patientName: 'John Doe',
        patientAddress: '123 Main St',
        hospitalName: 'Memorial Hospital',
        dateOfService: '2022-02-01',
        billAmount: 1000,
      };

      const res = await request(app)
        .post('/items')
        .send(newBill)
        .set('Accept', 'application/json');

      expect(res.status).toBe(201);
      expect(res.body).toMatchObject(newBill);

      bills = (await request(app).get('/items')).body;
      expect(bills).toContainEqual(newBill);
    });
  });

    describe('POST /items error', () => {

    it('should return a 400 error if any fields are missing', async () => {
      const newBill = {
        patientName: 'John Doe',
        patientAddress: '123 Main St',
        hospitalName: 'Memorial Hospital',
        dateOfService: '2022-02-01',
      };

      const res = await request(app)
        .post('/items')
        .send(newBill)
        .set('Accept', 'application/json');

      expect(res.status).toBe(400);
      expect(bills).toEqual([]);
    });
  });


  describe('GET /items list', () => {
    it('should return the list of bills', async () => {
        bills = [
        {
            patientName: 'John Doe',
            patientAddress: '123 Main St',
            hospitalName: 'Memorial Hospital',
            dateOfService: '2022-02-01',
            billAmount: 1000,
        }
        ];

        const res = await request(app).get('/items');
        expect(res.status).toBe(200);
        expect(res.body).toEqual(bills);
        });
    });
});

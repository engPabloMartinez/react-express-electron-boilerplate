// Import the dependencies for testing
import chai from'chai';
import chaiHttp from 'chai-http';
import app from '../App';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Products", () => {
    describe("GET /products", () => {
        // Test to get all students record
        it("should get all products", (done) => {
            chai.request(app)
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.should.have.length(21);
                    done();
                });
        });
    });
});
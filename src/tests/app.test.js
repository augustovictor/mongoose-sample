const mocha = require('mocha');
const expect = require('expect');
const request = require('supertest');
const {app} = require('../../app');
const {Todo} = require('../models/todo');
const { todos, populateTodos } = require('./seed/seed');

beforeEach(populateTodos);

describe('POST /todos', () => {
    it('it should create a new todo', done => {
        const title = 'This is a great title!';
        request(app)
        .post('/todos')
        .send({title})
        .expect(200)
        .expect((res) => {
            expect(res.body.title).toBe(title);
        })
        .end((err, res) => {
            if(err) return done(err);
            Todo.find({title}).then(todo => {
                expect(todo[0].title).toBe(title);
                done();
            }).catch(err => done(err));
        });
    });

    it('should not create todo with invalid data', done => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err) return done(err);
            expect(res.body._message).toBe('Todo validation failed');
            Todo.find().then(todos => {
                expect(todos.length).toBe(2);
                done();
            }).catch(e => done(e));
        })
    });
});

describe('GET /todos', () => {
    it('should return todos', done => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect(res => {
            expect(res.body.length).toBe(2);
        }).end(done);
    });
});
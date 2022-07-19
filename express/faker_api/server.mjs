import express from 'express';
import {faker} from '@faker-js/faker';

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.email = faker.internet.email(this.lastName);
        this.phoneNumber = faker.phone.number('650-###-####');
        this.password = faker.internet.password();
        this._id = faker.datatype.uuid();
    }
}

class Address {
    constructor() {
        this.street = faker.address.streetAddress();
        this.city = faker.address.cityName();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCodeByState(this.state);
        this.country = faker.address.country();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = new Address();
        this._id = faker.datatype.uuid();
    }
}

const app = express();

app.get('/api/users/new', (req, res) => res.send(new User()));

app.get('/api/companies/new', (req, res) => res.send(new Company()));

app.get('/api/user/company', (req, res) => res.send([new User(), new Company()]));

app.listen(3000, () => console.log('Faker app listening on port 3000!'));

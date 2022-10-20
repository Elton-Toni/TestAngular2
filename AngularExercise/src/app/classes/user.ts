export class User {
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: Address;
  public phone: string | null;
  public website: string | null;
  public company: Company;

  constructor();
  constructor(
    id?: number,
    name?: string,
    username?: string,
    email?: string,
    address?: Address,
    phone?: string,
    website?: string,
    company?: Company
  ) {
    this.id = id;
    (this.name = name), (this.username = username);
    this.email = email;
    this.address = address
      ? address
      : new Address(undefined, undefined, undefined, undefined, undefined);
    this.phone = phone;
    this.website = website;
    this.company = company
      ? company
      : new Company(undefined, undefined, undefined);
  }
}

class Company {
  constructor(
    public name: string | null,
    public catchPhrase: string | null,
    public bs: string | null
  ) {}
}

class Geo {
  constructor(public lat: number | null, public lng: number | null) {}
}

class Address {
  constructor(
    public street: string | null,
    public suite: string | null,
    public city: string | null,
    public zipcode: string | null,
    public geo: Geo
  ) {
    this.geo = new Geo(undefined, undefined);
  }
}

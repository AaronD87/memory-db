const MemoryDatabase = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();
  });

  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error if there is no object with matching id', () => {
    try {
      const dog = { name: 'fluffy', id: 99999 };
      expect(db.findById(dog.id)).toThrowError();
    } catch(error) {
      expect(error).toEqual('No Id found');
    }
  });

  it('returns a list of all objects', () => {
    const data = [];
    expect(db.find()).toEqual(data);
  });
});
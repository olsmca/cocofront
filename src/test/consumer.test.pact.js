import { UserService } from '../user.service';   // This is your client-side API layer
const { Pact } = require('@pact-foundation/pact');

describe('The API', () => {
  let url = 'https://randomuser.me';
  const EXPECTED_BODY = [
    {
      "results":[
        {
          "gender":"female",
          "name":{
            "title":"mrs",
            "first":"raquel",
            "last":"marquez"
          },
          "location":{
            "street":"3704 calle del arenal",
            "city":"zaragoza",
            "state":"país vasco",
            "postcode":44405,
            "coordinates":{
              "latitude":"-23.9479",
              "longitude":"12.4544"
            },
            "timezone":{
              "offset":"-10:00",
              "description":"Hawaii"
            }
          },
          "email":"raquel.marquez@example.com",
          "login":{
            "uuid":"c8715bff-6ca4-4802-ba83-18b43b294555",
            "username":"brownbutterfly556",
            "password":"lovers",
            "salt":"XQpGbjRP",
            "md5":"d5a040ead54f943ebf21cdeb7952a923",
            "sha1":"503d8a86e6a80e9d8d0efa33d69927e55ffd2e4b",
            "sha256":"951aab3605e7657d35d8411750d0c3e5d8aedc628037a8e5f6342125ba83df29"
          },
          "dob":{
            "date":"1983-10-18T13:04:54Z",
            "age":35
          },
          "registered":{
            "date":"2006-12-06T06:24:33Z",
            "age":12
          },
          "phone":"971-523-338",
          "cell":"691-445-194",
          "id":{
            "name":"DNI",
            "value":"06262822-K"
          },
          "picture":{
            "large":"https://randomuser.me/api/portraits/women/20.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/20.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/20.jpg"
          },
          "nat":"ES"
        }
      ],
      "info":{
        "seed":"5c30dd63916b7a46",
        "results":1,
        "page":1,
        "version":"1.2"
      }
    }
  ]

  // Copy this block once per interaction under test
  describe(" The API interaction being tested ", () => {
    beforeEach(() => {
      const interaction = {
        uponReceiving: "a request for projects",
        withRequest: {
          method:  "GET",
          path:  "/api/",
          query:  "?results=5",
          headers: {
            Accept: 'application/json'
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: EXPECTED_BODY
        }
      };
      return provider.addInteraction(interaction);
    });

    // add expectations
    it("Consumer api rabid", done => {
      api(url).someCall()
        .then(response => {
          expect(response.headers["content-type"]).toEqual("application/json");
        })
        .then(done);
    });
  });
});

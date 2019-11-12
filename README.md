## Travelat'r Backend

- To get the server going, run `nodemon index` in the terminal.
- To get the database going, run any of the followng in the terminal:
    1. `mongod --config /usr/local/etc/mongod.conf`
    2. `brew services start mongodb-community@4.2`

- Schema

    - User
        - username => string
        - password => string (hashed)
        - email => string
        - age => integer
    - Expense
        - userId => integer
        - countryId => integer
        - type => string
        - value => float 
    - Country
        - name => string
        - polyglonCoordinates => object (from Google Maps API)
        - stats => object (demographics & such)

- Auth for `Node.js`
- Validation 



STEPS FOR TESTING DATABASE

1. Start `node idex.js` to start port 8080 ==> node
2. Start `mongod` to start 127...travelatr route ==> mongod
3. Start `mongo` last ==> mongo
4. Open MongoDB Compass (needs to be downloaded first) to check what's in the local database.
5. Test database manipulations using the following:
 - type `db`
 - type `use travelatr`
 - type `db.users.insertOne({username: "becca"})`
 - type `db.users.find()`
 - check the Compass table to see if there are any database changes.
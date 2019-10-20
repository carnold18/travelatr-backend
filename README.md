## Travelat'r Backend

- To get the server going, run `nodemon index` in the terminal.
- To get the database going, run any of the followng in the temrinal:
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

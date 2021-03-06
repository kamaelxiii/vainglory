# Vainglory.js - A Javascript API Client for Vainglory

[![Build Status](https://travis-ci.org/seripap/vainglory.svg?branch=master)](https://travis-ci.org/seripap/vainglory)

This is a Javascript API client for [Vainglory](http://vainglorygame.com).

## Installation

```
$ yarn add vainglory
# or npm install vainglory
```

To initalize the library

```javascript
import Vainglory from 'vainglory';

const vainglory = new Vainglory('api-key');
```

To modify HTTP options, provide an options object

```javascript
import Vainglory from 'vainglory';

/* defaults */
const options = {
  host: 'https://api.dc01.gamelockerapp.com/shards/na/',
  title: 'semc-vainglory',
};

const vainglory = new Vainglory('api-key', options);
```

## Examples

```
$ yarn run example
```

## Tests

```
$ yarn test
```

## Documentation

### Reference

All methods are named references from the [Official API Reference](http://developer.vainglorygame.com/docs). All methods will return a promise.

### Matches

* [`collection`](#matchesCollection)
* [`single`](#matchesSingle)

### Players

* [`single`](#playersSingle)

---------------------------------------
## Base Model

All single results are wrapped with a model for easier data digesting. You can request any data that comes back from the request.

`.type` - Returns the type of data requested
`.id` - Returns associated ID
`.raw` - Returns a raw object representation of the data retrieved

---------------------------------------
## Matches

`vainglory.matches` 

<a name="matchesCollection" />
#### collection({...options})

Retrieves all matches. [Reference](http://developer.vainglorygame.com/docs/#get-a-collection-of-matches)

__Arguments__
- `options` [*Object*] - Query paramaters

__Example__
```javascript
/* defaults */
const options = {
  page: {
    offset: 0,
    limit: 50,
  },
  sort: 'createdAt',
  filters: {
    started: '3hrs ago',
    ended: 'Now',
    playerNames: [],
    teamNames: [],
  }
}
vainglory.matches.collection(options).then((matches) => {
    // matches is the raw data represntation from the query.
}).catch((errorMsg) => {
  console.error(errorMsg);
});
```

<a name="matchesSingle" />
#### single(matchId)

Retreives a single match by ID. [Reference](http://developer.vainglorygame.com/docs/#get-a-single-match)

__Arguments__
- `matchId` [*String*] - The ID of match to retrieve

__Example__
```javascript
const matchId = '0123b560-d74c-11e6-b845-0671096b3e30';

vainglory.matches.single(matchId).then((match) => {
  console.log(match.id);
  console.log(match.stats);
}).catch((errorMsg) => {
  console.error(errorMsg);
});
```

---------------------------------------

## Players

`vainglory.players` 

<a name="playersSingle" />
#### single(playerId)

Retreives a player by playerId. [Reference](http://developer.vainglorygame.com/docs/#get-a-single-player)

__Arguments__
- `playerId` [*String*] - The ID of player to retrieve

__Example__
```javascript
const playerId = '6abb30de-7cb8-11e4-8bd3-06eb725f8a76';

vainglory.players.single(playerId).then((player) => {
  console.log(player.id);
  console.log(player.stats);
}).catch((errorMsg) => {
  console.error(errorMsg);
});
```

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {
    constructor(private storage: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }

        });
    }

    getAllFavouriteCharacteres() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            return result && result.indexOf(characterId) !== -1;
        });
    }

    favouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                result.push(characterId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [characterId]);
            }
        });
    }

    unfavouriteCharacter(characterId) {
        return this.getAllFavouriteCharacteres().then(result => {
            if (result) {
                var index = result.indexOf(characterId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }

        });
    }

    getAllFavouriteQuotes() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            return result && result.indexOf(quoteId) !== -1;
        });
    }

    favouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                result.push(quoteId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [quoteId]);
            }
        });
    }

    unfavouriteQuote(quoteId) {
        return this.getAllFavouriteQuotes().then(result => {
            if (result) {
                var index = result.indexOf(quoteId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }

        });

    }
}
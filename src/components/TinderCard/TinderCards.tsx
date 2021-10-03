import React, { useState, useMemo, createRef, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Top250MovieDetail } from '../../server/utils/movies/Movies';
import { top250 as db } from './db';

declare type Direction = 'left' | 'right' | 'up' | 'down';
declare type SwipeHandler = (direction: Direction) => void;
declare type CardLeftScreenHandler = (direction: Direction) => void;

declare interface API {
  /**
   * Programmatically trigger a swipe of the card in one of the valid directions `'left'`, `'right'`, `'up'` and `'down'`. This function, `swipe`, can be called on a reference of the TinderCard instance. Check the [example](https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/examples/Advanced.js) code for more details on how to use this.
   *
   * @param dir The direction in which the card should be swiped. One of: `'left'`, `'right'`, `'up'` and `'down'`.
   */
  swipe(dir?: Direction): Promise<void>;
}

declare interface Props {
  ref?: React.Ref<API>;

  /**
   * Whether or not to let the element be flicked away off-screen after a swipe.
   *
   * @default true
   */
  flickOnSwipe?: boolean;

  /**
   * Callback that will be executed when a swipe has been completed. It will be called with a single string denoting which direction the swipe was in: `'left'`, `'right'`, `'up'` or `'down'`.
   */
  onSwipe?: SwipeHandler;

  /**
   * Callback that will be executed when a `TinderCard` has left the screen. It will be called with a single string denoting which direction the swipe was in: `'left'`, `'right'`, `'up'` or `'down'`.
   */
  onCardLeftScreen?: CardLeftScreenHandler;

  /**
   * An array of directions for which to prevent swiping out of screen. Valid arguments are `'left'`, `'right'`, `'up'` and `'down'`.
   *
   * @default []
   */
  preventSwipe?: string[];
}

const alreadyRemoved: Top250MovieDetail[] = [];
let movieState = db; // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const TinderCards: React.FC<Props> = () => {
  const [movies, setMovies] = useState(db);
  const [lastDirection, setLastDirection] = useState('');

  useEffect(() => {
    console.log('Already Removed');
    console.log(alreadyRemoved);
    console.log('Movies');
    console.log(movies);
    console.log('Movie State');
    console.log(movieState);
  }, [movies]);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => createRef<API>(), []),
    [],
  );

  const swiped = (direction: Direction, movie: Top250MovieDetail) => {
    console.log('removing: ' + movie.title);
    setLastDirection(direction);
    alreadyRemoved.push(movie);
  };

  const outOfFrame = (movie: Top250MovieDetail) => {
    console.log(movie.title + ' left the screen!');
    movieState = movieState.filter((m) => m.id !== movie.id);
    setMovies(movieState);
    console.log('is it here');
    console.log(movieState);
  };

  const swipe = (dir: Direction) => {
    const cardsLeft = movies.filter(
      ({ id }) => !alreadyRemoved.some((e) => e.id === id),
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1]; // Find the card object to be removed
      const index = db.map((movie) => movie).indexOf(toBeRemoved); // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir); // Swipe the card!
    }
  };

  return (
    <>
      <div className="cardContainer">
        {movies.map((movie, index) => (
          <div className="swipe" key={movie.id}>
            <TinderCard
              ref={childRefs[index]}
              onSwipe={(dir) => swiped(dir, movie)}
              onCardLeftScreen={() => outOfFrame(movie)}
            >
              <div className="card">
                <h3>{movie.title}</h3>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => swipe('left')}>Swipe left!</button>
        <button onClick={() => swipe('right')}>Swipe right!</button>
      </div>
    </>
  );
};

export default TinderCards;

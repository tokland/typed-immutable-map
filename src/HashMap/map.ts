import { HashMap } from './HashMap';
import { empty } from './empty';
import { reduce } from './reduce';
import { set } from './set';

export const map: MapFn = function map<K, V, R>(
  f: (value: V, key?: K) => R,
  hashmap: HashMap<K, V>): HashMap<K, R>
{
  return reduce(
    function (newMap: HashMap<K, R>, value: V, key: K) {
      return set(key, f(value, key), newMap);
    },
    empty<K, R>(),
    hashmap,
  );
};

export interface MapFn {
  <K, V, R>(f: (value: V, key?: K) => R, map: HashMap<K, V>): HashMap<K, R>;
}

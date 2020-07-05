/**
 * 집합처럼 딕셔너리와 해시는 유일한 값(반복되지 않는 값)을 저장하기 위한 자료 구조다.
 * 집합이 원소의 값에 초점을 두었다면, 딕셔너리(또는 맵)는 값을 [키, 값] 형태로 저장한다.
 * 해시 역시 [키, 값]으로 저장하지만 자료 구조를 구현하는 방법이 조금 다르다.
 */

 /**
  * 딕셔너리(dictionary)는 데이터를 [키, 값] 쌍으로 담아두는 자료 구조로, 키는 원소를 찾기 위한 식별자다. 
  * 집합이 [키, 키], 딕셔너리가 [키, 값] 형태의 원소를 모아놓은 공간이라는 점에서 두 자료 구조는 비슷하다.
  * 딕셔너리는 맵(map)이라고도 한다.
  */

  /**
   * set(키, 값): 딕셔너리에 원소를 추가한다.
   * remove(키): 키에 해당하는 원소를 삭제한다.
   * has(키): 키에 해당하는 원소가 딕셔너리에 존재하면 true를, 그렇지 않으면 false를 반환한다.
   * get(키): 키에 해당하는 원소의 값을 반환한다.
   * clear(): 모든 원소를 삭제한다.
   * size(): 원소의 개수를 반환한다. 배열의 length 프로퍼티와 비슷한다.
   * keys(): 딕셔너리의 모든 키를 배열로 반환한다.
   * values(): 딕셔너리의 모든 값을 배열로 반환한다.
   */

export default class Dictionary {
    constructor(items = {}) {
        this.items = items;
    }
    
    has(key) {
        return key in this.items;
    }

    set(key, value) {
        this.items[key] = value;
    }

    remove(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this.items[key] : undefined;
    }

    values() {
        const values = [];
        for (let k in this.items) {
            if (this.has(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    keys() {
        return Object.keys(this.items);
    }

    clear() {
        this.items = {};
    }

    size() {
        return Object.keys(this.items).length;
    }

    getItems() {
        return this.items;
    }
}
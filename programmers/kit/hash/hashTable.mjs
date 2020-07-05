/**
 * 해싱(hashing)은 자료 구조에서 특정 값을 가장 신속하게 찾는 방법이다. 
 * 해시 함수는 어떤 키에 해당하는 값의 주소를 테이블에서 찾아주는 함수이므로 조회 속도가 매우 빠르고 간단하다.
 */

/**
 * put(키, 값): 원소를 추가한다(또는 기존 원소를 수정한다).
 * remove(키): 키에 해당하는 원소를 찾아 삭제한다.
 * get(키): 키에 해당하는 원소를 찾아 그 값을 반환한다.
 */

export default class HashTable {
    constructor(table = []) {
        this.table = table;
    }

    _loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // 임의의 숫자
    }

    put(key, value) {
        let position = this._loseloseHashCode(key);
        console.log(position + ' - ' + key);
        this.table[position] = value;
    }

    get(key) {
        return this.table[this._loseloseHashCode(key)];
    }

    remove(key) {
        return this.table[this._loseloseHashCode(key)] = undefined;
    }
}
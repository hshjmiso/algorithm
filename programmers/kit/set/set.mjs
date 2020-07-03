/**
 * 집합(set)은 정렬되지 않은(unordered) 컬렉션으로 원소는 반복되지 않는다(중복된 원소가 없다).
 * 집합 자료 구조는 수학책에 나오는 유한 집합(finite set)의 개념을 적용한 것이다.
 * 집합은 유일하게 구분되는 원소의 모임이다.
 * 원소가 하나도 없는 집합을 널 집합(null set) 또는 공집합(empty set)이라고 한다.
 * 집합은 정렬 개념이 없는, 원소가 중복되지 않는 배열이라고 볼 수 있다.
 */

/**
 * add(원소): 원소를 추가한다.
 * remove(원소): 원소를 삭제한다.
 * has(원소): 어떤 원소가 집합에 포함되어 있는지 여부를 true/false로 반환 한다.
 * clear(): 모든 원소를 삭제한다.
 * size(): 원소 개수를 반환한다. 배열의 length 프로퍼티와 비슷하다.
 * values(): 집합의 모든 원소를 배열 형태로 반환한다.
 */

 export default class Set {
     constructor(items = {}) {
         this.items = items;
     }

     has(value) {
         return value in this.items;
     }

     add(value) {
         if (!this.has(value)) {
             this.items[value] = value;
             return true;
         }
         return false;
     }

     remove(value) {
         if (this.has(value)) {
             delete this.items[value];
             return true;
         }
         return false;
     }

     clear() {
         this.items = {};
     }

     size() {
         return Object.keys(this.items).length;
     }

     values() {
         return Object.keys(this.items);
     }

     // 합집합
     union(otherSet) {
         let unionSet = new Set();

         let values = this.values();
         for (let i = 0, len = values.length; i < len; i++) {
             unionSet.add(values[i]);
         }
         values = otherSet.values();
         for (let i = 0, len = values.length; i < len; i++) {
             unionSet.add(values[i]);
         }
         return unionSet;
     }

     // 교집합
     intersection(otherSet) {
         let intersectionSet = new Set();

         let values = this.values();
         for (let i = 0, len = values.length; i < len; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
         }

         return intersectionSet;
     }

     // 차집합
     difference(otherSet) {
         let differenceSet = new Set();

         let values = this.values();
         for (let i = 0, len = values.length; i < len; i++) {
             if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
             }
         }

         return differenceSet;
     }

     // 부분집합
     subset(otherSet) {
         if (this.size() > otherSet.size()) {
             return false;
         } else {
             let values = this.values();
             for (let i = 0, len = values.length; i < len ; i++) {
                 if (!otherSet.has(values[i])) {
                     return false;
                 }
             }
             return true;
         }
     }
 }
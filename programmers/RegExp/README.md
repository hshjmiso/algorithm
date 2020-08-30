# 정규 표현식
* [정규 표현식]()
* [자주 사용하는 정규표현식](./frequently_used_regexp.js)

## [정규 표현식 (Regular Expression)](./regexp.js)
정규 표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 또는 발췌하는데 사용한다.

반복문과 조건문을 사용하지 않고 정규표현식을 이용하면 매우 간단하게 표현할 수 있다. 하지만 정규표현식은 주석이나 공백을 허용하지 않고 여러가지 기호를 혼합하여 사용하기 때문에 가독성이 좋지 않다는 문제가 있다.

정규표현식은 리터럴 표기법으로 생성할 수 있다.

```js
/regexr/i
/(시작) regexr(패턴, pattern) /(종료) i(플래그, Flag)
```

정규표현식을 사용하는 자바스크립트 메소드
* [RegExp.prototype.exec](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
* [RegExp.prototype.test](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
* [String.prototype.match](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/match)
* [String.prototype.replace](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
* [String.prototype.search](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/search)
* [String.prototype.split](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)


### [플래그](./flag.js)
|Flag|Meaning|Description
|---|---|---|
|`i`|Ignore Case|대소문자를 구별하지 않고 검색한다.
|`g`|Global|문자열 내의 모든 패턴을 검색한다.
|`m`|Multi Line|문자열의 행이 바뀌더라도 검색을 계속한다.

플래그는 옵션이므로 선택적으로 사용한다. 플래그를 사용하지 않은 경우 문자열 내 검색 매칭 대상이 1개 이상이더라도 첫번째 대상만을 검색하고 종료한다.

### [패턴](./pattern.js)
패턴에는 검색하고 싶은 문자열을 지정한다. 따옴표는 생략한다. 또한 패턴은 특별한 의미를 가지는 메타문자(Metacharacter)또는 기호로 표현할 수 있다.

|Pattern|Description|Example
|---|---|---|
|`.`|임의의 문자 한 개를 의미한다.|`/.../g`
|`+`|앞선 패턴을 최소 한번 반복|`/A+/g`
|`|`|or의 의미|`/A|B/g`
|`[]`|[]내의 문자는 or로 동작한다.|`/A+|B+/g => /[AB]+/g`
|`-`|범위를 지정하려면 []내에 -를 사용한다.|`/[A-Z]+/g /[0-9]+/g`
|`\d`|숫자를 의미한다.|`/[\d,]+/g`
|`\D`|\d와 반대로 동작한다.|`/[\D,]+/g`
|`\w`|알파벳과 숫자를 의미한다.|`/[\w,]+/g`
|`\W`|\w와 반대로 동작한다.|`/[\W,]+/g`
|`^`|특정 단어로 시작하는지 검사한다.|`/^http/`
|`$`|특정 단어로 끝나는지 검사한다.|`html$`
|`\s`|여러 가지 공백 문자 (스페이스, 탭 등) => [\t\r\n\v\f]|`/^[\s]+`
|`{n,m}`|n ~ m자리|`/^[A-Za-z0-9]{4,10}$/`

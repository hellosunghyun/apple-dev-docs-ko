---
source_path: "documentation/ActivityKit/activityauthorizationinfo/activityenablementupdates-swift.struct/drop-while.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/activityenablementupdates-swift.struct/drop-while"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:dropwhile:0000:0001">drop(while:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dropwhile:0001:0001">**Framework**: ActivityKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dropwhile:0002:0001">주어진 클로저가 false를 반환할 때까지 기본 비동기 시퀀스에서 요소를 생략하고, 이후에는 나머지 모든 요소를 그대로 전달합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dropwhile:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:dropwhile:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dropwhile:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dropwhile:0004:0003">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:dropwhile:0004:0004">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dropwhile:0004:0005">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@preconcurrency
func drop(while predicate: @escaping (Self.Element) async -> Bool) -> AsyncDropWhileSequence<Self>
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">제공된 클로저가 <code>false</code>를 반환할 때까지 기본 시퀀스의 값을 건너뛰는 비동기 시퀀스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><code>drop(while:)</code>를 사용해 비동기 시퀀스에서 수신한 요소가 지정한 조건을 충족할 때까지 요소를 생략할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">이 예제에서 <code>Counter</code>라는 비동기 시퀀스는 <code>1</code>에서 <code>10</code>까지의 <code>Int</code> 값을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><code>drop(while:)</code> 메서드는 수정된 시퀀스가 <code>3</code>으로 나누어 떨어지는 값을 만날 때까지 수신한 값을 무시합니다.</span>

```swift
let stream = Counter(howHigh: 10)
    .drop { $0 % 3 != 0 }
for await number in stream {
    print(number, terminator: " ")
}
// Prints "3 4 5 6 7 8 9 10 "
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">프레디케이트가 <code>false</code>를 반환하면 시퀀스가 다시 이를 실행하지 않으며, 이후에는 기본 시퀀스의 요소를 그대로 전달합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0014:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0015:0001"><code>predicate</code>: 요소를 매개변수로 받아 해당 요소를 수정된 시퀀스에서 삭제할지 여부를 나타내는 불리언 값을 반환하는 클로저입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0017:0001">*<a href="https://developer.apple.com/documentation/activitykit/activityauthorizationinfo/activityenablementupdates-swift.struct/drop(while:">Apple Developer에서 보기</a>)*</span>

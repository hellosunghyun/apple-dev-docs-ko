---
source_path: "documentation/ActivityKit/activity/pushtokenupdates-swift.struct/compactmap-41orc.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activity/pushtokenupdates-swift.struct/compactmap-41orc"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:compactmap:0000:0001">compactMap(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:compactmap:0001:0001">**Framework**: ActivityKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:compactmap:0002:0001">Creates an asynchronous sequence that maps the given closure over the asynchronous sequence’s elements, omitting results that don’t return a value.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:compactmap:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:compactmap:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:compactmap:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:compactmap:0004:0003">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:compactmap:0004:0004">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:compactmap:0004:0005">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@preconcurrency
func compactMap<ElementOfResult>(_ transform: @escaping (Self.Element) async -> ElementOfResult?) -> AsyncCompactMapSequence<Self, ElementOfResult>
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">An asynchronous sequence that contains, in order, the non-<code>nil</code> elements produced by the <code>transform</code> closure.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Use the <code>compactMap(_:)</code> method to transform every element received from a base asynchronous sequence, while also discarding any <code>nil</code> results from the closure.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">Typically, you use this to transform from one type of element to another.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">In this example, an asynchronous sequence called <code>Counter</code> produces <code>Int</code> values from <code>1</code> to <code>5</code>.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002"><code>compactMap(_:)</code> 메서드에 제공되는 클로저는 각 <code>Int</code>를 받아 <code>romanNumeralDict</code> 사전에서 해당하는 <code>String</code>을 조회합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003"><code>4</code>에 대한 키가 없기 때문에, 이 경우 클로저가 <code>nil</code>을 반환하고 <code>compactMap(_:)</code>는 변환된 비동기 시퀀스에서 이를 생략합니다.</span>

```swift
let romanNumeralDict: [Int: String] =
    [1: "I", 2: "II", 3: "III", 5: "V"]
    
let stream = Counter(howHigh: 5)
    .compactMap { romanNumeralDict[$0] }
for await numeral in stream {
    print(numeral, terminator: " ")
}
// Prints "I II III V "
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>transform</code>: 매핑 클로저입니다. 이 시퀀스의 요소를 매개변수로 받아 동일한 타입 또는 다른 타입으로 변환된 값을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0016:0001">*<a href="https://developer.apple.com/documentation/activitykit/activity/pushtokenupdates-swift.struct/compactmap(_:">Apple Developer에서 보기</a>-41orc)*</span>

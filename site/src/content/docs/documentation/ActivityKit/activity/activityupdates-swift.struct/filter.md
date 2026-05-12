---
source_path: "documentation/ActivityKit/activity/activityupdates-swift.struct/filter.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activity/activityupdates-swift.struct/filter"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:filter:0000:0001">filter(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filter:0001:0001">**Framework**: ActivityKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filter:0002:0001">주어진 조건자를 만족하는 기본 시퀀스의 요소를 순서대로 포함하는 비동기 시퀀스를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:filter:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:filter:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filter:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filter:0004:0003">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:filter:0004:0004">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:filter:0004:0005">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@preconcurrency
func filter(_ isIncluded: @escaping (Self.Element) async -> Bool) -> AsyncFilterSequence<Self>
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">주어진 조건자를 만족하는 기본 시퀀스의 요소를 순서대로 포함하는 비동기 시퀀스를 생성합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 예제에서 <code>Counter</code>라는 비동기 시퀀스는 <code>1</code>에서 <code>10</code>까지의 <code>Int</code> 값을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002"><code>filter(_:)</code> 메서드는 짝수 값에 대해 <code>true</code>를, 홀수 값에 대해 <code>false</code>를 반환하므로 홀수 값이 필터링됩니다.</span>

```swift
let stream = Counter(howHigh: 10)
    .filter { $0 % 2 == 0 }
for await number in stream {
    print(number, terminator: " ")
}
// Prints "2 4 6 8 10 "
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>isIncluded</code>: 비동기 시퀀스의 요소를 인수로 받아 필터링된 시퀀스에 해당 요소를 포함할지 여부를 나타내는 Boolean 값을 반환하는 클로저입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0015:0001">*<a href="https://developer.apple.com/documentation/activitykit/activity/activityupdates-swift.struct/filter(_:">Apple Developer에서 보기</a>)*</span>

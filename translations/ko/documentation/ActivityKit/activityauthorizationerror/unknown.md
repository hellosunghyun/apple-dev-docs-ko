---
source_path: "documentation/ActivityKit/activityauthorizationerror/unknown.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activityauthorizationerror/unknown"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading::0000:0001">!=(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph::0001:0001">**Framework**: ActivityKit **Kind**: op</span>

<span class="ko-segment" data-segment-id="seg:paragraph::0002:0001">두 값이 같지 않은지를 나타내는 부울 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph::0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list::0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list::0004:0002">iPadOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func != (lhs: Self, rhs: Self) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">부등식은 동등성의 반대입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">임의의 값 <code>a</code>와 <code>b</code>에 대해 <code>a != b</code>이면 <code>a == b</code>는 <code>false</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이는 <code>Equatable</code>을 준수하는 모든 타입에 대한 <code>!=</code>(다르지 않음) 연산자의 기본 구현입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0010:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0001"><code>lhs</code>: 비교할 값입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0011:0002"><code>rhs</code>: 비교할 또 다른 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0013:0001">*<a href="https://developer.apple.com/documentation/activitykit/activityauthorizationerror/!=(_:_:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/ARKit/artrackedraycast/stoptracking.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/artrackedraycast/stoptracking"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stoptracking:0000:0001">stopTracking()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoptracking:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoptracking:0002:0001">레이캐스트 쿼리 반복을 중지합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stoptracking:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stoptracking:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoptracking:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stoptracking:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func stopTracking()
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">추적 레이캐스트는 <a href="artrackedraycast/stoptracking(">@@TOKEN_0@@</a>.md)을 명시적으로 호출해 중지할 때까지 계속 업데이트됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">레이캐스트는 다음 경우에 자동으로 중지됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001">ARKit이 <a href="arsessionobserver/sessionwasinterrupted(_:">@@TOKEN_0@@</a>.md)를 호출합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002">세션 구성을 변경할 때입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0003"><a href="artrackedraycast.md">@@TOKEN_0@@</a>를 할당 해제할 때입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/arkit/artrackedraycast/stoptracking(">Apple Developer에서 보기</a>)*</span>

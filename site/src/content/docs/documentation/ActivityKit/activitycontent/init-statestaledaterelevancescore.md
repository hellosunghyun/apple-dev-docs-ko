---
source_path: "documentation/ActivityKit/activitycontent/init-statestaledaterelevancescore.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/activitykit/activitycontent/init-statestaledaterelevancescore"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initstatestaledaterelevancescore:0000:0001">init(state:staleDate:relevanceScore:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstatestaledaterelevancescore:0001:0001">**Framework**: ActivityKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstatestaledaterelevancescore:0002:0001">Live Activity의 상태와 구성을 설명하는 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initstatestaledaterelevancescore:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initstatestaledaterelevancescore:0004:0001">iOS 16.2+</span>
- <span class="ko-segment" data-segment-id="seg:list:initstatestaledaterelevancescore:0004:0002">iPadOS 16.2+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(state: State, staleDate: Date?, relevanceScore: Double = 0.0)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="activitycontent/state.md">let state: State</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">라이프사이클에서의 Live Activity 현재 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="activitycontent/staledate.md">let staleDate: Date?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">시스템이 Live Activity를 오래된 것으로 간주하는 날짜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="activitycontent/relevancescore.md">let relevanceScore: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">여러 개의 Live Activity를 앱에서 시작할 때 표시 순서를 결정하는 점수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/activitykit/activitycontent/init(state:staledate:relevancescore:">View on Apple Developer</a>)*</span>

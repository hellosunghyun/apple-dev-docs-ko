---
source_path: "documentation/AVFoundation/avplayeritem/canstepforward.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritem/canstepforward"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:canstepforward:0000:0001">canStepForward</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canstepforward:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canstepforward:0002:0001">항목이 앞으로 이동(step) 지원을 지원하는지 나타내는 Boolean 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:canstepforward:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:canstepforward:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
nonisolated
var canStepForward: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">항목이 재생 준비가 되면 이 속성의 값은 변경되지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">항목의 현재 시간이 종료 시간과 같아지는 등의 경계 조건에 도달한 경우에도 이 동작은 계속 적용됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avplayeritem/canstepbackward.md">var canStepBackward: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">항목이 뒤로 이동(step) 지원을 지원하는지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avplayeritem/step(bycount:">func step(byCount: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">플레이어 항목의 현재 시간을 지정된 단계 수만큼 앞으로 또는 뒤로 이동합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritem/canstepforward">View on Apple Developer</a>*</span>

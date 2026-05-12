---
source_path: "documentation/AVKit/avexperiencecontroller/delegate-swiftproperty.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swiftproperty"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:delegate:0000:0001">delegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0001:0001">**Framework**: AVKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0002:0001">experience controller의 delegate 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0001">visionOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@MainActor
weak final var delegate: (any AVExperienceController.Delegate)? { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">시스템이 전환 및 기타 상태 변경을 앱에 알리도록 하려면 delegate를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">delegate 콜백을 사용해 앱의 상태와 사용자 인터페이스를 대응해 업데이트합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avexperiencecontroller/delegate-swift.protocol.md">AVExperienceController.Delegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">경험 변경에 대응하기 위해 구현할 method를 정의하는 protocol입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avkit/avexperiencecontroller/delegate-swift.property">View on Apple Developer</a>*</span>

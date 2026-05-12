---
source_path: "documentation/AVFoundation/avcompositiontrack/minframeduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcompositiontrack/minframeduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:minframeduration:0000:0001">minFrameDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:minframeduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:minframeduration:0002:0001">트랙 프레임의 최소 지속 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:minframeduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:minframeduration:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var minFrameDuration: CMTime { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">트랙의 최소 프레임 지속 시간은 최대 프레임 속도의 역수입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어, 최대 프레임 속도가 초당 30프레임인 비디오 트랙의 최소 프레임 지속 시간은 1/30, 즉 0.033초입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">트랙이 최소 프레임 지속 시간을 계산할 수 없거나 알 수 없으면 이 속성의 값은 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcompositiontrack/nominalframerate.md">var nominalFrameRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">트랙의 초당 프레임 수 단위 프레임 속도입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcompositiontrack/requiresframereordering.md">var requiresFrameReordering: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">트랙의 샘플에 서로 다른 표시 및 디코드 타임스탬프가 있을 수 있는지 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcompositiontrack/minframeduration">View on Apple Developer</a>*</span>

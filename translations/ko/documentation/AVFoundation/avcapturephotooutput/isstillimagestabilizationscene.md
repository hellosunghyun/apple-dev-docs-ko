---
source_path: "documentation/AVFoundation/avcapturephotooutput/isstillimagestabilizationscene.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isstillimagestabilizationscene"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isstillimagestabilizationscene:0000:0001">isStillImageStabilizationScene</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationscene:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationscene:0002:0001">카메라로 현재 미리보기 중인 장면에서 이미지 안정화가 필요한지를 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationscene:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationscene:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationscene:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationscene:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isStillImageStabilizationScene: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 카메라에 현재 표시되는 장면에 따라 변경됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">예를 들어 이 속성을 사용해 앱의 카메라 UI에서 이미지 안정화와 관련된 제어 항목을 강조 표시하고, 장면이 충분히 어둡기 때문에 이미지 안정화를 활성화하는 것이 바람직함을 사용자에게 알릴 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">사진 캡처 출력의 <a href="avcapturephotooutput/isstillimagestabilizationsupported.md">@@TOKEN_0@@</a> 값이 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>인 경우 이 속성 값은 항상 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_2@@</a>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 키-값 관찰을 지원합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isstillimagestabilizationscene">View on Apple Developer</a>*</span>

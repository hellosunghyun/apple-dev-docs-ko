---
source_path: "documentation/AVFoundation/avcapturestillimageoutput/isstillimagestabilizationactive.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationactive"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isstillimagestabilizationactive:0000:0001">isStillImageStabilizationActive</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationactive:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationactive:0002:0001">현재 캡처에서 정지 이미지 안정화가 사용 중인지 나타냅니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isstillimagestabilizationactive:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationactive:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationactive:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:isstillimagestabilizationactive:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isStillImageStabilizationActive: Bool { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 현재 비디오 안정화가 사용 중이면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>를 반환하고, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 속성은 키-값 관찰을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avcapturestillimageoutput/automaticallyenablesstillimagestabilizationwhenavailable.md">var automaticallyEnablesStillImageStabilizationWhenAvailable: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">정지 이미지 안정화를 자동으로 활성화해야 하는지 나타내는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcapturestillimageoutput/isstillimagestabilizationsupported.md">var isStillImageStabilizationSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">현재 캡처 중인 정지 이미지가 정지 이미지 안정화를 지원하는지 나타내는 불리언 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturestillimageoutput/isstillimagestabilizationactive">View on Apple Developer</a>*</span>

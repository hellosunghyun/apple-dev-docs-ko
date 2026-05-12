---
source_path: "documentation/AVFoundation/avassetimagegenerator/maximumsize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/maximumsize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:maximumsize:0000:0001">maximumSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maximumsize:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maximumsize:0002:0001">생성할 이미지의 최대 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:maximumsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:maximumsize:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var maximumSize: CGSize { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="creating-images-from-a-video-asset.md">Creating images from a video asset</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">기본값은 <a href="https://developer.apple.com/documentation/CoreFoundation/CGSize/zero">@@TOKEN_0@@</a>이며, 에셋의 크기 조정되지 않은 치수로 이미지를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">크기를 설정하면 이미지는 정의된 바운딩 박스에 맞도록 스케일됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">You define the aspect ratio of the scaled image by setting a value for the <a href="avassetimagegenerator/aperturemode-swift.property.md">@@TOKEN_0@@</a> property.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetimagegenerator/requestedtimetolerancebefore.md">var requestedTimeToleranceBefore: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">요청 시간 이전에 이미지 생성을 허용하는 최대 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetimagegenerator/requestedtimetoleranceafter.md">var requestedTimeToleranceAfter: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">요청 시간 이후에 이미지 생성을 허용하는 최대 시간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetimagegenerator/dynamicrangepolicy-swift.property.md">var dynamicRangePolicy: AVAssetImageGenerator.DynamicRangePolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">이미지 생성 시 사용할 동적 범위 정책입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetimagegenerator/dynamicrangepolicy-swift.struct.md">AVAssetImageGenerator.DynamicRangePolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">이미지 생성 시 적용할 동적 범위 정책을 지정하는 형식입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avassetimagegenerator/appliespreferredtracktransform.md">var appliesPreferredTrackTransform: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">에셋에서 이미지를 생성할 때 트랙 행렬을 적용할지 여부를 지정하는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avassetimagegenerator/aperturemode-swift.property.md">var apertureMode: AVAssetImageGenerator.ApertureMode?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">생성된 이미지의 aperture 모드를 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avassetimagegenerator/aperturemode-swift.struct.md">AVAssetImageGenerator.ApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">이미지 생성 시 사용할 aperture 모드를 정의하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/maximumsize">View on Apple Developer</a>*</span>

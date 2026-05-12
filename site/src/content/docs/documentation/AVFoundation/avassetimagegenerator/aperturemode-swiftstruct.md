---
source_path: "documentation/AVFoundation/avassetimagegenerator/aperturemode-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetimagegeneratoraperturemode:0000:0001">AVAssetImageGenerator.ApertureMode</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetimagegeneratoraperturemode:0001:0001">**Framework**: AVFoundation **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetimagegeneratoraperturemode:0002:0001">이미지를 생성할 때 사용할 조리개 모드를 정의하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetimagegeneratoraperturemode:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0001">iOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0002">iPadOS 4.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0004">macOS 10.7+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetimagegeneratoraperturemode:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct ApertureMode
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:aperture-modes:0008:0001">조리개 모드</span>

- <span class="ko-segment" data-segment-id="seg:list:aperture-modes:0009:0001"><a href="avassetimagegenerator/aperturemode-swift.struct/cleanaperture.md">static let cleanAperture: AVAssetImageGenerator.ApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:aperture-modes:0010:0001">픽셀 종횡비와 클린 조리개를 모두 적용하는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:aperture-modes:0011:0001"><a href="avassetimagegenerator/aperturemode-swift.struct/encodedpixels.md">static let encodedPixels: AVAssetImageGenerator.ApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:aperture-modes:0012:0001">픽셀 종횡비와 클린 조리개를 모두 적용하지 않는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:aperture-modes:0013:0001"><a href="avassetimagegenerator/aperturemode-swift.struct/productionaperture.md">static let productionAperture: AVAssetImageGenerator.ApertureMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:aperture-modes:0014:0001">픽셀 종횡비만 적용하는 모드입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avassetimagegenerator/aperturemode-swift.struct/init(rawvalue:">init(rawValue: String)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0017:0001">문자열 값으로 조리개 모드를 생성합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0018:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0019:0001">준수 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0002"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0003"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0004"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0020:0005"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0021:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avassetimagegenerator/maximumsize.md">var maximumSize: CGSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이미지 생성 시 최대 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avassetimagegenerator/requestedtimetolerancebefore.md">var requestedTimeToleranceBefore: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">요청한 시간 이전에 이미지 생성이 허용되는 최대 시간 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avassetimagegenerator/requestedtimetoleranceafter.md">var requestedTimeToleranceAfter: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">요청한 시간 이후에 이미지 생성이 허용되는 최대 시간 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avassetimagegenerator/dynamicrangepolicy-swift.property.md">var dynamicRangePolicy: AVAssetImageGenerator.DynamicRangePolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">이미지 생성 시 사용할 동적 범위 정책입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avassetimagegenerator/dynamicrangepolicy-swift.struct.md">AVAssetImageGenerator.DynamicRangePolicy</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avassetimagegenerator/appliespreferredtracktransform.md">var appliesPreferredTrackTransform: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">에셋에서 이미지를 생성할 때 트랙 행렬 또는 행렬들을 적용할지 지정하는 불리언 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avassetimagegenerator/aperturemode-swift.property.md">var apertureMode: AVAssetImageGenerator.ApertureMode?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">생성된 이미지의 조리개 모드를 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/aperturemode-swift.struct">View on Apple Developer</a>*</span>

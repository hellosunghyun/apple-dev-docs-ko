---
source_path: "documentation/AVFoundation/avsemanticsegmentationmatte/mattingimage.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/mattingimage"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:mattingimage:0000:0001">mattingImage</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mattingimage:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mattingimage:0002:0001">의미론적 분할 마테(matte)의 내부 이미지입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:mattingimage:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:mattingimage:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var mattingImage: CVPixelBuffer { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">픽셀 버퍼의 형식 유형은 <a href="avsemanticsegmentationmatte/pixelformattype.md">@@TOKEN_0@@</a> 속성을 사용해 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avsemanticsegmentationmatte/mattetype-swift.property.md">var matteType: AVSemanticSegmentationMatte.MatteType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">의미론적 분할 마테 이미지 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsemanticsegmentationmatte/mattetype-swift.struct.md">AVSemanticSegmentationMatte.MatteType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">기본 이미지와 함께 캡처할 수 있는 의미론적 분할 마테 이미지의 유형을 정의하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsemanticsegmentationmatte/pixelformattype.md">var pixelFormatType: OSType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">이 객체의 내부 마팅 이미지에 대한 픽셀 형식 유형입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsemanticsegmentationmatte/mattingimage">View on Apple Developer</a>*</span>

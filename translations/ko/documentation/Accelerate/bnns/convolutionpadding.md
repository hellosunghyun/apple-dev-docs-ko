---
source_path: "documentation/Accelerate/bnns/convolutionpadding.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/convolutionpadding"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsconvolutionpadding:0000:0001">BNNS.ConvolutionPadding</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsconvolutionpadding:0001:0001">**Framework**: Accelerate **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsconvolutionpadding:0002:0001">컨볼루션 패딩 모드를 설명하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsconvolutionpadding:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsconvolutionpadding:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum ConvolutionPadding
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:convolution-padding-modes:0008:0001">컨볼루션 패딩 모드</span>

- <span class="ko-segment" data-segment-id="seg:list:convolution-padding-modes:0009:0001"><a href="bnns/convolutionpadding/asymmetric(left:right:up:down:">case asymmetric(left: Int, right: Int, up: Int, down: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolution-padding-modes:0010:0001">각 면에 대해 개별 패딩 값을 지원하는 패딩 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:convolution-padding-modes:0011:0001"><a href="bnns/convolutionpadding/symmetric(x:y:">BNNS.ConvolutionPadding.symmetric(x:y:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:convolution-padding-modes:0012:0001">대칭 패딩을 제공하는 패딩 모드입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:special-values:0013:0001">특수 값</span>

- <span class="ko-segment" data-segment-id="seg:list:special-values:0014:0001"><a href="bnns/convolutionpadding/zero.md">static var zero: BNNS.ConvolutionPadding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:special-values:0015:0001">모든 면에서 패딩이 0인 패딩 모드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:special-values:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/convolutionpadding">View on Apple Developer</a>*</span>

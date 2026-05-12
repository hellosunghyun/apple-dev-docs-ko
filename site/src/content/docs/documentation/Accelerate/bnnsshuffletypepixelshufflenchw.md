---
source_path: "documentation/Accelerate/bnnsshuffletypepixelshufflenchw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsshuffletypepixelshufflenchw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsshuffletypepixelshufflenchw:0000:0001">BNNSShuffleTypePixelShuffleNCHW</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshuffletypepixelshufflenchw:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshuffletypepixelshufflenchw:0002:0001">NCHW (batch, channels, height, width) 형식의 pixel shuffle은 Column Row Depth (CRD) 모드에서 depth-to-space와 동일합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsshuffletypepixelshufflenchw:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsshuffletypepixelshufflenchw:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSShuffleTypePixelShuffleNCHW: BNNSShuffleType { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">Use this shuffle type to rearrange the elements in a tensor of shape <code>(N,C×rxr,H,W)</code> to a tensor of shape <code>(N,C,H×r,W×r)</code>, where <code>r</code> is an upscale factor.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnsshuffletype/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="bnnsshuffletype/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0003"><a href="bnnsshuffletype/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0004"><a href="bnnsshuffletypepixelunshufflenchw.md">var BNNSShuffleTypePixelUnshuffleNCHW: BNNSShuffleType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">NCHW (batch, channels, height, width) 형식의 pixel unshuffle은 Column Row Depth (CRD) 모드에서 space-to-depth와 동일합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsshuffletypedepthtospacenchw.md">var BNNSShuffleTypeDepthToSpaceNCHW: BNNSShuffleType</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="bnnsshuffletypespacetodepthnchw.md">var BNNSShuffleTypeSpaceToDepthNCHW: BNNSShuffleType</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsshuffletypepixelshufflenchw">View on Apple Developer</a>*</span>

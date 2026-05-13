---
source_path: "documentation/Accelerate/bnnslinearsamplingaligncorners.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnslinearsamplingaligncorners"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslinearsamplingaligncorners:0000:0001">BNNSLinearSamplingAlignCorners</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslinearsamplingaligncorners:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslinearsamplingaligncorners:0002:0001">The align corners sampling mode.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslinearsamplingaligncorners:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0004">macOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslinearsamplingaligncorners:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSLinearSamplingAlignCorners: BNNSLinearSamplingMode { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">This sampling mode is the same as <a href="bnnslinearsamplingstrictaligncorners.md">@@TOKEN_0@@</a> unless the input grid has a size of <code>1</code>.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/355e2c150e6b31f68b1f99074bfa3127/media-3231009%402x.png">모션 블러 적용 전후의 가상 콘텐츠 렌더링을 보여주는 스크린샷.</a></span>

```swift
spacing = (Xin - Xin/Xout) / (Xout - 1)

grid_point[0] = (Xin-1) / 2, if Xout==1
grid_point[i] = min(Xin-1, max(0, i*spacing)), for i=0,1,...,Xout-1, if Xout!=1
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnslinearsamplingmode/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0002"><a href="bnnslinearsamplingmode/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0003"><a href="bnnslinearsamplingmode/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0004"><a href="bnnslinearsamplingdefault.md">var BNNSLinearSamplingDefault: BNNSLinearSamplingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Code 39 바코드 심볼리오지를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnslinearsamplingunaligncorners.md">var BNNSLinearSamplingUnalignCorners: BNNSLinearSamplingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Code 39 checksum 바코드 심볼리오지를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnslinearsamplingstrictaligncorners.md">var BNNSLinearSamplingStrictAlignCorners: BNNSLinearSamplingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Code 39 full ASCII 바코드 심볼리오지를 나타내는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnslinearsamplingoffsetcorners.md">var BNNSLinearSamplingOffsetCorners: BNNSLinearSamplingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Code 39 full ASCII checksum 바코드 심볼리오지를 나타내는 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnslinearsamplingaligncorners">View on Apple Developer</a>*</span>

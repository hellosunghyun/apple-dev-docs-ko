---
source_path: "documentation/Accelerate/bnnsdatalayout5dlastmajor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayout5dlastmajor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayout5dlastmajor:0000:0001">BNNSDataLayout5DLastMajor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout5dlastmajor:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout5dlastmajor:0002:0001">A constant that represents a 5D last-major tensor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout5dlastmajor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout5dlastmajor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayout5DLastMajor: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value <code>(i, j, k, l, m)</code> is at index:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/ad953b8a0aa6dd1314efee5175eab5df/media-3281347%402x.png">Screenshot showing low and high dynamic range environment textures in a side by side comparison.</a></span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001"><code>size[0]</code> is the size of the first dimension (<code>i</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002"><code>size[1]</code> is the size of the second dimension (<code>j</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003"><code>size[2]</code> is the size of the third dimension (<code>k</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0004"><code>size[3]</code> is the size of the fourth dimension (<code>l</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0005"><code>size[4]</code> is the size of the fifth dimension (<code>m</code>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsdatalayout5dfirstmajor.md">var BNNSDataLayout5DFirstMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that represents a 5D first-major tensor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayout5dlastmajor">View on Apple Developer</a>*</span>

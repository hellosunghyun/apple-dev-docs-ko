---
source_path: "documentation/Accelerate/vimage_ypcbcrpixelrange/cbcrrangemax.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage_ypcbcrpixelrange/cbcrrangemax"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cbcrrangemax:0000:0001">CbCrRangeMax</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cbcrrangemax:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cbcrrangemax:0002:0001">이 비디오 형식의 <code>{Cb, Cr} = 0.5</code> 인코딩 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cbcrrangemax:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:cbcrrangemax:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var CbCrRangeMax: Int32
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이는 인코딩 가능한 범위의 상단 근처 값입니다(예:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002"><code>0xf0</code>), 최대 인코딩 가능한 값이 아닌 경우(예:</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003"><code>0xff</code>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vimage_ypcbcrpixelrange/yp_bias.md">var Yp_bias: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">이 비디오 형식의 <code>Y' = 0.0</code> 인코딩 값입니다(비트 깊이에 따라 다릅니다).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage_ypcbcrpixelrange/cbcr_bias.md">var CbCr_bias: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">이 비디오 형식의 <code>{Cb, Cr} = 0.0</code> 인코딩 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage_ypcbcrpixelrange/yprangemax.md">var YpRangeMax: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">The encoding for <code>Y' = 1.0</code> for this video format.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage_ypcbcrpixelrange/ypmax.md">var YpMax: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">The encoding for the maximum allowed Y’ value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage_ypcbcrpixelrange/ypmin.md">var YpMin: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The encoding of the minimum allowed Y’ value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage_ypcbcrpixelrange/cbcrmax.md">var CbCrMax: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The encoding of the maximum allowed <code>{Cb, Cr}</code> value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimage_ypcbcrpixelrange/cbcrmin.md">var CbCrMin: Int32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The encoding of the minimum allowed <code>{Cb, Cr}</code> value.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage_ypcbcrpixelrange/cbcrrangemax">View on Apple Developer</a>*</span>

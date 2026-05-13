---
source_path: "documentation/Accelerate/bnnsdatalayout4dfirstmajor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayout4dfirstmajor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayout4dfirstmajor:0000:0001">BNNSDataLayout4DFirstMajor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout4dfirstmajor:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout4dfirstmajor:0002:0001">A constant that represents a 4D first-major tensor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout4dfirstmajor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout4dfirstmajor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayout4DFirstMajor: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 <a href="avaudiosession/category-swift.struct/ambient.md">@@TOKEN_0@@</a> 카테고리를 사용하는 앱의 오디오를 포함해 다른 오디오가 재생 중이면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>l * stride[0] + k * stride[1] + j * stride[2] + i * stride[3]</code></span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001"><code>size[0]</code> is the size of the first dimension (<code>i</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002"><code>size[1]</code> is the size of the second dimension (<code>j</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003"><code>size[2]</code> is the size of the third dimension (<code>k</code>).</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0004"><code>size[3]</code> is the size of the fourth dimension (<code>l</code>).</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsdatalayoutconvolutionweightsoihw.md">var BNNSDataLayoutConvolutionWeightsOIHW: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that represents a 4D array of convolution weights.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsdatalayoutconvolutionweightsiohrwr.md">var BNNSDataLayoutConvolutionWeightsIOHrWr: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A constant that represents a 4D array of rotated convolution weights.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsdatalayoutconvolutionweightsoihrwr.md">var BNNSDataLayoutConvolutionWeightsOIHrWr: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A constant that represents a 4D array of rotated convolution weights.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsdatalayoutconvolutionweightsoihw_pack32.md">var BNNSDataLayoutConvolutionWeightsOIHW_Pack32: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsdatalayout4dlastmajor.md">var BNNSDataLayout4DLastMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A constant that represents a 4D last-major tensor.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayout4dfirstmajor">View on Apple Developer</a>*</span>

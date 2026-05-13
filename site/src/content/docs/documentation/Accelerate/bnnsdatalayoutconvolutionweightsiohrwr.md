---
source_path: "documentation/Accelerate/bnnsdatalayoutconvolutionweightsiohrwr.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayoutconvolutionweightsiohrwr"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayoutconvolutionweightsiohrwr:0000:0001">BNNSDataLayoutConvolutionWeightsIOHrWr</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutconvolutionweightsiohrwr:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutconvolutionweightsiohrwr:0002:0001">A constant that represents a 4D array of rotated convolution weights.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutconvolutionweightsiohrwr:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutconvolutionweightsiohrwr:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayoutConvolutionWeightsIOHrWr: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">메타데이터 형식에는 ID3, iTunes 메타데이터 등이 포함될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>(kw - 1 - kx) * stride[0] + (kh - 1 - ky) * stride[1] + InChannel * stride[2] + OutChannel * stride[3]</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0001"><code>size[0]</code> is the convolution kernel width in pixels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0002"><code>size[1]</code> is the convolution kernel height in pixels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0003"><code>size[2]</code> is the number of input channels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0004"><code>size[3]</code> is the number of output channels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0005"><code>kw</code> is <code>size[0]</code> and <code>kx</code> is between <code>0</code> to <code>kw-1</code>.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0010:0006"><code>kh</code> is <code>size[1]</code> and <code>ky</code> is between <code>0</code> to <code>kh-1</code>.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsdatalayoutconvolutionweightsoihw.md">var BNNSDataLayoutConvolutionWeightsOIHW: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A constant that represents a 4D array of convolution weights.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnsdatalayoutconvolutionweightsoihrwr.md">var BNNSDataLayoutConvolutionWeightsOIHrWr: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A constant that represents a 4D array of rotated convolution weights.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsdatalayoutconvolutionweightsoihw_pack32.md">var BNNSDataLayoutConvolutionWeightsOIHW_Pack32: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">A constant that represents a 4D array of packed convolution weights with 32-output channel packing and 128-byte array address alignment.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsdatalayout4dfirstmajor.md">var BNNSDataLayout4DFirstMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 로케일에 적합한 언어로 제공되는 자산의 가사입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsdatalayout4dlastmajor.md">var BNNSDataLayout4DLastMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">소스 미디어에 공백이 있어 합성에서 원본 미디어를 추가할 수 없습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayoutconvolutionweightsiohrwr">View on Apple Developer</a>*</span>

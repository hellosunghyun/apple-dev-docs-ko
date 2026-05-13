---
source_path: "documentation/Accelerate/bnnsdatalayoutimagechw.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayoutimagechw"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayoutimagechw:0000:0001">BNNSDataLayoutImageCHW</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutimagechw:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutimagechw:0002:0001">A constant that represents a 3D image stack.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayoutimagechw:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayoutimagechw:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayoutImageCHW: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The value <code>(x, y, channel)</code> is at index <code>x * stride[0] + y * stride[1] + channel * stride[2]</code>.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001"><code>size[0]</code> is the image width in pixels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002"><code>size[1]</code> is the image height in pixels.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0003"><code>size[2]</code> is the number of channels.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsdatalayout3dfirstmajor.md">var BNNSDataLayout3DFirstMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">오디오 입력과 출력이 동일한 실시간 I/O 콜백에서 표시되어야 하는지 나타내는 I/O 유형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsdatalayout3dlastmajor.md">var BNNSDataLayout3DLastMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">A constant that represents a 3D last-major tensor.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsdatalayoutsne.md">var BNNSDataLayoutSNE: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">A constant that represents a 3D tensor with the size elements embedding dimension, batch size, and sequence length.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsdatalayoutnse.md">var BNNSDataLayoutNSE: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">A constant that represents a 3D tensor with the size elements embedding dimension, sequence length, and batch size.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayoutimagechw">View on Apple Developer</a>*</span>

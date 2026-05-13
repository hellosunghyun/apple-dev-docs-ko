---
source_path: "documentation/Accelerate/bnnsdatalayout3dlastmajor.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsdatalayout3dlastmajor"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsdatalayout3dlastmajor:0000:0001">BNNSDataLayout3DLastMajor</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout3dlastmajor:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout3dlastmajor:0002:0001">3D last-major 텐서를 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsdatalayout3dlastmajor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsdatalayout3dlastmajor:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSDataLayout3DLastMajor: BNNSDataLayout { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">값 <code>(i, j, k)</code>는 인덱스 <code>i * stride[0] + j * stride[1] + k * stride[2]</code>에 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001"><code>size[0]</code>는 첫 번째 차원(<code>i</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002"><code>size[1]</code>는 두 번째 차원(<code>j</code>)의 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0003"><code>size[2]</code>는 세 번째 차원(<code>k</code>)의 크기입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="bnnsdatalayoutimagechw.md">var BNNSDataLayoutImageCHW: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">3D 이미지 스택을 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnsdatalayout3dfirstmajor.md">var BNNSDataLayout3DFirstMajor: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">3D first-major 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnsdatalayoutsne.md">var BNNSDataLayoutSNE: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">임베딩 차원, 배치 크기, 시퀀스 길이 크기 요소를 가진 3D 텐서를 나타내는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="bnnsdatalayoutnse.md">var BNNSDataLayoutNSE: BNNSDataLayout</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">임베딩 차원, 시퀀스 길이, 배치 크기 요소를 가진 3D 텐서를 나타내는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsdatalayout3dlastmajor">View on Apple Developer</a>*</span>

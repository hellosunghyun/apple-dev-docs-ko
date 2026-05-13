---
source_path: "documentation/Accelerate/bnns/fusedconvolutionparameters/stride.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionparameters/stride"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:stride:0000:0001">stride</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stride:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stride:0002:0001">입력 이미지의 너비 및 높이 증가량입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:stride:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:stride:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var stride: (x: Int, y: Int)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnns/fusedconvolutionparameters/type.md">var type: BNNS.ConvolutionType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">컨볼루션 유형을 지정하는 열거형입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnns/fusedconvolutionparameters/weights.md">var weights: BNNSNDArrayDescriptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">가중치의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/fusedconvolutionparameters/bias.md">var bias: BNNSNDArrayDescriptor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">바이어스의 디스크립터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/fusedconvolutionparameters/dilationstride.md">var dilationStride: (x: Int, y: Int)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">컨볼루션 중 입력 이미지의 요소 사이 가로 및 세로 증가량입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnns/fusedconvolutionparameters/groupsize.md">var groupSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">컨볼루션 그룹 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnns/fusedconvolutionparameters/padding.md">var padding: BNNS.ConvolutionPadding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">연산이 입력의 가장자리에 가상으로 추가하는 0의 개수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/fusedconvolutionparameters/stride">View on Apple Developer</a>*</span>
